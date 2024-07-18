import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SubtractLine icon from Remix Icon
 * @module
 */
export function RiSubtractLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M5 11V13H19V11H5Z"}}]})(props);
}
export default RiSubtractLine;
