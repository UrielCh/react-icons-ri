import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Layout4Line icon from Remix Icon
 * @module
 */
export function RiLayout4Line(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20ZM11 13H5V19H11V13ZM13 19H19V5H13V19ZM11 5H5V11H11V5Z"}}]})(props);
}
export default RiLayout4Line;
