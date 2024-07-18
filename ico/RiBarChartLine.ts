import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BarChartLine icon from Remix Icon
 * @module
 */
export function RiBarChartLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 12H5V21H3V12ZM19 8H21V21H19V8ZM11 2H13V21H11V2Z"}}]})(props);
}
export default RiBarChartLine;
