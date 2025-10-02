import { jest } from "@jest/globals";
import { DataCaptureContext, DataCaptureMode } from "scandit-datacapture-frameworks-core";

// @ts-ignore
export class MockDataCaptureContext implements DataCaptureContext {
  addMode = jest.fn((mode: DataCaptureMode) => {
    // @ts-ignore
    (mode as any as PrivateDataCaptureMode)._context = this;
  });
  setMode = jest.fn((mode: DataCaptureMode) => {
    // @ts-ignore
    (mode as any as PrivateDataCaptureMode)._context = this;
  });
}
