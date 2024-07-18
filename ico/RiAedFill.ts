import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AedFill icon from Remix Icon
 * @module
 */
export function RiAedFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6ZM16 11L11 18V13H8L13 6V11H16Z"}}]})(props);
}
export default RiAedFill;
