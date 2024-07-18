import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AddLine icon from Remix Icon
 * @module
 */
export function RiAddLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"}}]})(props);
}
export default RiAddLine;
