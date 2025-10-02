import { capacitorExec } from 'scandit-capacitor-datacapture-core';
import { PrivateSymbologyDescription, SymbologyDescription, BarcodeDefaults, loadBarcodeDefaults, loadBarcodeCaptureDefaults, loadBarcodeSelectionDefaults, loadBarcodeBatchDefaults, loadBarcodeCountDefaults, getBarcodeDefaults, loadBarcodePickDefaults, loadBarcodeFindDefaults, loadSparkScanDefaults } from 'scandit-datacapture-frameworks-barcode';
import { Optional } from '../../definitions';
import {CapacitorNativeCaller} from 'scandit-capacitor-datacapture-core';

export enum CapacitorFunction {
    GetDefaults = 'getDefaults',

    SubscribeBarcodeCountListener = 'registerBarcodeCountListener',
    UnsubscribeBarcodeCountListener = 'unregisterBarcodeCountListener',
    ResetBarcodeCountSession = 'resetBarcodeCountSession',
    StartBarcodeCountScanningPhase = 'startScanningPhase',
    EndBarcodeCountScanningPhase = 'endScanningPhase',
    SetBarcodeCountCaptureList = 'setBarcodeCountCaptureList',

    SetBarcodeCaptureModeEnabledState = 'setBarcodeCaptureModeEnabledState',
    SetBarcodeBatchModeEnabledState = 'setBarcodeBatchModeEnabledState',

    UpdateBarcodeCaptureOverlay = 'updateBarcodeCaptureOverlay',
    UpdateBarcodeCaptureMode = 'updateBarcodeCaptureMode',
    ApplyBarcodeCaptureModeSettings = 'applyBarcodeCaptureModeSettings',

    UpdateBarcodeBatchBasicOverlay = 'updateBarcodeBatchBasicOverlay',
    UpdateBarcodeBatchAdvancedOverlay = 'updateBarcodeBatchAdvancedOverlay',
    UpdateBarcodeBatchMode = 'updateBarcodeBatchMode',
    ApplyBarcodeBatchModeSettings = 'applyBarcodeBatchModeSettings',

    CreateBarcodeGenerator = 'createBarcodeGenerator',
    DisposeBarcodeGenerator = 'disposeBarcodeGenerator',
    GenerateFromBase64EncodedData = 'generateFromBase64EncodedData',
    GenerateFromString = 'generateFromString',
}

const pluginName = 'ScanditBarcodeNative';

// tslint:disable-next-line:variable-name
export const Capacitor = {
    pluginName,
    defaults: {} as BarcodeDefaults,
    exec: (
        success: Optional<Function>,
        error: Optional<Function>,
        functionName: string,
        args: Optional<[any]>,
    ) => capacitorExec(success, error, pluginName, functionName, args),
};

export interface CapacitorWindow extends Window {
    Scandit: any;
    Capacitor: any;
}

declare const window: CapacitorWindow;

export const getDefaults = async (): Promise<BarcodeDefaults> => {
  try {
    const defaultsJSON = await window.Capacitor.Plugins[pluginName][CapacitorFunction.GetDefaults]()

    loadBarcodeDefaults(defaultsJSON);
    loadBarcodeCaptureDefaults(defaultsJSON.BarcodeCapture);
    loadBarcodeBatchDefaults(defaultsJSON.BarcodeBatch);
    loadBarcodeSelectionDefaults(defaultsJSON.BarcodeSelection);
    loadBarcodeCountDefaults(defaultsJSON.BarcodeCount);
    loadBarcodePickDefaults(defaultsJSON.BarcodePick);
    loadBarcodeFindDefaults(defaultsJSON.BarcodeFind);
    loadSparkScanDefaults(defaultsJSON.SparkScan);

    // TODO: Review this
    Capacitor.defaults = getBarcodeDefaults();
  } catch (error) {
      // tslint:disable-next-line:no-console
      console.warn(error);
  }

  return Capacitor.defaults;
};

// To circumvent a circular dependency
(SymbologyDescription as any as PrivateSymbologyDescription).defaults = () => Capacitor.defaults;

export const capacitorBarcodeNativeCaller = new CapacitorNativeCaller(Capacitor.pluginName);
