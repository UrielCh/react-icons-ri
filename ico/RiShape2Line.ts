import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shape2Line icon from Remix Icon
 * @module
 */
export function RiShape2Line(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 16H22V22H16V20H8V22H2V16H4V8H2V2H8V4H16V2H22V8H20V16ZM18 16V8H16V6H8V8H6V16H8V18H16V16H18ZM4 4V6H6V4H4ZM4 18V20H6V18H4ZM18 4V6H20V4H18ZM18 18V20H20V18H18Z"}}]})(props);
}
export default RiShape2Line;
