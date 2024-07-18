import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SubtractFill icon from Remix Icon
 * @module
 */
export function RiSubtractFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M19 11H5V13H19V11Z"}}]})(props);
}
export default RiSubtractFill;
