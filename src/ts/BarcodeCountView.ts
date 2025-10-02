import {
  BarcodeCount, BarcodeCountNotInListActionSettings,
  BarcodeCountViewSettingsDefaults,
  BaseBarcodeCountView,
  getBarcodeCountDefaults,
  TrackedBarcode
} from 'scandit-datacapture-frameworks-barcode';
import {Anchor, ignoreFromSerialization} from 'scandit-datacapture-frameworks-core';
import { BarcodeCountViewListener, BarcodeCountViewUiListener, BarcodeCountToolbarSettings } from 'scandit-datacapture-frameworks-barcode';
import { Brush } from 'scandit-datacapture-frameworks-core';
import { BarcodeFilterHighlightSettings } from 'scandit-datacapture-frameworks-barcode';
import { DataCaptureContext } from 'scandit-datacapture-frameworks-core';
import { HTMLElementState, HtmlElementPosition, HtmlElementSize } from 'scandit-datacapture-frameworks-core';
import { Rect } from 'scandit-datacapture-frameworks-core';

type BarcodeCountViewDefaults = BarcodeCountViewSettingsDefaults;

const BarcodeCountDefaults = {
  get BarcodeCountView(): BarcodeCountViewDefaults {
    const defaults = getBarcodeCountDefaults();
    return defaults.BarcodeCountView;
  }
}

export enum BarcodeCountViewStyle {
  Icon = 'icon',
  Dot = 'dot'
}

export class BarcodeCountView {

  private viewId: number = Math.floor(Math.random() * 1000000);

  public static get defaultRecognizedBrush(): Brush {
    return BaseBarcodeCountView.defaultRecognizedBrush;
  }

  public static get defaultNotInListBrush(): Brush {
    return BaseBarcodeCountView.defaultNotInListBrush;
  }

  public static get defaultAcceptedBrush(): Brush {
    return BaseBarcodeCountView.defaultAcceptedBrush;
  }

  public static get defaultRejectedBrush(): Brush {
    return BaseBarcodeCountView.defaultRejectedBrush;
  }

  public static get hardwareTriggerSupported(): boolean {
    return BaseBarcodeCountView.hardwareTriggerSupported;
}

  public get uiListener(): BarcodeCountViewUiListener | null {
    return this.baseBarcodeCountView.uiListener;
  }

  public set uiListener(listener: BarcodeCountViewUiListener | null) {
    this.baseBarcodeCountView.uiListener = listener;
  }

  public get listener(): BarcodeCountViewListener | null {
    return this.baseBarcodeCountView.listener;
  }

  public set listener(listener: BarcodeCountViewListener | null) {
    this.baseBarcodeCountView.listener = listener;
  }

  public get shouldShowUserGuidanceView(): boolean {
    return this.baseBarcodeCountView.shouldShowUserGuidanceView;
  }

  public set shouldShowUserGuidanceView(newValue: boolean) {
    this.baseBarcodeCountView.shouldShowUserGuidanceView = newValue;
  }

  public get shouldShowListButton(): boolean {
    return this.baseBarcodeCountView.shouldShowListButton;
  }

  public set shouldShowListButton(newValue: boolean) {
    this.baseBarcodeCountView.shouldShowListButton = newValue;
  }

  public get shouldDisableModeOnExitButtonTapped(): boolean {
    return this.baseBarcodeCountView.shouldDisableModeOnExitButtonTapped;
  }

  public set shouldDisableModeOnExitButtonTapped(newValue: boolean) {
    this.baseBarcodeCountView.shouldDisableModeOnExitButtonTapped = newValue;
  }

  public get shouldShowExitButton(): boolean {
    return this.baseBarcodeCountView.shouldShowExitButton;
  }

  public set shouldShowExitButton(newValue: boolean) {
    this.baseBarcodeCountView.shouldShowExitButton = newValue;
  }

  public get shouldShowShutterButton(): boolean {
    return this.baseBarcodeCountView.shouldShowShutterButton;
  }

  public set shouldShowShutterButton(newValue: boolean) {
    this.baseBarcodeCountView.shouldShowShutterButton = newValue;
  }

  public get shouldShowHints(): boolean {
    return this.baseBarcodeCountView.shouldShowHints;
  }

  public set shouldShowHints(newValue: boolean) {
    this.baseBarcodeCountView.shouldShowHints = newValue;
  }

  public get shouldShowClearHighlightsButton(): boolean {
    return this.baseBarcodeCountView.shouldShowClearHighlightsButton;
  }

  public set shouldShowClearHighlightsButton(newValue: boolean) {
    this.baseBarcodeCountView.shouldShowClearHighlightsButton = newValue;
  }

