import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UploadFill icon from Remix Icon
 * @module
 */
export function RiUploadFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 19H21V21H3V19ZM13 10V18H11V10H4L12 2L20 10H13Z"}}]})(props);
}
export default RiUploadFill;
