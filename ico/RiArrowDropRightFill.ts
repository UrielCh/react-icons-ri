import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDropRightFill icon from Remix Icon
 * @module
 */
export function RiArrowDropRightFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14 12L10 16V8L14 12Z"}}]})(props);
}
export default RiArrowDropRightFill;
