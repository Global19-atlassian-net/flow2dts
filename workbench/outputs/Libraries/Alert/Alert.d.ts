// @flow
declare type AlertType = "default" | "plain-text" | "secure-text" | "login-password";
declare type AlertButtonStyle = "default" | "cancel" | "destructive";
declare type Buttons = {
  text?: string;
  onPress?: null | undefined | Function;
  style?: AlertButtonStyle;
}[];
declare type Options = {
  cancelable?: null | undefined | boolean;
  onDismiss?: null | undefined | () => void;
};
declare class Alert {
  alert: (title: null | undefined | string, message?: null | undefined | string, buttons?: Buttons, options?: Options) => void;
  prompt: (title: null | undefined | string, message?: null | undefined | string, callbackOrButtons?: null | undefined | ((text: string) => void | Buttons), type?: null | undefined | AlertType, defaultValue?: string, keyboardType?: string) => void;
}
export type { AlertType };
export type { AlertButtonStyle };
export type { Buttons };
declare const $f2tExportDefault: typeof Alert;
export default $f2tExportDefault;