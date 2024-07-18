import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HexagonFill icon from Remix Icon
 * @module
 */
export function RiHexagonFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5Z"}}]})(props);
}
export default RiHexagonFill;
