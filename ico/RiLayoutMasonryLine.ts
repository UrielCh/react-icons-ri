import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LayoutMasonryLine icon from Remix Icon
 * @module
 */
export function RiLayoutMasonryLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M22 20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20ZM11 15H4V19H11V15ZM20 11H13V19H20V11ZM11 5H4V13H11V5ZM20 5H13V9H20V5Z"}}]})(props);
}
export default RiLayoutMasonryLine;
