import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DownloadFill icon from Remix Icon
 * @module
 */
export function RiDownloadFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"}}]})(props);
}
export default RiDownloadFill;
