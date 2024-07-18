import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Number1 icon from Remix Icon
 * @module
 */
export function RiNumber1(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M14 1.5V22H12V3.704L7.5 4.91V2.839L12.5 1.5H14Z"}}]})(props);
}
export default RiNumber1;
