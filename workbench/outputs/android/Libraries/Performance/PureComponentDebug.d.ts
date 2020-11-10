import { $TypeOf } from "flow2dts-flow-types-polyfill";
import $2 from "react";

/*[FLOW2DTS - Warning] This type alias was opaque in the original Flow source.*/
declare type DoNotCommitUsageOfPureComponentDebug = {};
declare class PureComponentDebug<P extends DoNotCommitUsageOfPureComponentDebug, S extends null | undefined | {} = void> extends $2.Component<P, S> {
  shouldComponentUpdate: (nextProps: P, nextState: S) => boolean;
}
declare const $f2tExportDefault: $TypeOf<typeof PureComponentDebug>;
export default $f2tExportDefault;