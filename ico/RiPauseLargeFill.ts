import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PauseLargeFill icon from Remix Icon
 * @module
 */
export function RiPauseLargeFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M6 3H8V21H6V3ZM16 3H18V21H16V3Z"}}]})(props);
}
export default RiPauseLargeFill;