  public get shouldShowSingleScanButton(): boolean {
    return this.baseBarcodeCountView.shouldShowSingleScanButton;
  }

  public set shouldShowSingleScanButton(newValue: boolean) {
    this.baseBarcodeCountView.shouldShowSingleScanButton = newValue;
  }

  public get shouldShowFloatingShutterButton(): boolean {
    return this.baseBarcodeCountView.shouldShowFloatingShutterButton;
  }

  public set shouldShowFloatingShutterButton(newValue: boolean) {
    this.baseBarcodeCountView.shouldShowFloatingShutterButton = newValue;
  }

  public get shouldShowToolbar(): boolean {
    return this.baseBarcodeCountView.shouldShowToolbar;
  }

  public set shouldShowToolbar(newValue: boolean) {
    this.baseBarcodeCountView.shouldShowToolbar = newValue;
  }

  public get shouldShowScanAreaGuides(): boolean {
    return this.baseBarcodeCountView.shouldShowScanAreaGuides;
  }

  public set shouldShowScanAreaGuides(newValue: boolean) {
    this.baseBarcodeCountView.shouldShowScanAreaGuides = newValue;
  }

  public get recognizedBrush(): Brush | null {
    return this.baseBarcodeCountView.recognizedBrush;
  }

  public set recognizedBrush(newValue: Brush | null) {
    this.baseBarcodeCountView.recognizedBrush = newValue;
  }

  public get notInListBrush(): Brush | null {
    return this.baseBarcodeCountView.notInListBrush;
  }

  public set notInListBrush(newValue: Brush | null) {
    this.baseBarcodeCountView.notInListBrush = newValue;
  }

  public get acceptedBrush(): Brush | null {
    return this.baseBarcodeCountView.acceptedBrush;
  }

  public set acceptedBrush(newValue: Brush | null) {
    this.baseBarcodeCountView.acceptedBrush = newValue;
  }

  public get rejectedBrush(): Brush | null {
    return this.baseBarcodeCountView.rejectedBrush;
  }

  public set rejectedBrush(newValue: Brush | null) {
    this.rejectedBrush = newValue;
  }

  public get filterSettings(): BarcodeFilterHighlightSettings | null {
    return this.baseBarcodeCountView.filterSettings;
  }

  public set filterSettings(newValue: BarcodeFilterHighlightSettings | null) {
    this.baseBarcodeCountView.filterSettings = newValue;
  }

  public get style(): BarcodeCountViewStyle {
    return this.baseBarcodeCountView.style;
  }

  public get listButtonAccessibilityHint(): string {
    return this.baseBarcodeCountView.listButtonAccessibilityHint;
  }

  public set listButtonAccessibilityHint(newValue: string) {
    this.baseBarcodeCountView.listButtonAccessibilityHint = newValue;
  }

  public get listButtonAccessibilityLabel(): string {
    return this.baseBarcodeCountView.listButtonAccessibilityLabel;
  }

  public set listButtonAccessibilityLabel(newValue: string) {
    this.baseBarcodeCountView.listButtonAccessibilityLabel = newValue;
  }

  public get listButtonContentDescription(): string {
    return this.baseBarcodeCountView.listButtonContentDescription;
  }

  public set listButtonContentDescription(newValue: string) {
    this.baseBarcodeCountView.listButtonContentDescription = newValue;
  }

  public get exitButtonAccessibilityHint(): string {
    return this.baseBarcodeCountView.exitButtonAccessibilityHint;
  }

  public set exitButtonAccessibilityHint(newValue: string) {
    this.baseBarcodeCountView.exitButtonAccessibilityHint = newValue;
  }

  public get exitButtonAccessibilityLabel(): string {
    return this.baseBarcodeCountView.exitButtonAccessibilityLabel;
  }

  public set exitButtonAccessibilityLabel(newValue: string) {
    this.baseBarcodeCountView.exitButtonAccessibilityLabel = newValue;
  }

  public get exitButtonContentDescription(): string {
    return this.baseBarcodeCountView.exitButtonContentDescription;
  }

  public set exitButtonContentDescription(newValue: string) {
    this.baseBarcodeCountView.exitButtonContentDescription = newValue;
  }

  public get shutterButtonAccessibilityHint(): string {
    return this.baseBarcodeCountView.shutterButtonAccessibilityHint;
  }

  public set shutterButtonAccessibilityHint(newValue: string) {
    this.baseBarcodeCountView.shutterButtonAccessibilityHint = newValue;
  }

