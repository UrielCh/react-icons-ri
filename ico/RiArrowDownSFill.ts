import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDownSFill icon from Remix Icon
 * @module
 */
export function RiArrowDownSFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 16L6 10H18L12 16Z"}}]})(props);
}
export default RiArrowDownSFill;
