import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CrossFill icon from Remix Icon
 * @module
 */
export function RiCrossFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z"}}]})(props);
}
export default RiCrossFill;
