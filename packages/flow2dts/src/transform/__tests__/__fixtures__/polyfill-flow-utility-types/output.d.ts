import { $TEMPORARY$module$exports$assign } from "flow2dts-flow-types-polyfill"
import { $Diff, $ElementType, $Keys, $NonMaybeType, $PropertyType, $Shape, Class } from "utility-types"
declare type T = {
  foo: string
  bar: number
}
declare type A = [string, number]
declare type K = $Keys<T>
declare type D = $Diff<
  T,
  {
    bar: number
  }
>
declare type P = $PropertyType<T, "foo">
declare type E1 = $ElementType<T, "foo">
declare type E2 = $ElementType<A, "1">
declare type S = $Shape<T>
declare type NM = $NonMaybeType<number | null | undefined>
declare type C = Class<T>
declare type EX =
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  T
declare type OMF =
  /*[FLOW2DTS - Warning] This type was a $ObjMap type in the original Flow source.*/
  { [K in keyof T]: ReturnType<() => boolean> }
declare type _OMTWithSingle = () => boolean
declare type OMTWithSingle =
  /*[FLOW2DTS - Warning] This type was a $ObjMap type in the original Flow source.*/
  { [K in keyof T]: ReturnType<_OMTWithSingle> }
declare type _OMTWithUnion = () => true | 42 | "42" | any | void | unknown | null | undefined
declare type OMTWithUnion =
  /*[FLOW2DTS - Warning] This type was a $ObjMap type in the original Flow source.*/
  { [K in keyof T]: ReturnType<_OMTWithUnion> }
declare const $f2tExportDefault: $TEMPORARY$module$exports$assign<
  _OMTWithSingle,
  {
    foo: string
  }
>
export default $f2tExportDefault
