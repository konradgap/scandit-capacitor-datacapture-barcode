import { BarcodeGeneratorProxy } from 'scandit-datacapture-frameworks-barcode';
import { NativeCallResult } from 'scandit-datacapture-frameworks-core';
import { Capacitor, CapacitorFunction, CapacitorWindow } from './Capacitor';

declare const window: CapacitorWindow;


export class NativeBarcodeGeneratorProxy implements BarcodeGeneratorProxy {
    public create(barcodeGeneratorJson: string): Promise<void> {
        return window.Capacitor.Plugins[Capacitor.pluginName][CapacitorFunction.CreateBarcodeGenerator](
            {
                barcodeGeneratorJson: barcodeGeneratorJson
            }
        );
    }

    public dispose(generatorId: string): Promise<void> {
        return window.Capacitor.Plugins[Capacitor.pluginName][CapacitorFunction.DisposeBarcodeGenerator](
            {
                generatorId: generatorId
            }
        );
    }

    public generateFromBase64EncodedData(generatorId: string, data: string, imageWidth: number): Promise<NativeCallResult> {
        return window.Capacitor.Plugins[Capacitor.pluginName][CapacitorFunction.GenerateFromBase64EncodedData](
            {
                generatorId: generatorId,
                data: data,
                imageWidth: imageWidth
            }
        );
    }

    public generate(generatorId: string, text: string, imageWidth: number): Promise<NativeCallResult> {
        return window.Capacitor.Plugins[Capacitor.pluginName][CapacitorFunction.GenerateFromString](
            {
                generatorId: generatorId,
                text: text,
                imageWidth: imageWidth
            }
        );
    }
}
