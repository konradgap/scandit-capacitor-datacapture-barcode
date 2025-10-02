import { registerPlugin } from '@capacitor/core';
import { ScanditBarcodeCountNativeInterface, ScanditBarcodePickNativeInterface, ScanditBarcodePluginInterface } from './definitions';
import { CapacitorCore } from 'scandit-capacitor-datacapture-core';
import { Capacitor as CapacitorBarcode, getDefaults } from './ts/Capacitor/Capacitor';
import { initBarcodeProxy } from './ts/Capacitor/initBarcodeProxy';

export * from './definitions';

import * as BarcodeExports from './definitions';

interface BarcodeWindow extends Window {
    Scandit: any;
}

declare let window: BarcodeWindow;

export class ScanditBarcodePluginImplementation implements ScanditBarcodePluginInterface {
    public async initialize(coreDefaults: any): Promise<any> {
        CapacitorCore.defaults = coreDefaults;

        const barcodeDefaults = await getDefaults();
        CapacitorBarcode.defaults = barcodeDefaults;

        initBarcodeProxy();

        const api = { ...BarcodeExports };

        return api;
    }
}

// tslint:disable-next-line:variable-name
registerPlugin<ScanditBarcodePluginImplementation>('ScanditBarcodePlugin', {
    android: () => new ScanditBarcodePluginImplementation(),
    ios: () => new ScanditBarcodePluginImplementation(),
    web: () => new ScanditBarcodePluginImplementation(),
});

// tslint:disable-next-line:variable-name
export const ScanditBarcodePlugin = new ScanditBarcodePluginImplementation();

export const ScanditBarcodeCountPluginNative = registerPlugin<ScanditBarcodeCountNativeInterface>('ScanditBarcodeNative');
export const ScanditBarcodePickPluginNative = registerPlugin<ScanditBarcodePickNativeInterface>('ScanditBarcodeNative');
