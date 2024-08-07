import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TornadoLine icon from Remix Icon
 * @module
 */
export function RiTornadoLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M2 3H22V5H2V3ZM4 7H20V9H4V7ZM8 11H22V13H8V11ZM10 15H18V17H10V15ZM8 19H14V21H8V19Z"}}]})(props);
}
export default RiTornadoLine;
