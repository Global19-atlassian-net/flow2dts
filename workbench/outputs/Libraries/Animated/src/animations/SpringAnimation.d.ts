// @flow
declare var AnimatedValue: typeof $2;
declare const $2;
declare var AnimatedValueXY: typeof $3;
declare const $3;
declare var AnimatedInterpolation: typeof $1;
declare const $1;
declare var Animation: typeof $4;
declare const $4;
import { AnimationConfig } from "./Animation";
import { EndCallback } from "./Animation";
declare type SpringAnimationConfig = AnimationConfig & {
  toValue: number | AnimatedValue | {
    x: number;
    y: number;
  } | AnimatedValueXY | AnimatedInterpolation;
  overshootClamping?: boolean;
  restDisplacementThreshold?: number;
  restSpeedThreshold?: number;
  velocity?: number | {
    x: number;
    y: number;
  };
  bounciness?: number;
  speed?: number;
  tension?: number;
  friction?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
  delay?: number;
};
declare type SpringAnimationConfigSingle = AnimationConfig & {
  toValue: number | AnimatedValue | AnimatedInterpolation;
  overshootClamping?: boolean;
  restDisplacementThreshold?: number;
  restSpeedThreshold?: number;
  velocity?: number;
  bounciness?: number;
  speed?: number;
  tension?: number;
  friction?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
  delay?: number;
};
declare class SpringAnimation extends $5 {
  constructor: (config: SpringAnimationConfigSingle) => void;
  __getNativeAnimationConfig: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    damping: number;
    initialVelocity: number;
    iterations: number;
    mass: number;
    overshootClamping: boolean;
    restDisplacementThreshold: number;
    restSpeedThreshold: number;
    stiffness: number;
    toValue: any;
    type: string;
  };
  start: (fromValue: number, onUpdate: (value: number) => void, onEnd: null | undefined | EndCallback, previousAnimation: null | undefined | Animation, animatedValue: AnimatedValue) => void;
  getInternalState: () => Object;

  /**
   * This spring model is based off of a damped harmonic oscillator
   * (https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator).
   *
   * We use the closed form of the second order differential equation:
   *
   * x'' + (2ζ⍵_0)x' + ⍵^2x = 0
   *
   * where
   *    ⍵_0 = √(k / m) (undamped angular frequency of the oscillator),
   *    ζ = c / 2√mk (damping ratio),
   *    c = damping constant
   *    k = stiffness
   *    m = mass
   *
   * The derivation of the closed form is described in detail here:
   * http://planetmath.org/sites/default/files/texpdf/39745.pdf
   *
   * This algorithm happens to match the algorithm used by CASpringAnimation,
   * a QuartzCore (iOS) API that creates spring animations.
   */
  onUpdate: () => void;
  stop: () => void;
}
declare var $5: typeof Animation;
export type { SpringAnimationConfig };
export type { SpringAnimationConfigSingle };
declare const $f2tExportDefault: typeof SpringAnimation;
export default $f2tExportDefault;