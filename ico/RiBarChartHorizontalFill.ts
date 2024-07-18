import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BarChartHorizontalFill icon from Remix Icon
 * @module
 */
export function RiBarChartHorizontalFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 3V7H3V3H12ZM16 17V21H3V17H16ZM22 10V14H3V10H22Z"}}]})(props);
}
export default RiBarChartHorizontalFill;
