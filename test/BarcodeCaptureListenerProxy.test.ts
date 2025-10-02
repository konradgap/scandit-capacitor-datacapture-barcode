import { describe, it, expect, jest, beforeAll, afterEach } from '@jest/globals';
import { createNativeProxy, FactoryMaker } from 'scandit-datacapture-frameworks-core';
import { BarcodeCapture, BarcodeCaptureFeedback, BarcodeCaptureListenerEvents, BarcodeCaptureListenerProxy, BarcodeCaptureSession, BarcodeCaptureSettings } from 'scandit-datacapture-frameworks-barcode';
import { Capacitor, CapacitorWindow } from '../src/ts/Capacitor/Capacitor';
import { MockDataCaptureContext } from '../__mocks__/ScanditDataCaptureCore';
import { CapacitorNativeCaller } from 'scandit-capacitor-datacapture-core';

declare const window: CapacitorWindow;

describe('BarcodeCaptureListenerProxyTests', () => {
  const mockWindow = window.Capacitor.Plugins[Capacitor.pluginName];

  const session = '{"frameSequenceId":2,"newlyLocalizedBarcodes":[]}';

  let context: MockDataCaptureContext;

  beforeAll(() => {
    FactoryMaker.bindLazyInstance('BarcodeCaptureListenerProxy', () => {
      const caller = new CapacitorNativeCaller(Capacitor.pluginName);
      return createNativeProxy<BarcodeCaptureListenerProxy>(caller);
    });

    context = new MockDataCaptureContext();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Check BarcodeCapture has been constructed & enabled', () => {
    const mode = new BarcodeCapture(new BarcodeCaptureSettings());
    context.setMode(mode);
    mode.isEnabled = true;
    mode.feedback = BarcodeCaptureFeedback.default;

    expect(mode).toBeTruthy();
    expect(mockWindow.setBarcodeCaptureModeEnabledState).toBeCalledTimes(1);
    expect(mockWindow.updateBarcodeCaptureMode).toHaveBeenCalledTimes(1);
  });

  it('didUpdateSession listener responds to events', async () => {
    const mode = new BarcodeCapture(new BarcodeCaptureSettings());
    context.setMode(mode);

    const payload = { name: BarcodeCaptureListenerEvents.didUpdateSession, data: JSON.stringify({session: session, "frameId": "frameId", "modeId": (mode as any).modeId}) };
    const fired = jest.fn();
    let result: BarcodeCaptureSession | null = null;

    mode.addListener({
      didUpdateSession: async (_, session) => {
        fired();
        result = session;
      }
    });

    window.Capacitor.__eventCallbacks[BarcodeCaptureListenerEvents.didUpdateSession](payload);

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(mockWindow.finishBarcodeCaptureDidUpdateSession).toBeCalledTimes(1);
    expect(fired).toHaveBeenCalledTimes(1);
    expect(result!.frameSequenceID).toEqual(JSON.parse(session).frameSequenceId);
  });

  it('didScan listener responds to events', async () => {
    const mode = new BarcodeCapture(new BarcodeCaptureSettings());
    context.setMode(mode);

    const payload = { name: BarcodeCaptureListenerEvents.didScan, data: JSON.stringify({session: session, "frameId": "frameId", "modeId": (mode as any).modeId}) };
    const fired = jest.fn();
    let result: BarcodeCaptureSession | null = null;

    mode.addListener({
      didScan: async (_, session) => {
        fired();
        result = session;
      }
    });

    // Trigger the event through the proxy's event emitter to ensure proper flow
    const controller = (mode as any).controller;
    if (controller && controller._proxy && controller._proxy.eventEmitter) {
      controller._proxy.eventEmitter.emit(BarcodeCaptureListenerEvents.didScan, { data: payload.data });
    } else {
      // Fallback to direct callback
      window.Capacitor.__eventCallbacks[BarcodeCaptureListenerEvents.didScan](payload);
    }

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(mockWindow.finishBarcodeCaptureDidScan).toBeCalledTimes(1);
    expect(fired).toHaveBeenCalledTimes(1);
    expect(result!.frameSequenceID).toEqual(2);
  });

  it('didUpdateSession listener ignores wrong modeId', async () => {
    const mode = new BarcodeCapture(new BarcodeCaptureSettings());
    context.setMode(mode);

    const payload = { name: BarcodeCaptureListenerEvents.didUpdateSession, data: JSON.stringify({ session: session, "frameId": "frameId", "modeId": "wrongModeId" }) };
    const fired = jest.fn();
    let result: BarcodeCaptureSession | null = null;

    mode.addListener({
      didUpdateSession: async (_, session) => {
        fired();
        result = session;
      }
    });

    window.Capacitor.__eventCallbacks[BarcodeCaptureListenerEvents.didUpdateSession](payload);

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(mockWindow.finishBarcodeCaptureDidUpdateSession).toBeCalledTimes(0);
    expect(fired).toHaveBeenCalledTimes(0);
  });

  it('didScan listener ignores wrong modeId', async () => {
    const mode = new BarcodeCapture(new BarcodeCaptureSettings());
    context.setMode(mode);

    const payload = { name: BarcodeCaptureListenerEvents.didScan, data: JSON.stringify({ session: session, "frameId": "frameId", "modeId": "wrongModeId" }) };
    const fired = jest.fn();
    let result: BarcodeCaptureSession | null = null;

    mode.addListener({
      didScan: async (_, session) => {
        fired();
        result = session;
      }
    });

    window.Capacitor.__eventCallbacks[BarcodeCaptureListenerEvents.didScan](payload);

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(mockWindow.finishBarcodeCaptureDidScan).toBeCalledTimes(0);
    expect(fired).toHaveBeenCalledTimes(0);
  });

  it('Check BarcodeSelection listener unsubscription works', async () => {
    const mode = new BarcodeCapture(new BarcodeCaptureSettings());
    context.setMode(mode);

    const payload = { name: BarcodeCaptureListenerEvents.didScan, data: JSON.stringify({session: session, "frameId": "frameId"}) };
    const fired = jest.fn();

    const listener = {
      didScan: async () => {
        fired();
      },
      didUpdateSession: async () => {
        fired();
      }
    };

    mode.addListener(listener);
    mode.removeListener(listener);

    payload.name = BarcodeCaptureListenerEvents.didScan;
    window.Capacitor.__eventCallbacks[BarcodeCaptureListenerEvents.didScan](payload);
    payload.name = BarcodeCaptureListenerEvents.didUpdateSession;
    window.Capacitor.__eventCallbacks[BarcodeCaptureListenerEvents.didUpdateSession](payload);

    await new Promise(resolve => setTimeout(resolve, 100));

    expect(fired).toBeCalledTimes(0);
  });
});
