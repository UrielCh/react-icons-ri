import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DeviceFill icon from Remix Icon
 * @module
 */
export function RiDeviceFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M19 6H11C10.4477 6 10 6.44772 10 7V20H4C3.44772 20 3 19.5523 3 19V3C3 2.44772 3.44772 2 4 2H18C18.5523 2 19 2.44772 19 3V6ZM13 8H21C21.5523 8 22 8.44772 22 9V21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21V9C12 8.44772 12.4477 8 13 8Z"}}]})(props);
}
export default RiDeviceFill;
