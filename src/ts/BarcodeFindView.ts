import { HTMLElementState, HtmlElementPosition, HtmlElementSize } from 'scandit-datacapture-frameworks-core';
import { BarcodeFindViewProps, BarcodeFindViewUiListener, BaseBarcodeFindView } from 'scandit-datacapture-frameworks-barcode';
import { Anchor, ignoreFromSerialization } from 'scandit-datacapture-frameworks-core';

export class BarcodeFindView {

  private baseBarcodeFindView: BaseBarcodeFindView;

  @ignoreFromSerialization
  private htmlElement: HTMLElement | null = null;

  @ignoreFromSerialization
  private _htmlElementState = new HTMLElementState();

  @ignoreFromSerialization
  private scrollListener = this.elementDidChange.bind(this);

  @ignoreFromSerialization
  private domObserver = new MutationObserver(this.elementDidChange.bind(this));

  public constructor (props: BarcodeFindViewProps) {
    this.baseBarcodeFindView = new BaseBarcodeFindView(props);
  }

  private set htmlElementState(newState: HTMLElementState) {
    const didChangeShown = this._htmlElementState.isShown !== newState.isShown;

    this._htmlElementState = newState;

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
  private orientationChangeListener = (() => {
    this.elementDidChange();
    setTimeout(this.elementDidChange.bind(this), 100);
    setTimeout(this.elementDidChange.bind(this), 300);
    setTimeout(this.elementDidChange.bind(this), 1000);
  });

    public get barcodeFindViewUiListener(): BarcodeFindViewUiListener | null {
        return this.baseBarcodeFindView.barcodeFindViewUiListener;
    }

    public set barcodeFindViewUiListener(value: BarcodeFindViewUiListener | null) {
        this.baseBarcodeFindView.barcodeFindViewUiListener = value;
    }

    public static get hardwareTriggerSupported(): boolean {
        return BaseBarcodeFindView.hardwareTriggerSupported;
    }

    public get shouldShowUserGuidanceView(): boolean {
        return this.baseBarcodeFindView.shouldShowUserGuidanceView;
    }

    public set shouldShowUserGuidanceView(value: boolean) {
        this.baseBarcodeFindView.shouldShowUserGuidanceView = value;
    }

    public get shouldShowHints(): boolean {
        return this.baseBarcodeFindView.shouldShowHints;
    }

    public set shouldShowHints(value: boolean) {
        this.baseBarcodeFindView.shouldShowHints = value;
    }

    public get shouldShowCarousel(): boolean {
        return this.baseBarcodeFindView.shouldShowCarousel;
    }

    public set shouldShowCarousel(value: boolean) {
        this.baseBarcodeFindView.shouldShowCarousel = value;
    }

    public get shouldShowPauseButton(): boolean {
        return this.baseBarcodeFindView.shouldShowPauseButton;
    }

    public set shouldShowPauseButton(value: boolean) {
        this.baseBarcodeFindView.shouldShowPauseButton = value;
    }

    public get shouldShowFinishButton(): boolean {
        return this.baseBarcodeFindView.shouldShowFinishButton;
    }

    public set shouldShowFinishButton(value: boolean) {
        this.baseBarcodeFindView.shouldShowFinishButton = value;
    }

    public get shouldShowProgressBar(): boolean {
        return this.baseBarcodeFindView.shouldShowProgressBar;
    }

    public set shouldShowProgressBar(value: boolean) {
        this.baseBarcodeFindView.shouldShowProgressBar = value;
    }

    public get shouldShowTorchControl(): boolean {
        return this.baseBarcodeFindView.shouldShowTorchControl;
    }

    public set shouldShowTorchControl(value: boolean) {
        this.baseBarcodeFindView.shouldShowTorchControl = value;
    }

    public get shouldShowZoomControl(): boolean {
        return this.baseBarcodeFindView.shouldShowZoomControl;
    }

    public set shouldShowZoomControl(value: boolean) {
        this.baseBarcodeFindView.shouldShowZoomControl = value;
    }

    public get torchControlPosition(): Anchor {
        return this.baseBarcodeFindView.torchControlPosition;
    }

    public set torchControlPosition(value: Anchor) {
        this.baseBarcodeFindView.torchControlPosition = value;
    }

    public get textForCollapseCardsButton(): string | null {
        return this.baseBarcodeFindView.textForCollapseCardsButton;
    }

    public set textForCollapseCardsButton(value: string | null) {
        this.baseBarcodeFindView.textForCollapseCardsButton = value;
    }

    public get textForAllItemsFoundSuccessfullyHint(): string | null {
        return this.baseBarcodeFindView.textForAllItemsFoundSuccessfullyHint;
    }

    public set textForAllItemsFoundSuccessfullyHint(value: string | null) {
        this.baseBarcodeFindView.textForAllItemsFoundSuccessfullyHint = value;
    }

    public get textForItemListUpdatedHint(): string | null {
        return this.baseBarcodeFindView.textForItemListUpdatedHint;
    }

    public set textForItemListUpdatedHint(value: string | null) {
        this.baseBarcodeFindView.textForItemListUpdatedHint = value;
    }

    public get textForItemListUpdatedWhenPausedHint(): string | null {
        return this.baseBarcodeFindView.textForItemListUpdatedWhenPausedHint;
    }

    public set textForItemListUpdatedWhenPausedHint(value: string | null) {
        this.baseBarcodeFindView.textForItemListUpdatedWhenPausedHint = value;
    }

    public get textForPointAtBarcodesToSearchHint(): string | null {
        return this.baseBarcodeFindView.textForPointAtBarcodesToSearchHint;
    }

    public set textForPointAtBarcodesToSearchHint(value: string | null) {
        this.baseBarcodeFindView.textForPointAtBarcodesToSearchHint = value;
    }

    public get textForMoveCloserToBarcodesHint(): string | null {
        return this.baseBarcodeFindView.textForMoveCloserToBarcodesHint;
    }

    public set textForMoveCloserToBarcodesHint(value: string | null) {
        this.baseBarcodeFindView.textForMoveCloserToBarcodesHint = value;
    }

    public get textForTapShutterToPauseScreenHint(): string | null {
        return this.baseBarcodeFindView.textForTapShutterToPauseScreenHint;
    }

    public set textForTapShutterToPauseScreenHint(value: string | null) {
        this.baseBarcodeFindView.textForTapShutterToPauseScreenHint = value;
    }

    public get textForTapShutterToResumeSearchHint(): string | null {
        return this.baseBarcodeFindView.textForTapShutterToResumeSearchHint;
    }

    public set textForTapShutterToResumeSearchHint(value: string | null) {
        this.baseBarcodeFindView.textForTapShutterToResumeSearchHint = value;
    }

    public stopSearching(): Promise<void> {
        return this.baseBarcodeFindView.stopSearching();
    }

    public startSearching(): Promise<void> {
        return this.baseBarcodeFindView.startSearching();
    }

    public pauseSearching(): Promise<void> {
        return this.baseBarcodeFindView.pauseSearching();
    }

    public connectToElement(element: HTMLElement): void {
      const viewId = (Date.now() / 1000) | 0;
      this.baseBarcodeFindView.createNativeView(viewId).then(() => {
        this.htmlElement = element;
        this.htmlElementState = new HTMLElementState();

        // Initial update
        this.elementDidChange();

        this.subscribeToChangesOnHTMLElement();
      });
    }

    public detachFromElement(): void {
      this.baseBarcodeFindView.removeNativeView().then(() => {
        this.unsubscribeFromChangesOnHTMLElement();
        this.htmlElement = null;
        this.elementDidChange();
      });
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

    private _show(): Promise<void> {
      return this.baseBarcodeFindView.show();
    }

    private _hide(): Promise<void> {
      return this.baseBarcodeFindView.hide();
    }

    private toJSON(): object {
      return this.baseBarcodeFindView.toJSON();
    }
}
