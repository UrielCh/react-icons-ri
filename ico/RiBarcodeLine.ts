import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BarcodeLine icon from Remix Icon
 * @module
 */
export function RiBarcodeLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M2 4H4V20H2V4ZM6 4H7V20H6V4ZM8 4H10V20H8V4ZM11 4H13V20H11V4ZM14 4H16V20H14V4ZM17 4H18V20H17V4ZM19 4H22V20H19V4Z"}}]})(props);
}
export default RiBarcodeLine;
