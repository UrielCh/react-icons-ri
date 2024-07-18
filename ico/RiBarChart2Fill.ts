import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BarChart2Fill icon from Remix Icon
 * @module
 */
export function RiBarChart2Fill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z"}}]})(props);
}
export default RiBarChart2Fill;