  public get shutterButtonAccessibilityLabel(): string {
    return this.baseBarcodeCountView.shutterButtonAccessibilityLabel;
  }

  public set shutterButtonAccessibilityLabel(newValue: string) {
    this.baseBarcodeCountView.shutterButtonAccessibilityLabel = newValue;
  }

  public get shutterButtonContentDescription(): string {
    return this.baseBarcodeCountView.shutterButtonContentDescription;
  }

  public set shutterButtonContentDescription(newValue: string) {
    this.baseBarcodeCountView.shutterButtonContentDescription = newValue;
  }

  public get floatingShutterButtonAccessibilityHint(): string {
    return this.baseBarcodeCountView.floatingShutterButtonAccessibilityHint;
  }

  public set floatingShutterButtonAccessibilityHint(newValue: string) {
    this.baseBarcodeCountView.floatingShutterButtonAccessibilityHint = newValue;
  }

  public get floatingShutterButtonAccessibilityLabel(): string {
    return this.baseBarcodeCountView.floatingShutterButtonAccessibilityLabel;
  }

  public set floatingShutterButtonAccessibilityLabel(newValue: string) {
    this.baseBarcodeCountView.floatingShutterButtonAccessibilityLabel = newValue;
  }

  public get floatingShutterButtonContentDescription(): string {
    return this.baseBarcodeCountView.floatingShutterButtonContentDescription;
  }

  public set floatingShutterButtonContentDescription(newValue: string) {
    this.baseBarcodeCountView.floatingShutterButtonContentDescription = newValue;
  }

  public get clearHighlightsButtonAccessibilityHint(): string {
    return this.baseBarcodeCountView.clearHighlightsButtonAccessibilityHint;
  }

  public set clearHighlightsButtonAccessibilityHint(newValue: string) {
    this.baseBarcodeCountView.clearHighlightsButtonAccessibilityHint = newValue;
  }

  public get clearHighlightsButtonAccessibilityLabel(): string {
    return this.baseBarcodeCountView.clearHighlightsButtonAccessibilityLabel;
  }

  public set clearHighlightsButtonAccessibilityLabel(newValue: string) {
    this.baseBarcodeCountView.clearHighlightsButtonAccessibilityLabel = newValue;
  }

  public get clearHighlightsButtonContentDescription(): string {
    return this.baseBarcodeCountView.clearHighlightsButtonContentDescription;
  }

  public set clearHighlightsButtonContentDescription(newValue: string) {
    this.baseBarcodeCountView.clearHighlightsButtonContentDescription = newValue;
  }

  public get singleScanButtonAccessibilityHint(): string {
    return this.baseBarcodeCountView.singleScanButtonAccessibilityHint;
  }

  public set singleScanButtonAccessibilityHint(newValue: string) {
    this.baseBarcodeCountView.singleScanButtonAccessibilityHint = newValue;
  }

  public get singleScanButtonAccessibilityLabel(): string {
    return this.baseBarcodeCountView.singleScanButtonAccessibilityLabel;
  }

  public set singleScanButtonAccessibilityLabel(newValue: string) {
    this.baseBarcodeCountView.singleScanButtonAccessibilityLabel = newValue;
  }

  public get singleScanButtonContentDescription(): string {
    return this.baseBarcodeCountView.singleScanButtonContentDescription;
  }

  public set singleScanButtonContentDescription(newValue: string) {
    this.baseBarcodeCountView.singleScanButtonContentDescription = newValue;
  }

  public get clearHighlightsButtonText(): string {
    return this.baseBarcodeCountView.clearHighlightsButtonText;
  }

  public set clearHighlightsButtonText(newValue: string) {
    this.baseBarcodeCountView.clearHighlightsButtonText = newValue;
  }

  public get exitButtonText(): string {
    return this.baseBarcodeCountView.exitButtonText;
  }

  public set exitButtonText(newValue: string) {
    this.baseBarcodeCountView.exitButtonText = newValue;
  }

  public get textForTapShutterToScanHint(): string {
    return this.baseBarcodeCountView.textForTapShutterToScanHint;
  }

  public set textForTapShutterToScanHint(newValue: string) {
    this.baseBarcodeCountView.textForTapShutterToScanHint = newValue;
  }

  public get textForScanningHint(): string {
    return this.baseBarcodeCountView.textForScanningHint;
  }

  public set textForScanningHint(newValue: string) {
    this.baseBarcodeCountView.textForScanningHint = newValue;
  }

  public get textForMoveCloserAndRescanHint(): string {
    return this.baseBarcodeCountView.textForMoveCloserAndRescanHint;
  }

