// @flow
declare var NativeEventEmitter: typeof $1;
declare const $1;
import { NativeResponseType } from "./XMLHttpRequest";
import { RequestBody } from "./convertRequestBody";
declare class RCTNetworking extends $2 {
  constructor: () => void;
  sendRequest: (method: string, trackingName: string, url: string, headers: Object, data: RequestBody, responseType: NativeResponseType, incrementalUpdates: boolean, timeout: number, callback: (requestId: number) => void, withCredentials: boolean) => void;
  abortRequest: (requestId: number) => void;
  clearCookies: (callback: (result: boolean) => void) => void;
}
declare var $2: typeof NativeEventEmitter;
declare const $f2tExportDefault: RCTNetworking;
export default $f2tExportDefault;