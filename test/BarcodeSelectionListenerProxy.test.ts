import { describe, it, expect, jest, beforeAll } from '@jest/globals';
import {  createNativeProxy, FactoryMaker } from 'scandit-datacapture-frameworks-core';
import { BarcodeSelection, BarcodeSelectionFeedback, BarcodeSelectionListenerEvents, BarcodeSelectionListenerProxy, BarcodeSelectionProxy, BarcodeSelectionSession, BarcodeSelectionSettings, PrivateBarcodeSelection } from 'scandit-datacapture-frameworks-barcode';
import { Capacitor, CapacitorWindow } from '../src/ts/Capacitor/Capacitor';
import { MockDataCaptureContext } from '../__mocks__/ScanditDataCaptureCore';
import { CapacitorNativeCaller } from "scandit-capacitor-datacapture-core";

declare const window: CapacitorWindow;

describe('BarcodeSelectionListenerProxyTests', () => {
  const session = '{"frameSequenceId":3,"newlySelectedBarcodes":[],"newlyUnselectedBarcodes":[],"selectedBarcodes":[]}';

  let mode: BarcodeSelection;

  beforeAll(() => {
    FactoryMaker.bindLazyInstance('BarcodeSelectionProxy', () => {
      const caller = new CapacitorNativeCaller(Capacitor.pluginName)
      return createNativeProxy<BarcodeSelectionProxy>(caller);
    });

    FactoryMaker.bindLazyInstance('BarcodeSelectionListenerProxy', () => {
      const caller = new CapacitorNativeCaller(Capacitor.pluginName)
      return createNativeProxy<BarcodeSelectionListenerProxy>(caller);
      
      // Mock the subscribeForEvents method to properly register events
      // proxy.subscribeForEvents = (events: string[]) => {
      //   events.forEach(event => {
      //     if (!window.Capacitor.__eventCallbacks[event]) {
      //       window.Capacitor.__eventCallbacks[event] = (payload: any) => {
      //         proxy.eventEmitter.emit(event, payload);
      //       };
      //     }
      //   });
      // };
      
      // return proxy;
    });

    const settings = new BarcodeSelectionSettings();
    // @ts-ignore
    mode = new BarcodeSelection(settings);
    const context = new MockDataCaptureContext();
    context.addMode(mode);
  });

  it('Check BarcodeSelection has been constructed & enabled', () => {
    mode.isEnabled = true;
    mode.feedback = BarcodeSelectionFeedback.default;

    expect(mode).toBeTruthy();
    expect(window.Capacitor.Plugins[window.Capacitor.pluginName].setBarcodeSelectionModeEnabledState).toBeCalledWith({modeId: (mode as any as PrivateBarcodeSelection).modeId, enabled: true});
    expect(window.Capacitor.Plugins[window.Capacitor.pluginName].updateBarcodeSelectionFeedback).toHaveBeenCalledTimes(1);
  });

  it('didUpdateSession listener responds to events', async () => {
    const payload = { 
      name: BarcodeSelectionListenerEvents.didUpdateSession, 
      data: JSON.stringify({session: session, "frameId": "frameId", modeId: (mode as any as PrivateBarcodeSelection).modeId }) 
    };
    const fired = jest.fn();
    let result: BarcodeSelectionSession | null = null;

    mode.addListener({
      didUpdateSession: async (_, session) => {
        fired();
        result = session;
      }
    });

    await new Promise(resolve => setTimeout(resolve, 10));

    window.Capacitor.__eventCallbacks[BarcodeSelectionListenerEvents.didUpdateSession](payload);

    await new Promise(resolve => setTimeout(resolve, 1000));

    expect(window.Capacitor.Plugins[window.Capacitor.pluginName].finishBarcodeSelectionDidUpdateSession).toBeCalledTimes(1);
    expect(fired).toHaveBeenCalledTimes(1);
    expect(result!.frameSequenceID).toEqual(3);
  });

  it('didUpdateSelection listener responds to events', async () => {
    const payload = { name: BarcodeSelectionListenerEvents.didUpdateSelection, data: JSON.stringify({'session': session, "frameId": "frameId", "modeId": (mode as any as PrivateBarcodeSelection).modeId}) };
    const fired = jest.fn();
    let result: BarcodeSelectionSession | null = null;

    mode.addListener({
      didUpdateSelection: async (_, session) => {
        fired();
        result = session;
      }
    });

    await new Promise(resolve => setTimeout(resolve, 10));

    window.Capacitor.__eventCallbacks[BarcodeSelectionListenerEvents.didUpdateSelection](payload);

    await new Promise(resolve => setTimeout(resolve, 1000));

    expect(window.Capacitor.Plugins[window.Capacitor.pluginName].finishBarcodeSelectionDidSelect).toBeCalledTimes(1);
    expect(fired).toHaveBeenCalledTimes(1);
    expect(result!.frameSequenceID).toEqual(3);
  });

  it('Check BarcodeSelection listener unsubscription works', async () => {
    const payload = { name: BarcodeSelectionListenerEvents.didUpdateSession, data: JSON.stringify({session: session, "frameId": "frameId", "modeId": (mode as any as PrivateBarcodeSelection).modeId}) };
    const fired = jest.fn();

    const listener = {
      didUpdateSelection: async () => {
        fired();
      },
      didUpdateSession: async () => {
        fired();
      }
    };

    mode.addListener(listener);
    mode.removeListener(listener);

    await new Promise(resolve => setTimeout(resolve, 10));

    payload.name = BarcodeSelectionListenerEvents.didUpdateSession;
    window.Capacitor.__eventCallbacks[BarcodeSelectionListenerEvents.didUpdateSession](payload);
    payload.name = BarcodeSelectionListenerEvents.didUpdateSelection;
    window.Capacitor.__eventCallbacks[BarcodeSelectionListenerEvents.didUpdateSelection](payload);

    await new Promise(resolve => setTimeout(resolve, 1000));

    expect(fired).toBeCalledTimes(0);
  });
});
