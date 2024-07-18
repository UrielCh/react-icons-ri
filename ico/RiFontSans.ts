import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FontSans icon from Remix Icon
 * @module
 */
export function RiFontSans(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7 4H19V6H10V12H18V14H10V21H7V4Z"}}]})(props);
}
export default RiFontSans;
