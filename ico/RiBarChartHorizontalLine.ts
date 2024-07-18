import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BarChartHorizontalLine icon from Remix Icon
 * @module
 */
export function RiBarChartHorizontalLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 3V5H3V3H12ZM16 19V21H3V19H16ZM22 11V13H3V11H22Z"}}]})(props);
}
export default RiBarChartHorizontalLine;
