import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UnsplashFill icon from Remix Icon
 * @module
 */
export function RiUnsplashFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M8.50098 11V16H15.501V11H21.001V21H3.00098V11H8.50098ZM15.501 3V8H8.50098V3H15.501Z"}}]})(props);
}
export default RiUnsplashFill;
