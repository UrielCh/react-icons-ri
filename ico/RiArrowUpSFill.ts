import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpSFill icon from Remix Icon
 * @module
 */
export function RiArrowUpSFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 8L18 14H6L12 8Z"}}]})(props);
}
export default RiArrowUpSFill;
