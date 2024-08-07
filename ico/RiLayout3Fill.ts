import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Layout3Fill icon from Remix Icon
 * @module
 */
export function RiLayout3Fill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M8 10V21H4C3.44772 21 3 20.5523 3 20V10H8ZM21 10V20C21 20.5523 20.5523 21 20 21H10V10H21ZM20 3C20.5523 3 21 3.44772 21 4V8H3V4C3 3.44772 3.44772 3 4 3H20Z"}}]})(props);
}
export default RiLayout3Fill;
