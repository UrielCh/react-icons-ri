import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PauseFill icon from Remix Icon
 * @module
 */
export function RiPauseFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M6 5H8V19H6V5ZM16 5H18V19H16V5Z"}}]})(props);
}
export default RiPauseFill;
