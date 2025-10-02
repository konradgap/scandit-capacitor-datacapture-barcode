import { jest } from '@jest/globals';
import { Capacitor, CapacitorFunction } from '../src/ts/Capacitor/Capacitor';
import * as CapacitorCore from '@capacitor/core';

const eventCallbacks: any = {};

const pluginFunctionsMock = {
  // @ts-ignore
  addListener: jest.fn().mockImplementation(async (eventName: string, callback) => {
    // Store the callback using the event name as the key
    eventCallbacks[eventName] = callback;
    return eventCallbacks[eventName];
  }),

  finishCallback: jest.fn(),
  // BarcodeCount
  registerOnProductIdentifierForItemsListener: jest.fn(),
  unregisterOnProductIdentifierForItemsListener: jest.fn(),
  finishOnProductIdentifierForItems: jest.fn(),
  addBarcodePickScanningListener: jest.fn(),
  removeBarcodePickScanningListener: jest.fn(),
  registerBarcodePickViewUiListener: jest.fn(),
  unregisterBarcodePickViewUiListener: jest.fn(),
  addPickActionListener: jest.fn(),
  removePickActionListener: jest.fn(),
  addPickViewListener: jest.fn(),
  removePickViewListener: jest.fn(),
  // BarcodeCount
  registerBarcodeCountListener: jest.fn(),
  setBarcodeCountModeEnabledState: jest.fn(),
  updateBarcodeCountFeedback: jest.fn(),
  finishBarcodeCountOnScan: jest.fn(),
  setBarcodeCountCaptureList: jest.fn(),
  // BarcodeSelection
  setBarcodeSelectionModeEnabledState: jest.fn(),
  getCountForBarcodeInBarcodeSelectionSession: jest.fn(),
  resetBarcodeSelectionSession: jest.fn(),
  registerBarcodeSelectionListenerForEvents: jest.fn(),
  finishBarcodeSelectionDidSelect: jest.fn(),
  finishBarcodeSelectionDidUpdateSession: jest.fn(),
  unregisterBarcodeSelectionListenerForEvents: jest.fn(),
  unfreezeCameraInBarcodeSelection: jest.fn(),
  resetBarcodeSelection: jest.fn(),
  selectAimedBarcode: jest.fn(),
  unselectBarcodes: jest.fn(),
  setSelectBarcodeEnabled: jest.fn(),
  increaseCountForBarcodes: jest.fn(),
  updateBarcodeSelectionMode: jest.fn(),
  applyBarcodeSelectionModeSettings: jest.fn(),
  updateBarcodeSelectionFeedback: jest.fn(),
  // BarcodeCapture
  resetBarcodeCaptureSession: jest.fn(),
  registerBarcodeCaptureListenerForEvents: jest.fn(),
  unregisterBarcodeCaptureListenerForEvents: jest.fn(),
  finishBarcodeCaptureDidUpdateSession: jest.fn(),
  finishBarcodeCaptureDidScan: jest.fn(),
  setBarcodeCaptureModeEnabledState: jest.fn(),
  updateBarcodeCaptureMode: jest.fn(),
  applyBarcodeCaptureModeSettings: jest.fn(),
  updateBarcodeCaptureOverlay: jest.fn(),
  // BarcodeBatch
  registerBarcodeBatchListenerForEvents: jest.fn(),
  unregisterBarcodeBatchListenerForEvents: jest.fn(),
  finishBarcodeBatchDidUpdateSessionCallback: jest.fn(),
  setBarcodeBatchModeEnabledState: jest.fn(),
  updateBarcodeBatchMode: jest.fn(),
  applyBarcodeBatchModeSettings: jest.fn(),
  // SparkScan
  registerSparkScanListenerForEvents: jest.fn(),
  setSparkScanModeEnabledState: jest.fn(),
  finishSparkScanDidUpdateSession: jest.fn(),
  finishSparkScanDidScan: jest.fn(),
  // BarcodeFind
  removeListeners: jest.fn(),
  updateFindMode: jest.fn(),
  barcodeFindModeStart: jest.fn(),
  barcodeFindModePause: jest.fn(),
  barcodeFindModeStop: jest.fn(),
  barcodeFindSetItemList: jest.fn(),
  registerBarcodeFindListener: jest.fn(),
  unregisterBarcodeFindListener: jest.fn(),
  setBarcodeFindModeEnabledState: jest.fn(),
  setBarcodeTransformer: jest.fn(),
  submitBarcodeFindTransformerResult: jest.fn(),
  updateBarcodeFindFeedback: jest.fn(),
  registerBarcodeFindViewListener: jest.fn(),
  unregisterBarcodeFindViewListener: jest.fn(),
  updateFindView: jest.fn(),
  barcodeFindViewStartSearching: jest.fn(),
  barcodeFindViewStopSearching: jest.fn(),
  barcodeFindViewPauseSearching: jest.fn(),
  createFindView: jest.fn(),
  removeFindView: jest.fn(),
  showFindView: jest.fn(),
  hideFindView: jest.fn(),
};

const capacitorMock = {
  pluginName: Capacitor.pluginName,
  Plugins: {
    [Capacitor.pluginName]: pluginFunctionsMock,
  },
  __eventCallbacks: eventCallbacks,
};

jest.mock('@capacitor/core', () => {
  const originalModule: typeof CapacitorCore = jest.requireActual('@capacitor/core');
  return {
    ...originalModule, // Spread the original module
    registerPlugin: jest.fn().mockImplementation((pluginName) => {
      if (pluginName === 'ScanditBarcodeNative') {
        return {
          addListener: jest.fn((eventName: string, callback) => {
            // Store the callback using the event name as the key
            eventCallbacks[eventName] = callback;
          }),

          registerBarcodeCountListener: jest.fn(),
          setBarcodeCountModeEnabledState: jest.fn(),
          updateBarcodeCountFeedback: jest.fn(),
          finishBarcodeCountListenerOnScan: jest.fn(),
          updateMode: jest.fn(),
          setBarcodeCountCaptureList: jest.fn(),
        }
      }

      // Optionally, handle other plugins or return some default mock implementation
      // For plugins not specifically mocked, you could return the original behavior or a generic mock
      return originalModule.registerPlugin(pluginName as string);
    }),
  };
});

(window as any).Capacitor = capacitorMock;
