import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CropFill icon from Remix Icon
 * @module
 */
export function RiCropFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M19 17H22V19H19V22H17V19H6C5.44772 19 5 18.5523 5 18V7H2V5H5V2H7V5H18C18.5523 5 19 5.44772 19 6V17Z"}}]})(props);
}
export default RiCropFill;
