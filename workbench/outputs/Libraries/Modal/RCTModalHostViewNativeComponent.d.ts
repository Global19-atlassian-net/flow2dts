// @flow
import { HostComponent } from "../Renderer/shims/ReactNativeTypes";
import { WithDefault } from "../Types/CodegenTypes";
import { DirectEventHandler } from "../Types/CodegenTypes";
import { Int32 } from "../Types/CodegenTypes";
import { ViewProps } from "../Components/View/ViewPropTypes";
declare type OrientationChangeEvent = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  orientation: "portrait" | "landscape";
}>;
declare type NativeProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  /**
  * The `animationType` prop controls how the modal animates.
  *
  * See https://reactnative.dev/docs/modal.html#animationtype
  */
  animationType?: WithDefault;

  /**
  * The `presentationStyle` prop controls how the modal appears.
  *
  * See https://reactnative.dev/docs/modal.html#presentationstyle
  */
  presentationStyle?: WithDefault;

  /**
  * The `transparent` prop determines whether your modal will fill the
  * entire view.
  *
  * See https://reactnative.dev/docs/modal.html#transparent
  */
  transparent?: WithDefault;

  /**
  * The `statusBarTranslucent` prop determines whether your modal should go under
  * the system statusbar.
  *
  * See https://reactnative.dev/docs/modal.html#statusBarTranslucent
  */
  statusBarTranslucent?: WithDefault;

  /**
  * The `hardwareAccelerated` prop controls whether to force hardware
  * acceleration for the underlying window.
  *
  * See https://reactnative.dev/docs/modal.html#hardwareaccelerated
  */
  hardwareAccelerated?: WithDefault;

  /**
  * The `onRequestClose` callback is called when the user taps the hardware
  * back button on Android or the menu button on Apple TV.
  *
  * This is required on Apple TV and Android.
  *
  * See https://reactnative.dev/docs/modal.html#onrequestclose
  */
  onRequestClose?: null | undefined | DirectEventHandler;

  /**
  * The `onShow` prop allows passing a function that will be called once the
  * modal has been shown.
  *
  * See https://reactnative.dev/docs/modal.html#onshow
  */
  onShow?: null | undefined | DirectEventHandler;

  /**
  * Deprecated. Use the `animationType` prop instead.
  */
  animated?: WithDefault;

  /**
  * The `supportedOrientations` prop allows the modal to be rotated to any of the specified orientations.
  *
  * See https://reactnative.dev/docs/modal.html#supportedorientations
  */
  supportedOrientations?: WithDefault;

  /**
  * The `onOrientationChange` callback is called when the orientation changes while the modal is being displayed.
  *
  * See https://reactnative.dev/docs/modal.html#onorientationchange
  */
  onOrientationChange?: null | undefined | DirectEventHandler;

  /**
  * The `identifier` is the unique number for identifying Modal components.
  */
  identifier?: WithDefault;
}>;
declare export default HostComponent;