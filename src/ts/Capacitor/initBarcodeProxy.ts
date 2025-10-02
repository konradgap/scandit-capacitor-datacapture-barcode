import {
    createAdvancedInstanceAwareNativeProxy,
    createNativeProxy,
    FactoryMaker
} from 'scandit-datacapture-frameworks-core';
import { capacitorBarcodeNativeCaller } from './Capacitor';
import { NativeBarcodeGeneratorProxy } from './BarcodeGeneratorProxy';
import {
    BarcodeBatchAdvancedOverlayProxy,
    BarcodeBatchBasicOverlayProxy,
    BarcodeBatchListenerProxy,
    BarcodeCaptureListenerProxy,
    BarcodeCaptureOverlayProxy,
    BarcodeCountSessionProxy,
    BarcodeCountViewEvents,
    BarcodeCountViewProxy,
    BarcodeFindViewProxy,
    BarcodePickViewProxy,
    BarcodeSelectionListenerProxy,
    BarcodeSelectionOverlayProxy,
    BarcodeSelectionProxy,
    SparkScanViewEvents,
    SparkScanViewProxy
} from 'scandit-datacapture-frameworks-barcode';

export function initBarcodeProxy() {
    FactoryMaker.bindLazyInstance('BarcodeCaptureListenerProxy', () => {
        return createNativeProxy<BarcodeCaptureListenerProxy>(capacitorBarcodeNativeCaller);
    });

    FactoryMaker.bindLazyInstance('BarcodeCaptureOverlayProxy', () => {
        return createNativeProxy<BarcodeCaptureOverlayProxy>(capacitorBarcodeNativeCaller);
    });

    FactoryMaker.bindLazyInstance('BarcodeBatchListenerProxy', () => {
        return createNativeProxy<BarcodeBatchListenerProxy>(capacitorBarcodeNativeCaller);
    });

    FactoryMaker.bindLazyInstance('BarcodeBatchBasicOverlayProxy', () => {
        return createNativeProxy<BarcodeBatchBasicOverlayProxy>(capacitorBarcodeNativeCaller);
    });

    FactoryMaker.bindLazyInstance('BarcodeBatchAdvancedOverlayProxy', () => {
        return createNativeProxy<BarcodeBatchAdvancedOverlayProxy>(capacitorBarcodeNativeCaller);
    });

    FactoryMaker.bindLazyInstance('BarcodeSelectionListenerProxy', () => {
        return createNativeProxy<BarcodeSelectionListenerProxy>(capacitorBarcodeNativeCaller);
    });

    FactoryMaker.bindLazyInstance('BarcodeSelectionOverlayProxy', () => {
        return createNativeProxy<BarcodeSelectionOverlayProxy>(capacitorBarcodeNativeCaller);
    });

    FactoryMaker.bindLazyInstance('BarcodeSelectionProxy', () => {
        return createNativeProxy<BarcodeSelectionProxy>(capacitorBarcodeNativeCaller);
    });

    FactoryMaker.bindLazyInstance('BarcodeCountSessionProxy', () => {
        return createAdvancedInstanceAwareNativeProxy<BarcodeCountSessionProxy>(capacitorBarcodeNativeCaller);
    });

    FactoryMaker.bindLazyInstance('BarcodeCountViewProxy', () => {
        return createAdvancedInstanceAwareNativeProxy<BarcodeCountViewProxy>(capacitorBarcodeNativeCaller, BarcodeCountViewEvents);
    });

    FactoryMaker.bindLazyInstance('BarcodePickViewProxy', () => {
        return createNativeProxy<BarcodePickViewProxy>(capacitorBarcodeNativeCaller);
    });

    FactoryMaker.bindLazyInstance('BarcodeFindViewProxy', () => {
        return createNativeProxy<BarcodeFindViewProxy>(capacitorBarcodeNativeCaller);
    });

    FactoryMaker.bindLazyInstance('SparkScanViewProxy', () => {
        return createAdvancedInstanceAwareNativeProxy<SparkScanViewProxy>(capacitorBarcodeNativeCaller, SparkScanViewEvents);
    });

    FactoryMaker.bindInstance('BarcodeGeneratorProxy', new NativeBarcodeGeneratorProxy());
}
