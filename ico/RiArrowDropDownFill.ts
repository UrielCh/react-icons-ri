import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDropDownFill icon from Remix Icon
 * @module
 */
export function RiArrowDropDownFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 14L8 10H16L12 14Z"}}]})(props);
}
export default RiArrowDropDownFill;
