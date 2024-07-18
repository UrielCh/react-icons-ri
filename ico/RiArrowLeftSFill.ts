import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLeftSFill icon from Remix Icon
 * @module
 */
export function RiArrowLeftSFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M8 12L14 6V18L8 12Z"}}]})(props);
}
export default RiArrowLeftSFill;
