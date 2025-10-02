import { loadBarcodeCaptureDefaults, loadBarcodeCountDefaults, loadBarcodeDefaults, loadBarcodeFindDefaults, loadBarcodePickDefaults, loadBarcodeSelectionDefaults, loadBarcodeBatchDefaults, loadSparkScanDefaults } from 'scandit-datacapture-frameworks-barcode';
import { FactoryMaker, Feedback, FeedbackProxy, loadCoreDefaults } from 'scandit-datacapture-frameworks-core';
import { CapacitorFunction } from '../src/ts/Capacitor/Capacitor';
import { jest } from '@jest/globals';


class MockFeedbackProxy implements FeedbackProxy {
  emitFeedback(_: Feedback): Promise<void> {
    return Promise.resolve();
  }
}

export class DefaultsData {
  get barcodeBatchDefaultsData() {
    return {
      "RecommendedCameraSettings": {
        "preferredResolution": "fullHd",
        "zoomFactor": 1,
        "focusRange": "full",
        "focusGestureStrategy": "none",
        "zoomGestureZoomFactor": 1,
        "shouldPreferSmoothAutoFocus": true,
        "properties": {
          "macroAutofocusMode": "off"
        }
      },
      "BarcodeBatchBasicOverlay": {
        "defaultStyle": "legacy",
        "Brushes": {
          "dot": {
            "fillColor": "#FFFFFFFF",
            "strokeColor": "#00000000",
            "strokeWidth": 0
          },
          "frame": {
            "fillColor": "#00000000",
            "strokeColor": "#FFFFFFFF",
            "strokeWidth": 3
          },
          "legacy": {
            "fillColor": "#2EC1CE4D",
            "strokeColor": "#2EC1CEFF",
            "strokeWidth": 1
          }
        }
      }
    };
  }

  get barcodeCaptureDefaultsData() {
    return {
      "RecommendedCameraSettings": {
        "preferredResolution": "auto",
        "zoomFactor": 1,
        "focusRange": "full",
        "focusGestureStrategy": "manualUntilCapture",
        "zoomGestureZoomFactor": 2,
        "shouldPreferSmoothAutoFocus": false,
        "properties": {}
      },
      "BarcodeCaptureSettings": {
        "codeDuplicateFilter": 0
      },
      "BarcodeCaptureOverlay": {
        "defaultStyle": "legacy",
        "Brushes": {
          "frame": {
            "fillColor": "#00000000",
            "strokeColor": "#FFFFFFFF",
            "strokeWidth": 3
          },
          "legacy": {
            "fillColor": "#00000000",
            "strokeColor": "#2EC1CEFF",
            "strokeWidth": 1
          }
        },
        "DefaultBrush": {
          "fillColor": "#00000000",
          "strokeColor": "#2EC1CEFF",
          "strokeWidth": 1
        }
      }
    };
  }