  public set textForMoveCloserAndRescanHint(newValue: string) {
    this.baseBarcodeCountView.textForMoveCloserAndRescanHint = newValue;
  }

  public get textForMoveFurtherAndRescanHint(): string {
    return this.baseBarcodeCountView.textForMoveFurtherAndRescanHint;
  }

  public set textForMoveFurtherAndRescanHint(newValue: string) {
    this.baseBarcodeCountView.textForMoveFurtherAndRescanHint = newValue;
  }

  public get shouldShowListProgressBar(): boolean {
    return this.baseBarcodeCountView.shouldShowListProgressBar;
  }

  public set shouldShowListProgressBar(newValue: boolean) {
    this.baseBarcodeCountView.shouldShowListProgressBar = newValue;
  }

  public get shouldShowTorchControl(): boolean {
    return this.baseBarcodeCountView.shouldShowTorchControl;
  }

  public set shouldShowTorchControl(newValue: boolean) {
    this.baseBarcodeCountView.shouldShowTorchControl = newValue;
  }

  public get torchControlPosition(): Anchor {
    return this.baseBarcodeCountView.torchControlPosition;
  }

  public set torchControlPosition(newValue: Anchor) {
    this.baseBarcodeCountView.torchControlPosition = newValue;
  }

  public get textForTapToUncountHint(): string {
    return this.baseBarcodeCountView.textForTapToUncountHint;
  }

  public set textForTapToUncountHint(newValue: string) {
    this.baseBarcodeCountView.textForTapToUncountHint = newValue;
  }

  public get tapToUncountEnabled(): boolean {
    return this.baseBarcodeCountView.tapToUncountEnabled;
  }

  public set tapToUncountEnabled(newValue: boolean) {
    this.baseBarcodeCountView.tapToUncountEnabled = newValue;
  }

  public get barcodeNotInListActionSettings(): BarcodeCountNotInListActionSettings {
    return this.baseBarcodeCountView.barcodeNotInListActionSettings;
  }

  public set barcodeNotInListActionSettings(newValue: BarcodeCountNotInListActionSettings) {
    this.baseBarcodeCountView.barcodeNotInListActionSettings = newValue;
  }

  public get hardwareTriggerEnabled(): boolean {
    return this.baseBarcodeCountView.hardwareTriggerEnabled;
  }

  public set hardwareTriggerEnabled(newValue: boolean) {
    this.baseBarcodeCountView.hardwareTriggerEnabled = newValue;
  }

  private baseBarcodeCountView: BaseBarcodeCountView;

  @ignoreFromSerialization
  private htmlElement: HTMLElement | null = null;

  @ignoreFromSerialization
  private _htmlElementState = new HTMLElementState();

  private set htmlElementState(newState: HTMLElementState) {
    const didChangeShown = this._htmlElementState.isShown !== newState.isShown;
    const didChangePositionOrSize = this._htmlElementState.didChangeComparedTo(newState);

    this._htmlElementState = newState;

    if (didChangePositionOrSize) {
      this.updatePositionAndSize();
    }

    if (didChangeShown) {
      if (this._htmlElementState.isShown) {
        this._show();
      } else {
        this._hide();
      }
    }
  }

  private get htmlElementState(): HTMLElementState {
    return this._htmlElementState;
  }

  @ignoreFromSerialization
  private scrollListener = this.elementDidChange.bind(this);
  @ignoreFromSerialization
  private domObserver = new MutationObserver(this.elementDidChange.bind(this));

  public static forContextWithMode(context: DataCaptureContext, barcodeCount: BarcodeCount): BarcodeCountView {
    const style = BarcodeCountDefaults.BarcodeCountView.style;
    const view = new BarcodeCountView({context, barcodeCount, style});
    return view;
  }

  public static forContextWithModeAndStyle(context: DataCaptureContext, barcodeCount: BarcodeCount, style: BarcodeCountViewStyle): BarcodeCountView {
    const view = new BarcodeCountView({context, barcodeCount, style});
    return view;
  }

  constructor({context, barcodeCount, style}:
    {context: DataCaptureContext, barcodeCount: BarcodeCount, style: BarcodeCountViewStyle}) {
    this.baseBarcodeCountView = new BaseBarcodeCountView({
      context,
      barcodeCount,
      viewStyle: style,
      platformView: this,
    });
  }

  @ignoreFromSerialization
  private orientationChangeListener = (() => {
    this.elementDidChange();
    // SDC-1784 -> workaround because at the moment of this callback the element doesn't have the updated size.
    setTimeout(this.elementDidChange.bind(this), 100);
    setTimeout(this.elementDidChange.bind(this), 300);
    setTimeout(this.elementDidChange.bind(this), 1000);
  });

