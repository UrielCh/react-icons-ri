import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FilterFill icon from Remix Icon
 * @module
 */
export function RiFilterFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M21 4V6H20L14 15V22H10V15L4 6H3V4H21Z"}}]})(props);
}
export default RiFilterFill;
