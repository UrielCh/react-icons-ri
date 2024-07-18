import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowLeftFill icon from Remix Icon
 * @module
 */
export function RiArrowLeftFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 13V20L4 12L12 4V11H20V13H12Z"}}]})(props);
}
export default RiArrowLeftFill;
