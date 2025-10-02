import { Anchor, DataCaptureOverlay, PointWithUnit } from 'scandit-datacapture-frameworks-core';
import {BarcodeBatch, BaseBarcodeBatchAdvancedOverlay, TrackedBarcode} from 'scandit-datacapture-frameworks-barcode';
import { BarcodeBatchAdvancedOverlayListener } from './BarcodeBatchAdvancedOverlayListener';
import { TrackedBarcodeView } from './TrackedBarcodeView';

export class BarcodeBatchAdvancedOverlay implements DataCaptureOverlay {

    private baseBarcodeBatchOverlay: BaseBarcodeBatchAdvancedOverlay;

    private get type(): string {
        return this.baseBarcodeBatchOverlay.type;
    }

    public get shouldShowScanAreaGuides(): boolean {
        return this.baseBarcodeBatchOverlay.shouldShowScanAreaGuides;
    }

    public set shouldShowScanAreaGuides(shouldShow: boolean) {
        this.baseBarcodeBatchOverlay.shouldShowScanAreaGuides = shouldShow;
    }

    public get listener(): BarcodeBatchAdvancedOverlayListener | null {
        return (this.baseBarcodeBatchOverlay.listener as any as BarcodeBatchAdvancedOverlayListener);
    }

    public set listener(listener: BarcodeBatchAdvancedOverlayListener | null) {
        this.baseBarcodeBatchOverlay.listener = listener;
    }

    public constructor(mode: BarcodeBatch) {
      this.baseBarcodeBatchOverlay = new BaseBarcodeBatchAdvancedOverlay(mode);
    }

    public setViewForTrackedBarcode(view: Promise<TrackedBarcodeView | null>, trackedBarcode: TrackedBarcode): Promise<void> {
        return this.baseBarcodeBatchOverlay.setViewForTrackedBarcode(view, trackedBarcode);
    }

    public setAnchorForTrackedBarcode(anchor: Anchor, trackedBarcode: TrackedBarcode): Promise<void> {
        return this.baseBarcodeBatchOverlay.setAnchorForTrackedBarcode(anchor, trackedBarcode);
    }

    public setOffsetForTrackedBarcode(offset: PointWithUnit, trackedBarcode: TrackedBarcode): Promise<void> {
        return this.baseBarcodeBatchOverlay.setOffsetForTrackedBarcode(offset, trackedBarcode);
    }

    public clearTrackedBarcodeViews(): Promise<void> {
        return this.baseBarcodeBatchOverlay.clearTrackedBarcodeViews();
    }

    toJSON(): object {
        return this.baseBarcodeBatchOverlay.toJSON();
    }
  }
