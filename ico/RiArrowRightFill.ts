import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRightFill icon from Remix Icon
 * @module
 */
export function RiArrowRightFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 13H4V11H12V4L20 12L12 20V13Z"}}]})(props);
}
export default RiArrowRightFill;
