import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pushpin2Fill icon from Remix Icon
 * @module
 */
export function RiPushpin2Fill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M18 3V5H17V11L19 14V16H13V23H11V16H5V14L7 11V5H6V3H18Z"}}]})(props);
}
export default RiPushpin2Fill;
