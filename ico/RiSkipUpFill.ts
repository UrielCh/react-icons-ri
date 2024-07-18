import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SkipUpFill icon from Remix Icon
 * @module
 */
export function RiSkipUpFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M6 7 18 7V9L6 9 6 7ZM12 11 6 17H18L12 11Z"}}]})(props);
}
export default RiSkipUpFill;
