import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Layout4Fill icon from Remix Icon
 * @module
 */
export function RiLayout4Fill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M11 13V21H4C3.44772 21 3 20.5523 3 20V13H11ZM13 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H13V3ZM3 4C3 3.44772 3.44772 3 4 3H11V11H3V4Z"}}]})(props);
}
export default RiLayout4Fill;
