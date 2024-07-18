import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRightSFill icon from Remix Icon
 * @module
 */
export function RiArrowRightSFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16 12L10 18V6L16 12Z"}}]})(props);
}
export default RiArrowRightSFill;
