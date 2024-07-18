import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Separator icon from Remix Icon
 * @module
 */
export function RiSeparator(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M2 11H4V13H2V11ZM6 11H18V13H6V11ZM20 11H22V13H20V11Z"}}]})(props);
}
export default RiSeparator;
