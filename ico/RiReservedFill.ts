import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ReservedFill icon from Remix Icon
 * @module
 */
export function RiReservedFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M13 15V19H16V21H8V19H11V15H4C3.44772 15 3 14.5523 3 14V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V14C21 14.5523 20.5523 15 20 15H13ZM8 8V10H16V8H8Z"}}]})(props);
}
export default RiReservedFill;
