import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TableAltLine icon from Remix Icon
 * @module
 */
export function RiTableAltLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 16H4V19H20V16ZM8 5H4V14H8V5ZM14 5H10V14H14V5ZM20 5H16V14H20V5Z"}}]})(props);
}
export default RiTableAltLine;
