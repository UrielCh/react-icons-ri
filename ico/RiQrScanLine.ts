import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * QrScanLine icon from Remix Icon
 * @module
 */
export function RiQrScanLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M21 16V21H3V16H5V19H19V16H21ZM3 11H21V13H3V11ZM21 8H19V5H5V8H3V3H21V8Z"}}]})(props);
}
export default RiQrScanLine;