  get barcodeDefaultsData() {
    return {
      "SymbologySettings": {
        "ean13Upca": "{\"activeSymbolCounts\":[12],\"checksums\":[],\"colorInvertedEnabled\":false,\"enabled\":false,\"extensions\":[]}",
      },
      "SymbologyDescriptions": [
        "{\"activeSymbolCountRange\":{\"maximum\":12,\"minimum\":12,\"step\":1},\"defaultSymbolCountRange\":{\"maximum\":12,\"minimum\":12,\"step\":1},\"identifier\":\"ean13Upca\",\"isAvailable\":true,\"isColorInvertible\":true,\"readableName\":\"EAN-13/UPC-A\",\"supportedChecksums\":[],\"supportedExtensions\":[\"two_digit_add_on\",\"strict\",\"remove_leading_upca_zero\",\"relaxed_sharp_quiet_zone_check\",\"five_digit_add_on\"]}",
      ],
      "CompositeTypeDescriptions": [
        "{\"symbologies\":[\"ean8\",\"ean13Upca\",\"microPdf417\",\"databarLimited\",\"upce\",\"databar\",\"databarExpanded\"],\"types\":[\"A\"]}",
        "{\"symbologies\":[\"ean8\",\"ean13Upca\",\"microPdf417\",\"databarLimited\",\"upce\",\"databar\",\"databarExpanded\"],\"types\":[\"B\"]}",
        "{\"symbologies\":[\"code128\",\"pdf417\"],\"types\":[\"C\"]}"
      ],
      "BarcodeCapture": {
        "RecommendedCameraSettings": {
          "preferredResolution": "auto",
          "zoomFactor": 1,
          "focusRange": "full",
          "focusGestureStrategy": "manualUntilCapture",
          "zoomGestureZoomFactor": 2,
          "shouldPreferSmoothAutoFocus": false,
          "properties": {}
        },
        "BarcodeCaptureSettings": {
          "codeDuplicateFilter": 0
        },
        "BarcodeCaptureOverlay": {
          "defaultStyle": "legacy",
          "Brushes": {
            "frame": {
              "fillColor": "#00000000",
              "strokeColor": "#FFFFFFFF",
              "strokeWidth": 3
            },
            "legacy": {
              "fillColor": "#00000000",
              "strokeColor": "#2EC1CEFF",
              "strokeWidth": 1
            }
          },
          "DefaultBrush": {
            "fillColor": "#00000000",
            "strokeColor": "#2EC1CEFF",
            "strokeWidth": 1
          }
        }
      },
      "BarcodeBatch": {
        "RecommendedCameraSettings": {
          "preferredResolution": "fullHd",
          "zoomFactor": 1,
          "focusRange": "full",
          "focusGestureStrategy": "none",
          "zoomGestureZoomFactor": 1,
          "shouldPreferSmoothAutoFocus": true,
          "properties": {
            "macroAutofocusMode": "off"
          }
        },
        "BarcodeBatchBasicOverlay": {
          "defaultStyle": "legacy",
          "Brushes": {
            "dot": {
              "fillColor": "#FFFFFFFF",
              "strokeColor": "#00000000",
              "strokeWidth": 0
            },
            "frame": {
              "fillColor": "#00000000",
              "strokeColor": "#FFFFFFFF",
              "strokeWidth": 3
            },
            "legacy": {
              "fillColor": "#2EC1CE4D",
              "strokeColor": "#2EC1CEFF",
              "strokeWidth": 1
            }
          }
        }
      },
      "BarcodeSelection": {
        "BarcodeSelectionBasicOverlay": {
          "defaultStyle": "frame",
          "styles": {
            "dot": {
              "DefaultAimedBrush": {
                "fillColor": "#26D482B3",
                "strokeColor": "#00000000",
                "strokeWidth": 3
              },
              "DefaultSelectedBrush": {
                "fillColor": "#26D482FF",
                "strokeColor": "#00000000",
                "strokeWidth": 0
              },
              "DefaultSelectingBrush": {
                "fillColor": "#26D482FF",
                "strokeColor": "#00000000",
                "strokeWidth": 0
              },
              "DefaultTrackedBrush": {
                "fillColor": "#FFFFFFFF",
                "strokeColor": "#00000000",
                "strokeWidth": 0
              }
            },
            "frame": {
              "DefaultAimedBrush": {
                "fillColor": "#26D482B3",
                "strokeColor": "#00000000",
                "strokeWidth": 3
              },
              "DefaultSelectedBrush": {
                "fillColor": "#00000000",
                "strokeColor": "#26D482FF",
                "strokeWidth": 3
              },
              "DefaultSelectingBrush": {
                "fillColor": "#00000000",
                "strokeColor": "#26D482FF",
                "strokeWidth": 3
              },
              "DefaultTrackedBrush": {
                "fillColor": "#00000000",
                "strokeColor": "#FFFFFFFF",
                "strokeWidth": 3
              }
            }
          },
          "shouldShowHints": true,
          "frozenBackgroundColor": "#00000080"
        },
        "BarcodeSelectionSettings": {
          "codeDuplicateFilter": 500,
          "singleBarcodeAutoDetectionEnabled": false,
          "selectionType": "{\"freezeBehavior\":\"manual\",\"tapBehavior\":\"toggleSelection\",\"type\":\"tapSelection\"}"
        },
        "Feedback": "{\"selection\":{\"sound\":{\"resource\":\"sc_selection_beep\"}}}",
        "RecommendedCameraSettings": {
          "preferredResolution": "fullHd",
          "zoomFactor": 1,
          "focusRange": "full",
          "focusGestureStrategy": "none",
          "zoomGestureZoomFactor": 1,
          "shouldPreferSmoothAutoFocus": true,
          "properties": {
            "macroAutofocusMode": "off"
          }
        },
        "BarcodeSelectionTapSelection": {
          "defaultFreezeBehaviour": "manual",
          "defaultTapBehaviour": "toggleSelection"
        },
        "BarcodeSelectionAimerSelection": {
          "defaultSelectionStrategy": "{\"type\":\"manualSelectionStrategy\"}"
        }
      },
      "BarcodeCount": {
        "RecommendedCameraSettings": {
          "preferredResolution": "uhd4k",
          "zoomFactor": 1,
          "focusRange": "full",
          "focusGestureStrategy": "none",
          "zoomGestureZoomFactor": 1,
          "shouldPreferSmoothAutoFocus": false,
          "properties": {
            "macroAutofocusMode": "off",
            "exposureTargetBias": -1,
            "api": 2,
            "closestResolutionTo12MPForFourToThreeAspectRatio": true,
            "focusStrategy": "forceContinuous"
          }
        },
        "BarcodeCountSettings": {
          "barcodeFilterSettings": {
            "excludeEan13": false,
            "excludeUpca": false,
            "excludedCodesRegex": "",
            "excludedSymbolCounts": {},
            "excludedSymbologies": []
          },
          "expectOnlyUniqueBarcodes": false,
          "mappingEnabled": false
        },
        "BarcodeCountFeedback": "{\"success\":{\"sound\":{\"resource\":\"sc_barcode_count_success\"},\"vibration\":{\"type\":\"default\"}},\"unrecognized\":{\"sound\":{\"resource\":\"sc_barcode_count_unrecognized\"},\"vibration\":{\"type\":\"default\"}},\"failure\":{\"sound\":{\"resource\":\"sc_barcode_count_failure\"},\"vibration\":{\"type\":\"default\"}}}",
        "BarcodeCountView": {
          "style": "icon",
          "shouldShowUserGuidanceView": true,
          "shouldShowListButton": true,
          "shouldShowExitButton": true,
          "shouldShowShutterButton": true,
          "shouldShowHints": true,
          "shouldShowClearHighlightsButton": false,
          "shouldShowFloatingShutterButton": false,
          "notInListBrush": {
            "fillColor": "#FA4446FF",
            "strokeColor": "#00000000",
            "strokeWidth": 0
          },
          "recognizedBrush": {
            "fillColor": "#28D380FF",
            "strokeColor": "#00000000",
            "strokeWidth": 0
          },
          "shouldShowScanAreaGuides": false,
          "shouldShowSingleScanButton": false,
          "shouldShowToolbar": true,
          "clearHighlightsButtonText": "",
          "exitButtonText": "Finish",
          "textForTapShutterToScanHint": "Tap shutter to scan items",
          "textForScanningHint": "Scanning",
          "textForMoveCloserAndRescanHint": "Move closer and tap shutter",
          "textForMoveFurtherAndRescanHint": "Step back and tap shutter",
          "toolbarSettings": {
            "audioOnButtonText": "Audio on",
            "audioOffButtonText": "Audio off",
            "audioButtonContentDescription": "",
            "vibrationOnButtonText": "Haptic on",
            "vibrationOffButtonText": "Haptic off",
            "vibrationButtonContentDescription": "",
            "strapModeOnButtonText": "Strap mode",
            "strapModeOffButtonText": "Strap mode",
            "strapModeButtonContentDescription": "",
            "colorSchemeOnButtonText": "Color scheme",
            "colorSchemeOffButtonText": "Color scheme",
            "colorSchemeButtonContentDescription": ""
          },
          "listButtonContentDescription": "Show the list",
          "exitButtonContentDescription": "Exit",
          "shutterButtonContentDescription": "Scan",
          "floatingShutterButtonContentDescription": "Scan",
          "clearHighlightsButtonContentDescription": "Clear screen",
          "singleScanButtonContentDescription": "Single scan"
        }
      },
      "BarcodeFind": {
        "RecommendedCameraSettings": {
          "preferredResolution": "uhd4k",
          "zoomFactor": 1,
          "focusRange": "full",
          "focusGestureStrategy": "manualUntilCapture",
          "zoomGestureZoomFactor": 1,
          "shouldPreferSmoothAutoFocus": false,
          "properties": {
            "exposureTargetBias": -1,
            "scanPhaseNoSreTimeout": 3,
            "focusStrategy": "continuousUntilNoScan"
          }
        },
        "BarcodeFindFeedback": "{\"found\":{}}",
        "BarcodeFindView": {
          "shouldShowCarousel": true,
          "shouldShowFinishButton": true,
          "shouldShowHints": true,
          "shouldShowPauseButton": true,
          "shouldShowProgressBar": false,
          "shouldShowUserGuidanceView": true,
          "textForAllItemsFoundSuccessfullyHint": null,
          "textForCollapseCardsButton": null,
          "textForMoveCloserToBarcodesHint": null,
          "textForPointAtBarcodesToSearchHint": null,
          "textForTapShutterToPauseScreenHint": null,
          "textForTapShutterToResumeSearchHint": null
        }
      },
      "BarcodePick": {
        "BarcodePickSettings": {
          "hapticsEnabled": true,
          "soundEnabled": true,
          "cachingEnabled": true
        },
        "RecommendedCameraSettings": {
          "preferredResolution": "uhd4k",
          "zoomFactor": 1,
          "focusRange": "full",
          "focusGestureStrategy": "none",
          "zoomGestureZoomFactor": 2,
          "shouldPreferSmoothAutoFocus": false,
          "properties": {
            "exposureTargetBias": -1,
            "scanPhaseNoSreTimeout": 3,
            "focusStrategy": "continuousUntilNoScan"
          }
        },
        "ViewSettings": {
          "HighlightStyle": "{\"brushesForState\":[{\"barcodePickState\":\"picked\",\"brush\":{\"fill\":{\"color\":\"2ec1cee5\"},\"stroke\":{\"color\":\"00000000\",\"width\":0.0}}},{\"barcodePickState\":\"toPick\",\"brush\":{\"fill\":{\"color\":\"0a3390e5\"},\"stroke\":{\"color\":\"00000000\",\"width\":0.0}}},{\"barcodePickState\":\"unknown\",\"brush\":{\"fill\":{\"color\":\"ffffff4c\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":3.0}}},{\"barcodePickState\":\"ignore\",\"brush\":{\"fill\":{\"color\":\"ffffff4c\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":3.0}}}],\"iconStyle\":\"preset1\",\"styleResponseCacheEnabled\":true,\"type\":\"rectangularWithIcons\"}",
          "initialGuidelineText": "Point at barcodes to find items.",
          "moveCloserGuidelineText": "Move closer to barcodes.",
          "loadingDialogText": "Loading...",
          "showLoadingDialog": true,
          "showZoomButton": false,
          "onFirstItemPickCompletedHintText": "To undo pickup, tap selected highlight(s) again.",
          "onFirstItemToPickFoundHintText": "Tap blue highlight(s) to mark pickup.",
          "onFirstItemUnpickCompletedHintText": "Item pickup undone successfully.",
          "onFirstUnmarkedItemPickCompletedHintText": "Item not in the list, tap again to undo pickup.",
          "showGuidelines": true,
          "showHints": true,
          "showFinishButton": true,
          "showPauseButton": true
        },
        "BarcodePickViewHighlightStyle": {
          "Rectangular": "{\"brushesForState\":[{\"barcodePickState\":\"picked\",\"brush\":{\"fill\":{\"color\":\"2ec1cee5\"},\"stroke\":{\"color\":\"00000000\",\"width\":0.0}}},{\"barcodePickState\":\"toPick\",\"brush\":{\"fill\":{\"color\":\"0a3390e5\"},\"stroke\":{\"color\":\"00000000\",\"width\":0.0}}},{\"barcodePickState\":\"unknown\",\"brush\":{\"fill\":{\"color\":\"ffffff4c\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":3.0}}},{\"barcodePickState\":\"ignore\",\"brush\":{\"fill\":{\"color\":\"ffffff4c\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":3.0}}}],\"type\":\"rectangular\"}",
          "RectangularWithIcons": "{\"brushesForState\":[{\"barcodePickState\":\"picked\",\"brush\":{\"fill\":{\"color\":\"2ec1cee5\"},\"stroke\":{\"color\":\"00000000\",\"width\":0.0}}},{\"barcodePickState\":\"toPick\",\"brush\":{\"fill\":{\"color\":\"0a3390e5\"},\"stroke\":{\"color\":\"00000000\",\"width\":0.0}}},{\"barcodePickState\":\"unknown\",\"brush\":{\"fill\":{\"color\":\"ffffff4c\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":3.0}}},{\"barcodePickState\":\"ignore\",\"brush\":{\"fill\":{\"color\":\"ffffff4c\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":3.0}}}],\"iconStyle\":\"preset1\",\"styleResponseCacheEnabled\":true,\"type\":\"rectangularWithIcons\"}",
          "Dot": "{\"brushesForState\":[{\"barcodePickState\":\"picked\",\"brush\":{\"fill\":{\"color\":\"2ec1cee5\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":2.0}}},{\"barcodePickState\":\"toPick\",\"brush\":{\"fill\":{\"color\":\"0a3390e5\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":2.0}}},{\"barcodePickState\":\"unknown\",\"brush\":{\"fill\":{\"color\":\"ffffffff\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":0.0}}},{\"barcodePickState\":\"ignore\",\"brush\":{\"fill\":{\"color\":\"ffffffff\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":0.0}}}],\"type\":\"dot\"}",
          "DotWithIcons": "{\"brushesForState\":[{\"barcodePickState\":\"picked\",\"brush\":{\"fill\":{\"color\":\"2ec1cee5\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":2.0}}},{\"barcodePickState\":\"toPick\",\"brush\":{\"fill\":{\"color\":\"0a3390e5\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":2.0}}},{\"barcodePickState\":\"unknown\",\"brush\":{\"fill\":{\"color\":\"ffffffff\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":0.0}}},{\"barcodePickState\":\"ignore\",\"brush\":{\"fill\":{\"color\":\"ffffffff\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":0.0}}}],\"iconStyle\":\"preset1\",\"styleResponseCacheEnabled\":true,\"type\":\"dotWithIcons\"}"
        },
        "SymbologySettings": {
          "ean13Upca": "{\"activeSymbolCounts\":[12],\"checksums\":[],\"colorInvertedEnabled\":false,\"enabled\":false,\"extensions\":[]}",
        }
      },
      "SparkScan": {
        "Feedback": {
          "success": "{\"type\":\"success\",\"barcodeFeedback\":{\"visualFeedbackColor\":\"#2EC1CEFF\",\"brush\":{\"fill\":{\"color\":\"ffffff00\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":3}},\"feedback\":{\"sound\":{\"resource\":\"sc_spark_success_beep\"},\"vibration\":{\"type\":\"waveForm\",\"timings\":[20,40,100,60],\"amplitudes\":[0,255,0,255]}}}}",
          "error": "{\"type\":\"error\",\"barcodeFeedback\":{\"visualFeedbackColor\":\"#FA4446FF\",\"feedback\":{\"sound\":{\"resource\":\"sc_barcode_count_failure\"},\"vibration\":{\"type\":\"default\"}},\"message\":\"ignore\",\"resumeCapturingDelay\":1,\"brush\":{\"fill\":{\"color\":\"ffffff00\"},\"stroke\":{\"color\":\"ff4446ff\",\"width\":3}}}}"
        },
        "SparkScanSettings": {
          "codeDuplicateFilter": 1000,
          "singleBarcodeAutoDetection": false,
          "batterySaving": "off"
        },
        "SparkScanView": {
          "shouldShowScanAreaGuides": false,
          "brush": {
            "fillColor": "#FFFFFF00",
            "strokeColor": "#FFFFFFFF",
            "strokeWidth": 3
          },
          "torchButtonVisible": true,
          "scanningBehaviorButtonVisible": false,
          "handModeButtonVisible": false,
          "barcodeCountButtonVisible": false,
          "fastFindButtonVisible": false,
          "targetModeButtonVisible": true,
          "soundModeButtonVisible": false,
          "hapticModeButtonVisible": false,
          "stopCapturingText": null,
          "startCapturingText": null,
          "resumeCapturingText": null,
          "scanningCapturingText": null,
          "captureButtonActiveBackgroundColor": null,
          "captureButtonBackgroundColor": null,
          "captureButtonTintColor": null,
          "toolbarBackgroundColor": null,
          "toolbarIconActiveTintColor": null,
          "toolbarIconInactiveTintColor": null,
          "SparkScanViewSettings": "{\"triggerButtonCollapseTimeout\":-1,\"inactiveStateTimeout\":10,\"defaultTorchState\":\"off\",\"defaultScanningMode\":\"{\\\"type\\\":\\\"default\\\",\\\"settings\\\":{\\\"scanningBehavior\\\":\\\"single\\\",\\\"previewBehavior\\\":\\\"default\\\"}}\",\"defaultHandMode\":\"right\",\"holdToScanEnabled\":true,\"soundEnabled\":true,\"hapticEnabled\":true,\"hardwareTriggerEnabled\":false,\"visualFeedbackEnabled\":true,\"toastSettings\":\"{\\\"toastEnabled\\\":true}\",\"ignoreDragLimits\":true,\"zoomFactorIn\":2,\"zoomFactorOut\":1}",
          "zoomSwitchControlVisible": true,
          "targetModeHintText": null,
          "hardwareTriggerSupported": true,
          "toastEnabled": true,
          "toastBackgroundColor": null,
          "toastTextColor": null,
          "targetModeEnabledMessage": null,
          "targetModeDisabledMessage": null,
          "continuousModeEnabledMessage": null,
          "continuousModeDisabledMessage": null,
          "cameraTimeoutMessage": null,
          "previewSizeControlVisible": true
        }
      }
    };
  }

  get barcodeSelectionDefaults() {
    return {
      "BarcodeSelectionBasicOverlay": {
        "defaultStyle": "frame",
        "styles": {
          "dot": {
            "DefaultAimedBrush": {
              "fillColor": "#26D482B3",
              "strokeColor": "#00000000",
              "strokeWidth": 3
            },
            "DefaultSelectedBrush": {
              "fillColor": "#26D482FF",
              "strokeColor": "#00000000",
              "strokeWidth": 0
            },
            "DefaultSelectingBrush": {
              "fillColor": "#26D482FF",
              "strokeColor": "#00000000",
              "strokeWidth": 0
            },
            "DefaultTrackedBrush": {
              "fillColor": "#FFFFFFFF",
              "strokeColor": "#00000000",
              "strokeWidth": 0
            }
          },
          "frame": {
            "DefaultAimedBrush": {
              "fillColor": "#26D482B3",
              "strokeColor": "#00000000",
              "strokeWidth": 3
            },
            "DefaultSelectedBrush": {
              "fillColor": "#00000000",
              "strokeColor": "#26D482FF",
              "strokeWidth": 3
            },
            "DefaultSelectingBrush": {
              "fillColor": "#00000000",
              "strokeColor": "#26D482FF",
              "strokeWidth": 3
            },
            "DefaultTrackedBrush": {
              "fillColor": "#00000000",
              "strokeColor": "#FFFFFFFF",
              "strokeWidth": 3
            }
          }
        },
        "shouldShowHints": true,
        "frozenBackgroundColor": "#00000080"
      },
      "BarcodeSelectionSettings": {
        "codeDuplicateFilter": 500,
        "singleBarcodeAutoDetectionEnabled": false,
        "selectionType": "{\"freezeBehavior\":\"manual\",\"tapBehavior\":\"toggleSelection\",\"type\":\"tapSelection\"}"
      },
      "Feedback": "{\"selection\":{\"sound\":{\"resource\":\"sc_selection_beep\"}}}",
      "RecommendedCameraSettings": {
        "preferredResolution": "fullHd",
        "zoomFactor": 1,
        "focusRange": "full",
        "focusGestureStrategy": "none",
        "zoomGestureZoomFactor": 1,
        "shouldPreferSmoothAutoFocus": true,
        "properties": {
          "macroAutofocusMode": "off"
        }
      },
      "BarcodeSelectionTapSelection": {
        "defaultFreezeBehaviour": "manual",
        "defaultTapBehaviour": "toggleSelection"
      },
      "BarcodeSelectionAimerSelection": {
        "defaultSelectionStrategy": "{\"type\":\"manualSelectionStrategy\"}"
      }
    };
  }

  get coreDefaults() {
    return {
      "Version": "6.24.0-beta.1-SNAPSHOT",
      "Camera": {
        "Settings": {
          "preferredResolution": "auto",
          "zoomFactor": 1,
          "focusRange": "full",
          "focusGestureStrategy": "manualUntilCapture",
          "zoomGestureZoomFactor": 2,
          "shouldPreferSmoothAutoFocus": false,
          "properties": {}
        },
        "defaultPosition": "worldFacing",
        "availablePositions": [
          "userFacing",
          "worldFacing"
        ]
      },
      "DataCaptureView": {
        "scanAreaMargins": "{\"bottom\":{\"unit\":\"fraction\",\"value\":0.0},\"left\":{\"unit\":\"fraction\",\"value\":0.0},\"right\":{\"unit\":\"fraction\",\"value\":0.0},\"top\":{\"unit\":\"fraction\",\"value\":0.0}}",
        "pointOfInterest": "{\"x\":{\"unit\":\"fraction\",\"value\":0.5},\"y\":{\"unit\":\"fraction\",\"value\":0.5}}",
        "logoAnchor": "bottomRight",
        "logoOffset": "{\"x\":{\"unit\":\"fraction\",\"value\":0.0},\"y\":{\"unit\":\"fraction\",\"value\":0.0}}",
        "focusGesture": "{\"showUIIndicator\":true,\"type\":\"tapToFocus\"}",
        "zoomGesture": "{\"type\":\"swipeToZoom\"}",
        "logoStyle": "extended"
      },
      "RectangularViewfinder": {
        "defaultStyle": "legacy",
        "styles": {
          "legacy": {
            "size": "{\"height\":{\"unit\":\"fraction\",\"value\":0.32499998807907104},\"width\":{\"unit\":\"fraction\",\"value\":0.800000011920929}}",
            "color": "#FFFFFFFF",
            "style": "legacy",
            "lineStyle": "light",
            "dimming": 0,
            "animation": null,
            "disabledDimming": 0,
            "disabledColor": "#00000000"
          },
          "rounded": {
            "size": "{\"aspect\":1.0,\"shorterDimension\":{\"unit\":\"fraction\",\"value\":0.75}}",
            "color": "#FFFFFFFF",
            "style": "rounded",
            "lineStyle": "light",
            "dimming": 0,
            "animation": "{\"looping\":true}",
            "disabledDimming": 0,
            "disabledColor": "#00000000"
          },
          "square": {
            "size": "{\"aspect\":1.0,\"shorterDimension\":{\"unit\":\"fraction\",\"value\":0.75}}",
            "color": "#FFFFFFFF",
            "style": "square",
            "lineStyle": "light",
            "dimming": 0,
            "animation": "{\"looping\":true}",
            "disabledDimming": 0,
            "disabledColor": "#00000000"
          }
        }
      },
      "Brush": {
        "fillColor": "#00000000",
        "strokeColor": "#00000000",
        "strokeWidth": 0
      },
      "deviceID": "ed12135fc75389bc47a139e1040e09e3b3b525fe",
      "AimerViewfinder": {
        "frameColor": "#FFFFFFFF",
        "dotColor": "#FFFFFFCC"
      },
      "SpotlightViewfinder": {
        "size": "{\"height\":{\"unit\":\"fraction\",\"value\":0.32499998807907104},\"width\":{\"unit\":\"fraction\",\"value\":0.800000011920929}}",
        "backgroundColor": "#00000080",
        "disabledBorderColor": "#FFFFFFFF",
        "enabledBorderColor": "#FFFFFFFF"
      },
      "LaserlineViewfinder": {
        "width": "{\"unit\":\"fraction\",\"value\":0.800000011920929}",
        "enabledColor": "#FFFFFFFF",
        "disabledColor": "#00000000"
      }
    }
  }

  get barcodeCountDefaultsData() {
    return {
      "RecommendedCameraSettings": {
        "preferredResolution": "uhd4k",
        "zoomFactor": 1,
        "focusRange": "full",
        "focusGestureStrategy": "none",
        "zoomGestureZoomFactor": 1,
        "shouldPreferSmoothAutoFocus": false,
        "properties": {
          "macroAutofocusMode": "off",
          "exposureTargetBias": -1,
          "api": 2,
          "closestResolutionTo12MPForFourToThreeAspectRatio": true,
          "focusStrategy": "forceContinuous"
        }
      },
      "BarcodeCountSettings": {
        "barcodeFilterSettings": {
          "excludeEan13": false,
          "excludeUpca": false,
          "excludedCodesRegex": "",
          "excludedSymbolCounts": {},
          "excludedSymbologies": []
        },
        "expectOnlyUniqueBarcodes": false,
        "mappingEnabled": false
      },
      "BarcodeCountFeedback": "{\"success\":{\"sound\":{\"resource\":\"sc_barcode_count_success\"},\"vibration\":{\"type\":\"default\"}},\"unrecognized\":{\"sound\":{\"resource\":\"sc_barcode_count_unrecognized\"},\"vibration\":{\"type\":\"default\"}},\"failure\":{\"sound\":{\"resource\":\"sc_barcode_count_failure\"},\"vibration\":{\"type\":\"default\"}}}",
      "BarcodeCountView": {
        "style": "icon",
        "shouldShowUserGuidanceView": true,
        "shouldShowListButton": true,
        "shouldShowExitButton": true,
        "shouldShowShutterButton": true,
        "shouldShowHints": true,
        "shouldShowClearHighlightsButton": false,
        "shouldShowFloatingShutterButton": false,
        "notInListBrush": {
          "fillColor": "#FA4446FF",
          "strokeColor": "#00000000",
          "strokeWidth": 0
        },
        "recognizedBrush": {
          "fillColor": "#28D380FF",
          "strokeColor": "#00000000",
          "strokeWidth": 0
        },
        "acceptedBrush": {
          "fillColor": "#28D380FF",
          "strokeColor": "#00000000",
          "strokeWidth": 0
        },
        "rejectedBrush": {
          "fillColor": "#FA4446FF",
          "strokeColor": "#00000000",
          "strokeWidth": 0
        },
        "shouldShowScanAreaGuides": false,
        "shouldShowSingleScanButton": false,
        "shouldShowToolbar": true,
        "clearHighlightsButtonText": "Clear screen",
        "exitButtonText": "Finish",
        "textForTapShutterToScanHint": "Tap shutter to scan items",
        "textForScanningHint": "Scanning",
        "textForMoveCloserAndRescanHint": "Move closer and tap shutter",
        "textForMoveFurtherAndRescanHint": "Step back and tap shutter",
        "toolbarSettings": {
          "audioOnButtonText": "Audio on",
          "audioOffButtonText": "Audio off",
          "audioButtonContentDescription": "Audio",
          "vibrationOnButtonText": "Haptic on",
          "vibrationOffButtonText": "Haptic off",
          "vibrationButtonContentDescription": "Vibration",
          "strapModeOnButtonText": "Strap mode",
          "strapModeOffButtonText": "Strap mode",
          "strapModeButtonContentDescription": "Strap mode",
          "colorSchemeOnButtonText": "Color scheme",
          "colorSchemeOffButtonText": "Color scheme",
          "colorSchemeButtonContentDescription": "Color scheme"
        },
        "listButtonContentDescription": "List button",
        "exitButtonContentDescription": "Exit button",
        "shutterButtonContentDescription": "Shutter button",
        "floatingShutterButtonContentDescription": "Floating shutter button",
        "clearHighlightsButtonContentDescription": "Clear highlights button",
        "singleScanButtonContentDescription": "Single scan button",
        "shouldShowListProgressBar": true,
        "shouldShowTorchControl": false,
        "torchControlPosition": "topLeft",
        "tapToUncountEnabled": false,
        "textForTapToUncountHint": "Barcode removed",
        "shouldShowStatusModeButton": false,
        "hardwareTriggerSupported": true
      }
    };
  }

  get barcodePickDefaultsData() {
    return {
      "BarcodePickSettings": {
        "hapticsEnabled": true,
        "soundEnabled": true,
        "cachingEnabled": true
      },
      "RecommendedCameraSettings": {
        "preferredResolution": "uhd4k",
        "zoomFactor": 1,
        "focusRange": "full",
        "focusGestureStrategy": "none",
        "zoomGestureZoomFactor": 2,
        "shouldPreferSmoothAutoFocus": false,
        "properties": {
          "exposureTargetBias": -1,
          "scanPhaseNoSreTimeout": 3,
          "focusStrategy": "continuousUntilNoScan"
        }
      },
      "ViewSettings": {
        "HighlightStyle": "{\"brushesForState\":[{\"barcodePickState\":\"picked\",\"brush\":{\"fill\":{\"color\":\"2ec1cee5\"},\"stroke\":{\"color\":\"00000000\",\"width\":0.0}}},{\"barcodePickState\":\"toPick\",\"brush\":{\"fill\":{\"color\":\"0a3390e5\"},\"stroke\":{\"color\":\"00000000\",\"width\":0.0}}},{\"barcodePickState\":\"unknown\",\"brush\":{\"fill\":{\"color\":\"ffffff4c\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":3.0}}},{\"barcodePickState\":\"ignore\",\"brush\":{\"fill\":{\"color\":\"ffffff4c\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":3.0}}}],\"iconStyle\":\"preset1\",\"styleResponseCacheEnabled\":true,\"type\":\"rectangularWithIcons\"}",
        "initialGuidelineText": "Point at barcodes to find items.",
        "moveCloserGuidelineText": "Move closer to barcodes.",
        "loadingDialogText": "Loading...",
        "showLoadingDialog": true,
        "showZoomButton": false,
        "onFirstItemPickCompletedHintText": "To undo pickup, tap selected highlight(s) again.",
        "onFirstItemToPickFoundHintText": "Tap blue highlight(s) to mark pickup.",
        "onFirstItemUnpickCompletedHintText": "Item pickup undone successfully.",
        "onFirstUnmarkedItemPickCompletedHintText": "Item not in the list, tap again to undo pickup.",
        "showGuidelines": true,
        "showHints": true,
        "showFinishButton": true,
        "showPauseButton": true
      },
      "BarcodePickViewHighlightStyle": {
        "Rectangular": "{\"brushesForState\":[{\"barcodePickState\":\"picked\",\"brush\":{\"fill\":{\"color\":\"2ec1cee5\"},\"stroke\":{\"color\":\"00000000\",\"width\":0.0}}},{\"barcodePickState\":\"toPick\",\"brush\":{\"fill\":{\"color\":\"0a3390e5\"},\"stroke\":{\"color\":\"00000000\",\"width\":0.0}}},{\"barcodePickState\":\"unknown\",\"brush\":{\"fill\":{\"color\":\"ffffff4c\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":3.0}}},{\"barcodePickState\":\"ignore\",\"brush\":{\"fill\":{\"color\":\"ffffff4c\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":3.0}}}],\"type\":\"rectangular\"}",
        "RectangularWithIcons": "{\"brushesForState\":[{\"barcodePickState\":\"picked\",\"brush\":{\"fill\":{\"color\":\"2ec1cee5\"},\"stroke\":{\"color\":\"00000000\",\"width\":0.0}}},{\"barcodePickState\":\"toPick\",\"brush\":{\"fill\":{\"color\":\"0a3390e5\"},\"stroke\":{\"color\":\"00000000\",\"width\":0.0}}},{\"barcodePickState\":\"unknown\",\"brush\":{\"fill\":{\"color\":\"ffffff4c\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":3.0}}},{\"barcodePickState\":\"ignore\",\"brush\":{\"fill\":{\"color\":\"ffffff4c\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":3.0}}}],\"iconStyle\":\"preset1\",\"styleResponseCacheEnabled\":true,\"type\":\"rectangularWithIcons\"}",
        "Dot": "{\"brushesForState\":[{\"barcodePickState\":\"picked\",\"brush\":{\"fill\":{\"color\":\"2ec1cee5\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":2.0}}},{\"barcodePickState\":\"toPick\",\"brush\":{\"fill\":{\"color\":\"0a3390e5\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":2.0}}},{\"barcodePickState\":\"unknown\",\"brush\":{\"fill\":{\"color\":\"ffffffff\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":0.0}}},{\"barcodePickState\":\"ignore\",\"brush\":{\"fill\":{\"color\":\"ffffffff\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":0.0}}}],\"type\":\"dot\"}",
        "DotWithIcons": "{\"brushesForState\":[{\"barcodePickState\":\"picked\",\"brush\":{\"fill\":{\"color\":\"2ec1cee5\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":2.0}}},{\"barcodePickState\":\"toPick\",\"brush\":{\"fill\":{\"color\":\"0a3390e5\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":2.0}}},{\"barcodePickState\":\"unknown\",\"brush\":{\"fill\":{\"color\":\"ffffffff\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":0.0}}},{\"barcodePickState\":\"ignore\",\"brush\":{\"fill\":{\"color\":\"ffffffff\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":0.0}}}],\"iconStyle\":\"preset1\",\"styleResponseCacheEnabled\":true,\"type\":\"dotWithIcons\"}"
      },
      "SymbologySettings": {
        "ean13Upca": "{\"activeSymbolCounts\":[12],\"checksums\":[],\"colorInvertedEnabled\":false,\"enabled\":false,\"extensions\":[]}",
      }
    };
  }

  get sparkScanDefaultsData() {
    return {
      "Feedback": {
        "success": "{\"type\":\"success\",\"barcodeFeedback\":{\"visualFeedbackColor\":\"#2EC1CEFF\",\"brush\":{\"fill\":{\"color\":\"ffffff00\"},\"stroke\":{\"color\":\"ffffffff\",\"width\":3}},\"feedback\":{\"sound\":{\"resource\":\"sc_spark_success_beep\"},\"vibration\":{\"type\":\"waveForm\",\"timings\":[20,40,100,60],\"amplitudes\":[0,255,0,255]}}}}",
        "error": "{\"type\":\"error\",\"barcodeFeedback\":{\"visualFeedbackColor\":\"#FA4446FF\",\"feedback\":{\"sound\":{\"resource\":\"sc_barcode_count_failure\"},\"vibration\":{\"type\":\"default\"}},\"message\":\"ignore\",\"resumeCapturingDelay\":1,\"brush\":{\"fill\":{\"color\":\"ffffff00\"},\"stroke\":{\"color\":\"ff4446ff\",\"width\":3}}}}"
      },
      "SparkScanSettings": {
        "codeDuplicateFilter": 1000,
        "singleBarcodeAutoDetection": false,
        "batterySaving": "off"
      },
      "SparkScanView": {
        "shouldShowScanAreaGuides": false,
        "brush": {
          "fillColor": "#FFFFFF00",
          "strokeColor": "#FFFFFFFF",
          "strokeWidth": 3
        },
        "torchButtonVisible": true,
        "scanningBehaviorButtonVisible": false,
        "handModeButtonVisible": false,
        "barcodeCountButtonVisible": false,
        "fastFindButtonVisible": false,
        "targetModeButtonVisible": true,
        "soundModeButtonVisible": false,
        "hapticModeButtonVisible": false,
        "stopCapturingText": null,
        "startCapturingText": null,
        "resumeCapturingText": null,
        "scanningCapturingText": null,
        "captureButtonActiveBackgroundColor": null,
        "captureButtonBackgroundColor": null,
        "captureButtonTintColor": null,
        "toolbarBackgroundColor": null,
        "toolbarIconActiveTintColor": null,
        "toolbarIconInactiveTintColor": null,
        "SparkScanViewSettings": "{\"triggerButtonCollapseTimeout\":-1,\"inactiveStateTimeout\":10,\"defaultTorchState\":\"off\",\"defaultScanningMode\":\"{\\\"type\\\":\\\"default\\\",\\\"settings\\\":{\\\"scanningBehavior\\\":\\\"single\\\",\\\"previewBehavior\\\":\\\"default\\\"}}\",\"defaultHandMode\":\"right\",\"holdToScanEnabled\":true,\"soundEnabled\":true,\"hapticEnabled\":true,\"hardwareTriggerEnabled\":false,\"visualFeedbackEnabled\":true,\"toastSettings\":\"{\\\"toastEnabled\\\":true}\",\"ignoreDragLimits\":true,\"zoomFactorIn\":2,\"zoomFactorOut\":1}",
        "zoomSwitchControlVisible": true,
        "targetModeHintText": null,
        "hardwareTriggerSupported": true,
        "toastEnabled": true,
        "toastBackgroundColor": null,
        "toastTextColor": null,
        "targetModeEnabledMessage": null,
        "targetModeDisabledMessage": null,
        "continuousModeEnabledMessage": null,
        "continuousModeDisabledMessage": null,
        "cameraTimeoutMessage": null,
        "previewSizeControlVisible": true
      }
    };
  }

  get barcodeFindDefaultsData() {
    return {
      "RecommendedCameraSettings": {
        "preferredResolution": "uhd4k",
        "zoomFactor": 1,
        "focusRange": "full",
        "focusGestureStrategy": "manualUntilCapture",
        "zoomGestureZoomFactor": 1,
        "shouldPreferSmoothAutoFocus": false,
        "properties": {
          "exposureTargetBias": -1,
          "scanPhaseNoSreTimeout": 3,
          "focusStrategy": "continuousUntilNoScan"
        }
      },
      "BarcodeFindFeedback": "{\"found\":{}}",
      "BarcodeFindView": {
        "shouldShowCarousel": true,
        "shouldShowFinishButton": true,
        "shouldShowHints": true,
        "shouldShowPauseButton": true,
        "shouldShowProgressBar": false,
        "shouldShowUserGuidanceView": true,
        "textForAllItemsFoundSuccessfullyHint": null,
        "textForCollapseCardsButton": null,
        "textForMoveCloserToBarcodesHint": null,
        "textForPointAtBarcodesToSearchHint": null,
        "textForTapShutterToPauseScreenHint": null,
        "textForTapShutterToResumeSearchHint": null
      },
      "BarcodeFindViewSettings": {
        "progressBarStartColor": "00000000",
        "progressBarFinishColor": "00000000",
      }
    };
  }
}

FactoryMaker.bindInstance('FeedbackProxy', new MockFeedbackProxy());

const defaults = new DefaultsData();

loadCoreDefaults(defaults.coreDefaults);
loadBarcodeDefaults(defaults.barcodeDefaultsData);
loadBarcodeCaptureDefaults(defaults.barcodeCaptureDefaultsData);
loadBarcodeSelectionDefaults(defaults.barcodeSelectionDefaults);
loadBarcodeBatchDefaults(defaults.barcodeBatchDefaultsData);
loadBarcodeCountDefaults(defaults.barcodeCountDefaultsData);
loadBarcodePickDefaults(defaults.barcodePickDefaultsData);
loadSparkScanDefaults(defaults.sparkScanDefaultsData);
loadBarcodeFindDefaults(defaults.barcodeFindDefaultsData);
