import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * VuejsFill icon from Remix Icon
 * @module
 */
export function RiVuejsFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1.00098 3H5.00098L12.001 15L19.001 3H23.001L12.001 22L1.00098 3ZM9.66764 3L12.001 7L14.3343 3H18.3694L12.001 14L5.63256 3H9.66764Z"}}]})(props);
}
export default RiVuejsFill;
