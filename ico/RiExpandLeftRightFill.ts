import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ExpandLeftRightFill icon from Remix Icon
 * @module
 */
export function RiExpandLeftRightFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 6 3 12 9 18V6ZM15 18 21 12 15 6V18Z"}}]})(props);
}
export default RiExpandLeftRightFill;
