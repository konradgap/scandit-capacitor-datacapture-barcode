import { Brush, Color, DataCaptureContext } from 'scandit-datacapture-frameworks-core';
import {
  BaseSparkScanView,
  SparkScan,
  SparkScanFeedbackDelegate,
  SparkScanViewSettings,
  SparkScanViewUiListener
} from 'scandit-datacapture-frameworks-barcode';

export class SparkScanView {

  private baseSparkScanView: BaseSparkScanView;

  public get uiListener(): SparkScanViewUiListener | null {
    return this.baseSparkScanView.uiListener;
  }

  public set uiListener(newValue: SparkScanViewUiListener | null) {
    this.baseSparkScanView.uiListener = newValue;
  }

  public static forContext(context: DataCaptureContext, sparkScan: SparkScan, settings: SparkScanViewSettings | null): SparkScanView {
    return new SparkScanView({ context, sparkScan, settings });
  }

  public static get defaultBrush(): Brush {
    return BaseSparkScanView.defaultBrush;
  }

  private constructor({ context, sparkScan, settings }:
    { context: DataCaptureContext, sparkScan: SparkScan, settings: SparkScanViewSettings | null }
  ) {
    this.baseSparkScanView = new BaseSparkScanView({ context: context, sparkScan: sparkScan, settings: settings });
    const viewId = (Date.now() / 1000) | 0;
    this.baseSparkScanView.createNativeView(viewId);
  }

  public get previewSizeControlVisible(): boolean {
    return this.baseSparkScanView.previewSizeControlVisible;
  }

  public set previewSizeControlVisible(newValue: boolean) {
    this.baseSparkScanView.previewSizeControlVisible = newValue;
  }

  public get scanningBehaviorButtonVisible(): boolean {
    return this.baseSparkScanView.scanningBehaviorButtonVisible;
  }

  public set scanningBehaviorButtonVisible(newValue: boolean) {
    this.baseSparkScanView.scanningBehaviorButtonVisible = newValue;
  }

  public get barcodeCountButtonVisible(): boolean {
    return this.baseSparkScanView.barcodeCountButtonVisible;
  }

  public set barcodeCountButtonVisible(newValue: boolean) {
    this.baseSparkScanView.barcodeCountButtonVisible = newValue;
  }


  public get barcodeFindButtonVisible(): boolean {
    return this.baseSparkScanView.barcodeFindButtonVisible;
  }

  public set barcodeFindButtonVisible(newValue: boolean) {
    this.baseSparkScanView.barcodeFindButtonVisible = newValue;
  }

  public get targetModeButtonVisible(): boolean {
    return this.baseSparkScanView.targetModeButtonVisible;
  }

  public set targetModeButtonVisible(newValue: boolean) {
    this.baseSparkScanView.targetModeButtonVisible = newValue;
  }

  public get labelCaptureButtonVisible(): boolean {
    return this.baseSparkScanView.labelCaptureButtonVisible;
  }

  public set labelCaptureButtonVisible(newValue: boolean) {
    this.baseSparkScanView.labelCaptureButtonVisible = newValue;
  }

  public get toolbarBackgroundColor(): Color | null {
    return this.baseSparkScanView.toolbarBackgroundColor;
  }

  public set toolbarBackgroundColor(newValue: Color | null) {
    this.baseSparkScanView.toolbarBackgroundColor = newValue;
  }

  public get toolbarIconActiveTintColor(): Color | null {
    return this.baseSparkScanView.toolbarIconActiveTintColor;
  }

  public set toolbarIconActiveTintColor(newValue: Color | null) {
    this.baseSparkScanView.toolbarIconActiveTintColor = newValue;
  }

  public get toolbarIconInactiveTintColor(): Color | null {
    return this.baseSparkScanView.toolbarIconInactiveTintColor;
  }

  public set toolbarIconInactiveTintColor(newValue: Color | null) {
    this.baseSparkScanView.toolbarIconInactiveTintColor = newValue;
  }

  public get cameraSwitchButtonVisible(): boolean {
    return this.baseSparkScanView.cameraSwitchButtonVisible;
  }

  public set cameraSwitchButtonVisible(newValue: boolean) {
    this.baseSparkScanView.cameraSwitchButtonVisible = newValue;
  }

  public get torchControlVisible(): boolean {
    return this.baseSparkScanView.torchControlVisible;
  }

  public set torchControlVisible(newValue: boolean) {
    this.baseSparkScanView.torchControlVisible = newValue;
  }

  public get previewCloseControlVisible(): boolean {
    return this.baseSparkScanView.previewCloseControlVisible;
  }

  public set previewCloseControlVisible(newValue: boolean) {
    this.baseSparkScanView.previewCloseControlVisible = newValue;
  }

  public get triggerButtonAnimationColor(): Color | null {
    return this.baseSparkScanView.triggerButtonAnimationColor;
  }

  public set triggerButtonAnimationColor(newValue: Color | null) {
    this.baseSparkScanView.triggerButtonAnimationColor = newValue;
  }

  public get triggerButtonExpandedColor(): Color | null {
    return this.baseSparkScanView.triggerButtonExpandedColor;
  }

  public set triggerButtonExpandedColor(newValue: Color | null) {
    this.baseSparkScanView.triggerButtonExpandedColor = newValue;
  }

  public get triggerButtonCollapsedColor(): Color | null {
    return this.baseSparkScanView.triggerButtonCollapsedColor;
  }

  public set triggerButtonCollapsedColor(newValue: Color | null) {
    this.baseSparkScanView.triggerButtonCollapsedColor = newValue;
  }

  public get triggerButtonTintColor(): Color | null {
    return this.baseSparkScanView.triggerButtonTintColor;
  }

  public set triggerButtonTintColor(newValue: Color | null) {
    this.baseSparkScanView.triggerButtonTintColor = newValue;
  }

  public get triggerButtonVisible(): boolean {
    return this.baseSparkScanView.triggerButtonVisible;
  }

  public set triggerButtonVisible(newValue: boolean) {
    this.baseSparkScanView.triggerButtonVisible = newValue;
  }

  public get triggerButtonImage(): string | null {
    return this.baseSparkScanView.triggerButtonImage;
  }

  public set triggerButtonImage(newValue: string | null) {
    this.baseSparkScanView.triggerButtonImage = newValue;
  }

  public prepareScanning(): void {
    this.baseSparkScanView.prepareScanning();
  }

  public startScanning(): void {
    this.baseSparkScanView.startScanning();
  }

  public pauseScanning(): void {
    this.baseSparkScanView.pauseScanning();
  }

  public stopScanning(): void {
    this.baseSparkScanView.stopScanning();
  }

  public dispose(): void {
    this.baseSparkScanView.dispose();
  }

  public show(): Promise<void> {
    return this.baseSparkScanView.show();
  }

  public hide(): Promise<void> {
    return this.baseSparkScanView.hide();
  }

  public get feedbackDelegate(): SparkScanFeedbackDelegate | null {
    return this.baseSparkScanView.feedbackDelegate;
  }

  public set feedbackDelegate(delegate: SparkScanFeedbackDelegate | null) {
    this.baseSparkScanView.feedbackDelegate = delegate;
  }

  public showToast(text: string): Promise<void> {
    return this.baseSparkScanView.showToast(text) as unknown as Promise<void>;
  }

  private toJSON(): object {
    return this.baseSparkScanView.toJSON();
  }
}
