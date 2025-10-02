import { HTMLElementState, HtmlElementPosition, HtmlElementSize } from 'scandit-datacapture-frameworks-core';
import {
  BarcodePick,
  BarcodePickViewSettings,
  BaseBarcodePickView,
  BarcodePickActionListener,
  BarcodePickViewUiListener,
  BarcodePickViewListener,
} from 'scandit-datacapture-frameworks-barcode';
import {
  CameraSettings,
  DataCaptureContext,
  DefaultSerializeable,
  ignoreFromSerialization,
} from 'scandit-datacapture-frameworks-core';
import { ScanditBarcodePickPluginNative } from '..//web';

interface BarcodePickViewProps {
  context: DataCaptureContext;
  barcodePick: BarcodePick;
  settings: BarcodePickViewSettings;
  cameraSettings: CameraSettings;
  style: any;
}

export class BarcodePickView extends DefaultSerializeable {
  private viewId: number = Math.floor(Math.random() * 1000000);

  @ignoreFromSerialization
  private baseBarcodePickView: BaseBarcodePickView;

  @ignoreFromSerialization
  private htmlElement: HTMLElement | null = null;

  @ignoreFromSerialization
  private _htmlElementState = new HTMLElementState();

  @ignoreFromSerialization
  private domObserver = new MutationObserver(this.elementDidChange.bind(this));

  @ignoreFromSerialization
  private scrollListener = this.elementDidChange.bind(this);

  constructor(props: BarcodePickViewProps) {
    super();
    this.baseBarcodePickView = new BaseBarcodePickView({
      context: props.context,
      barcodePick: props.barcodePick,
      settings: props.settings,
      cameraSettings: props.cameraSettings,
    });

    this.baseBarcodePickView.initialize(this);
  }

  public get uiListener(): BarcodePickViewUiListener | null {
    return this.baseBarcodePickView.uiListener;
  }

  public set uiListener(value: BarcodePickViewUiListener | null) {
    this.baseBarcodePickView.uiListener = value;
  }

  @ignoreFromSerialization
  private orientationChangeListener = () => {
    this.elementDidChange();
    // SDC-1784 -> workaround because at the moment of this callback the element doesn't have the updated size.
    setTimeout(this.elementDidChange.bind(this), 100);
    setTimeout(this.elementDidChange.bind(this), 300);
    setTimeout(this.elementDidChange.bind(this), 1000);
  };

  private set htmlElementState(newState: HTMLElementState) {
    const didChangeShown = this._htmlElementState.isShown !== newState.isShown;
    const didChangePositionOrSize = this._htmlElementState.didChangeComparedTo(newState);

    this._htmlElementState = newState;

    if (didChangePositionOrSize) {
      this.updatePositionAndSize();
    }

    if (didChangeShown) {
      if (this._htmlElementState.isShown) {
        this.start();
      } else {
        this.stop();
      }
    }
  }

  private get htmlElementState(): HTMLElementState {
    return this._htmlElementState;
  }

  public connectToElement(element: HTMLElement): void {
    this.baseBarcodePickView.createNativeView(this.viewId).then(() => {
      this.htmlElement = element;
      this.htmlElementState = new HTMLElementState();

      // Initial update
      this.elementDidChange();

      this.subscribeToChangesOnHTMLElement();
    });
  }

  public detachFromElement(): void {
    this.baseBarcodePickView.removeNativeView().then(() => {
      this.unsubscribeFromChangesOnHTMLElement();
      this.htmlElement = null;
      this.elementDidChange();
    });
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
    newState.shouldBeUnderContent =
      parseInt(this.htmlElement.style.zIndex || '1', 10) < 0 ||
      parseInt(getComputedStyle(this.htmlElement).zIndex || '1', 10) < 0;

    const isDisplayed =
      getComputedStyle(this.htmlElement).display !== 'none' && this.htmlElement.style.display !== 'none';

    const isInDOM = document.body.contains(this.htmlElement);
    newState.isShown = isDisplayed && isInDOM && !this.htmlElement.hidden;

    this.htmlElementState = newState;
  }

  private updatePositionAndSize(): void {
    if (!this.htmlElementState || !this.htmlElementState.isValid) {
      return;
    }

    ScanditBarcodePickPluginNative.setPickViewPositionAndSize({
      top: this.htmlElementState.position!.top,
      left: this.htmlElementState.position!.left,
      width: this.htmlElementState.size!.width,
      height: this.htmlElementState.size!.height,
      shouldBeUnderContent: this.htmlElementState.shouldBeUnderContent,
    });
  }

  public start(): void {
    this.baseBarcodePickView.start();
  }

  public stop(): void {
    this.baseBarcodePickView.stop();
  }

  public freeze(): void {
    this.baseBarcodePickView.freeze();
  }

  public pause(): void {
    this.baseBarcodePickView.pause();
  }

  public resume(): void {
    this.baseBarcodePickView.resume();
  }

  public addListener(listener: BarcodePickViewListener): void {
    this.baseBarcodePickView.addListener(listener);
  }

  public removeListener(listener: BarcodePickViewListener): void {
    this.baseBarcodePickView.removeListener(listener);
  }

  public addActionListener(listener: BarcodePickActionListener): void {
    this.baseBarcodePickView.addActionListener(listener);
  }

  public removeActionListener(listener: BarcodePickActionListener): void {
    this.baseBarcodePickView.removeActionListener(listener);
  }

  public release(): void {
    this.baseBarcodePickView.dispose();
  }
}
