import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SkipDownFill icon from Remix Icon
 * @module
 */
export function RiSkipDownFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M18 17 6 17 6 15 18 15 18 17ZM12 13 18 7H6L12 13Z"}}]})(props);
}
export default RiSkipDownFill;
