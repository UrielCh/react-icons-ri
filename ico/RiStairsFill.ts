import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StairsFill icon from Remix Icon
 * @module
 */
export function RiStairsFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M15 3H21V21H3V15H7V11H11V7H15V3Z"}}]})(props);
}
export default RiStairsFill;
