import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BarChartFill icon from Remix Icon
 * @module
 */
export function RiBarChartFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z"}}]})(props);
}
export default RiBarChartFill;
