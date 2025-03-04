import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * VercelFill icon from Remix Icon
 * @module
 */
export function RiVercelFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M23 21.6479H1L12 2.35205L23 21.6479Z"}}]})(props);
}
export default RiVercelFill;
