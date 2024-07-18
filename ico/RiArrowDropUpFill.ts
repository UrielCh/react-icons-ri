import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDropUpFill icon from Remix Icon
 * @module
 */
export function RiArrowDropUpFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 10L16 14H8L12 10Z"}}]})(props);
}
export default RiArrowDropUpFill;
