import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * LayoutRightFill icon from Remix Icon
 * @module
 */
export function RiLayoutRightFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H17V3H21ZM15 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H15V21Z"}}]})(props);
}
export default RiLayoutRightFill;
