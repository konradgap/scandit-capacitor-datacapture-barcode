import { describe, it, expect, jest } from '@jest/globals';
import { createNativeProxy, FactoryMaker } from 'scandit-datacapture-frameworks-core';
import { BarcodeBatch, BarcodeBatchListenerEvents, BarcodeBatchListenerProxy, BarcodeBatchSession, BarcodeBatchSettings, PrivateBarcodeBatch } from 'scandit-datacapture-frameworks-barcode';
import { Capacitor, capacitorBarcodeNativeCaller, CapacitorWindow } from '../src/ts/Capacitor/Capacitor';
import { MockDataCaptureContext } from '../__mocks__/ScanditDataCaptureCore';

declare const window: CapacitorWindow;

describe('BarcodeBatchListenerProxyTests', () => {
  const mockWindow = window.Capacitor.Plugins[Capacitor.pluginName];

  FactoryMaker.bindLazyInstance('BarcodeBatchListenerProxy', () => {
    return createNativeProxy<BarcodeBatchListenerProxy>(capacitorBarcodeNativeCaller);
  });

  const settings = new BarcodeBatchSettings();
  // @ts-ignore
  const mode = new BarcodeBatch(settings);
  const context = new MockDataCaptureContext();
  context.addMode(mode);

  const session = '{"addedTrackedBarcodes":[],"frameSequenceId":2,"removedTrackedBarcodes":[],"trackedBarcodes":{},"updatedTrackedBarcodes":[]}';

  it('Check BarcodeBatch has been constructed & enabled', () => {
    mode.isEnabled = true;
    mode.applySettings(settings);

    expect(mode).toBeTruthy();
    expect(window.Capacitor.Plugins[window.Capacitor.pluginName].setBarcodeBatchModeEnabledState).toBeCalledWith({modeId: (mode as any as PrivateBarcodeBatch).modeId, enabled: true});
    expect(window.Capacitor.Plugins[window.Capacitor.pluginName].applyBarcodeBatchModeSettings).toHaveBeenCalledWith({modeId: (mode as any as PrivateBarcodeBatch).modeId, modeSettingsJson: JSON.stringify(settings)});
  });

  it('didUpdateSession listener responds to events', async () => {
    const payload = { name: BarcodeBatchListenerEvents.didUpdateSession, data: JSON.stringify({session: session, "frameId": "frameId", "modeId": (mode as any as PrivateBarcodeBatch).modeId})};
    const fired = jest.fn();
    let result: BarcodeBatchSession | null = null;

    mode.addListener({
      didUpdateSession: async (_, session) => {
        fired();
        result = session;
      }
    });

    window.Capacitor.__eventCallbacks[BarcodeBatchListenerEvents.didUpdateSession](payload);

    await new Promise(resolve => setTimeout(resolve, 1000));

    expect(window.Capacitor.Plugins[window.Capacitor.pluginName].finishBarcodeBatchDidUpdateSessionCallback).toBeCalledTimes(1);
    expect(fired).toHaveBeenCalledTimes(1);
    expect(result!.frameSequenceID).toEqual(JSON.parse(session).frameSequenceId);
  });

  it('Check BarcodeBatch listener unsubscription works', () => {
    const payload = { name: BarcodeBatchListenerEvents.didUpdateSession, data: JSON.stringify({session: session, "frameId": "frameId", "modeId": (mode as any as PrivateBarcodeBatch).modeId})};
    const fired = jest.fn();

    const listener = {
      didUpdateSession: async () => {
        fired();
      }
    };

    mode.addListener(listener);
    mode.removeListener(listener);

    window.Capacitor.__eventCallbacks[BarcodeBatchListenerEvents.didUpdateSession](payload);

    expect(fired).toBeCalledTimes(0);
  });

});
