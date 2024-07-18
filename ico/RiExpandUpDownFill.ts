import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ExpandUpDownFill icon from Remix Icon
 * @module
 */
export function RiExpandUpDownFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z"}}]})(props);
}
export default RiExpandUpDownFill;
