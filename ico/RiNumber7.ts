import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Number7 icon from Remix Icon
 * @module
 */
export function RiNumber7(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M19 2V3.5L10.763 21.9995H8.574L16.587 4H6V2H19Z"}}]})(props);
}
export default RiNumber7;
