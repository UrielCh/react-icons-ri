import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LayoutVerticalLine icon from Remix Icon
 * @module
 */
export function RiLayoutVerticalLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M5 19H19V5H5V19ZM3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4ZM15 7V17H17V7H15ZM11 7L11 17H13V7H11ZM7 17L7 7L9 7L9 17H7Z"}}]})(props);
}
export default RiLayoutVerticalLine;
