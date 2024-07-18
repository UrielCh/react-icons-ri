import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Table3 icon from Remix Icon
 * @module
 */
export function RiTable3(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 3C2.44772 3 2 3.44772 2 4V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V4C22 3.44772 21.5523 3 21 3H3ZM11 5V8H4V5H11ZM4 14V10H11V14H4ZM4 16H11V19H4V16ZM13 16H20V19H13V16ZM20 14H13V10H20V14ZM20 5V8H13V5H20Z"}}]})(props);
}
export default RiTable3;
