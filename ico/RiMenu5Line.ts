import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Menu5Line icon from Remix Icon
 * @module
 */
export function RiMenu5Line(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z"}}]})(props);
}
export default RiMenu5Line;
