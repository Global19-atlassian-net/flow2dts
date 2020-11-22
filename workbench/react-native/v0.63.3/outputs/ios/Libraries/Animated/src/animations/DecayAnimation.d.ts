import { $TypeOf } from "flow2dts-flow-types-polyfill";
import $1 from "./Animation";
import AnimatedValue$f2tTypeof from "../nodes/AnimatedValue";
declare type AnimatedValue = $TypeOf<typeof AnimatedValue$f2tTypeof>;
import { AnimationConfig } from "./Animation";
import { EndCallback } from "./Animation";
declare type DecayAnimationConfig = AnimationConfig & {
  velocity: number | {
    x: number;
    y: number;
  };
  deceleration?: number;
};
declare type DecayAnimationConfigSingle = AnimationConfig & {
  velocity: number;
  deceleration?: number;
};
declare class DecayAnimation extends $1 {
  constructor(config: DecayAnimationConfigSingle);
  __getNativeAnimationConfig():
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    deceleration: number;
    iterations: number;
    type: string;
    velocity: number;
  };
  start(fromValue: number, onUpdate: (value: number) => void, onEnd: null | undefined | EndCallback, previousAnimation: null | undefined | $TypeOf<typeof $1>, animatedValue: AnimatedValue): void;
  onUpdate(): void;
  stop(): void;
}
export type { DecayAnimationConfig };
export type { DecayAnimationConfigSingle };
export default DecayAnimation;