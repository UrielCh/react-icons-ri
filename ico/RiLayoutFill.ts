import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LayoutFill icon from Remix Icon
 * @module
 */
export function RiLayoutFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16 21V10H21V20C21 20.5523 20.5523 21 20 21H16ZM14 21H4C3.44772 21 3 20.5523 3 20V10H14V21ZM21 8H3V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V8Z"}}]})(props);
}
export default RiLayoutFill;
