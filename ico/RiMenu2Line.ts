import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Menu2Line icon from Remix Icon
 * @module
 */
export function RiMenu2Line(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"}}]})(props);
}
export default RiMenu2Line;
