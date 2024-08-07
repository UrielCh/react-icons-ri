import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CropLine icon from Remix Icon
 * @module
 */
export function RiCropLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M15 17V19H6C5.44772 19 5 18.5523 5 18V7H2V5H5V2H7V17H15ZM17 22V7H9V5H18C18.5523 5 19 5.44772 19 6V17H22V19H19V22H17Z"}}]})(props);
}
export default RiCropLine;