  public clearHighlights(): Promise<void> {
    return this.baseBarcodeCountView.clearHighlights();
  }

  public setToolbarSettings(settings: BarcodeCountToolbarSettings): void {
    this.baseBarcodeCountView.setToolbarSettings(settings);
  }

  public connectToElement(element: HTMLElement): void {
    this.baseBarcodeCountView.createNativeView(this.viewId).then(() => {
      this.htmlElement = element;
      this.htmlElementState = new HTMLElementState();

      // Initial update
      this.elementDidChange();

      this.subscribeToChangesOnHTMLElement();
    });
  }

  public detachFromElement(): void {
    this.baseBarcodeCountView.removeNativeView().then(() => {
      this.unsubscribeFromChangesOnHTMLElement();
      this.htmlElement = null;
      this.elementDidChange();
    });
  }

  public setFrame(frame: Rect, isUnderContent: boolean = false): Promise<void> {
    return this.baseBarcodeCountView.setPositionAndSize(
      frame.origin.y,
      frame.origin.x,
      frame.size.width,
      frame.size.height,
      isUnderContent,
    );
  }

  public show(): Promise<void> {
    if (this.htmlElement) {
      throw new Error("Views should only be manually shown if they're manually sized using setFrame");
    }

    return this._show();
  }

  public hide(): Promise<void> {
    if (this.htmlElement) {
      throw new Error("Views should only be manually hidden if they're manually sized using setFrame");
    }

    return this._hide();
  }

  public setBrushForRecognizedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void> {
    return this.baseBarcodeCountView.setBrushForRecognizedBarcode(trackedBarcode, brush);
  }

  public setBrushForRecognizedBarcodeNotInList(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void> {
    return this.baseBarcodeCountView.setBrushForRecognizedBarcodeNotInList(trackedBarcode, brush);
  }

  public setBrushForAcceptedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void> {
    return this.baseBarcodeCountView.setBrushForAcceptedBarcode(trackedBarcode, brush);
  }

  public setBrushForRejectedBarcode(trackedBarcode: TrackedBarcode, brush: Brush | null): Promise<void> {
    return this.baseBarcodeCountView.setBrushForRejectedBarcode(trackedBarcode, brush);
  }

  public enableHardwareTrigger(hardwareTriggerKeyCode: number | null): Promise<void> {
    return this.baseBarcodeCountView.enableHardwareTrigger(hardwareTriggerKeyCode);
  }

  private subscribeToChangesOnHTMLElement(): void {
    this.domObserver.observe(document, { attributes: true, childList: true, subtree: true });
    window.addEventListener('scroll', this.scrollListener);
    window.addEventListener('orientationchange', this.orientationChangeListener);
  }

  private unsubscribeFromChangesOnHTMLElement(): void {
    this.domObserver.disconnect();
    window.removeEventListener('scroll', this.scrollListener);
    window.removeEventListener('orientationchange', this.orientationChangeListener);
  }

  private elementDidChange(): void {
    if (!this.htmlElement) {
      this.htmlElementState = new HTMLElementState();
      return;
    }

    const newState = new HTMLElementState();

    const boundingRect = this.htmlElement.getBoundingClientRect();
    newState.position = new HtmlElementPosition(boundingRect.top, boundingRect.left);
    newState.size = new HtmlElementSize(boundingRect.width, boundingRect.height);
    newState.shouldBeUnderContent = parseInt(this.htmlElement.style.zIndex || '1', 10) < 0
      || parseInt(getComputedStyle(this.htmlElement).zIndex || '1', 10) < 0;

    const isDisplayed = getComputedStyle(this.htmlElement).display !== 'none'
      && this.htmlElement.style.display !== 'none';

    const isInDOM = document.body.contains(this.htmlElement);
    newState.isShown = isDisplayed && isInDOM && !this.htmlElement.hidden;

    this.htmlElementState = newState;
  }

  private updatePositionAndSize(): void {
    if (!this.htmlElementState || !this.htmlElementState.isValid) {
      return;
    }

    this.baseBarcodeCountView.setPositionAndSize(
            this.htmlElementState.position!.top,
            this.htmlElementState.position!.left,
            this.htmlElementState.size!.width,
            this.htmlElementState.size!.height,
            this.htmlElementState.shouldBeUnderContent,
    );
  }

  private _show(): Promise<void> {
    return this.baseBarcodeCountView.show();
  }

  private _hide(): Promise<void> {
    return this.baseBarcodeCountView.hide();
  }

  private toJSON(): object {
    return this.baseBarcodeCountView.toJSON();
  }

}
