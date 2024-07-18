import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UnsplashLine icon from Remix Icon
 * @module
 */
export function RiUnsplashLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.001 10V14H14.0002L14.0012 10H21.0012L21.0002 14L21.001 21H3.00098V10H10.001ZM8.00098 12H5.00098V19H19.001V16L19.0007 12H16.0007L15.9997 16H8.00098V12ZM16.001 3V9H8.00098V3H16.001ZM14.001 5H10.001V7H14.001V5Z"}}]})(props);
}
export default RiUnsplashLine;
