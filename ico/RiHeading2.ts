import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Heading2 icon from Remix Icon
 * @module
 */
export function RiHeading2(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M17 11V4H19V21H17V13H7V21H5V4H7V11H17Z"}}]})(props);
}
export default RiHeading2;
