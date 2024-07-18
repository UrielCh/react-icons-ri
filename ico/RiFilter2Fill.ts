import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Filter2Fill icon from Remix Icon
 * @module
 */
export function RiFilter2Fill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10 14L4 5V3H20V5L14 14V20L10 22V14Z"}}]})(props);
}
export default RiFilter2Fill;
