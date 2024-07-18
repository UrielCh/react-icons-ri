import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SkipRightFill icon from Remix Icon
 * @module
 */
export function RiSkipRightFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M17 6 17 18H15L15 6 17 6ZM13 12 7 18V6L13 12Z"}}]})(props);
}
export default RiSkipRightFill;
