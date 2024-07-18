import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDropLeftFill icon from Remix Icon
 * @module
 */
export function RiArrowDropLeftFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 12L13 8V16L9 12Z"}}]})(props);
}
export default RiArrowDropLeftFill;
