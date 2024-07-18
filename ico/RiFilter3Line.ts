import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Filter3Line icon from Remix Icon
 * @module
 */
export function RiFilter3Line(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"}}]})(props);
}
export default RiFilter3Line;
