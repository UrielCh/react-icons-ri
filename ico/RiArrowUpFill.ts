import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpFill icon from Remix Icon
 * @module
 */
export function RiArrowUpFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M13 12V20H11V12H4L12 4L20 12H13Z"}}]})(props);
}
export default RiArrowUpFill;
