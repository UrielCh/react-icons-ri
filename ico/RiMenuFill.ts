import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MenuFill icon from Remix Icon
 * @module
 */
export function RiMenuFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"}}]})(props);
}
export default RiMenuFill;
