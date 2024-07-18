import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDownFill icon from Remix Icon
 * @module
 */
export function RiArrowDownFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M13 12H20L12 20L4 12H11V4H13V12Z"}}]})(props);
}
export default RiArrowDownFill;
