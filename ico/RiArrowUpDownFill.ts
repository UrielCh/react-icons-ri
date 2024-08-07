import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpDownFill icon from Remix Icon
 * @module
 */
export function RiArrowUpDownFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 8H8.001L8 20H6V8H2L7 3L12 8ZM22 16L17 21L12 16H16V4H18V16H22Z"}}]})(props);
}
export default RiArrowUpDownFill;
