import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SkipLeftFill icon from Remix Icon
 * @module
 */
export function RiSkipLeftFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7 18V6H9V18H7ZM11 12 17 6V18L11 12Z"}}]})(props);
}
export default RiSkipLeftFill;
