import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FontMono icon from Remix Icon
 * @module
 */
export function RiFontMono(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M6 4H19V6H8V12H18V14H8V21H6V4Z"}}]})(props);
}
export default RiFontMono;
