import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Menu4Fill icon from Remix Icon
 * @module
 */
export function RiMenu4Fill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"}}]})(props);
}
export default RiMenu4Fill;
