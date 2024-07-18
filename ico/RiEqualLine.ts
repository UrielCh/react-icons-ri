import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * EqualLine icon from Remix Icon
 * @module
 */
export function RiEqualLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M19 8H5V10H19V8ZM19 14H5V16H19V14Z"}}]})(props);
}
export default RiEqualLine;
