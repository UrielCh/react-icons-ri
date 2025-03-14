import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpWideLine icon from Remix Icon
 * @module
 */
export function RiArrowUpWideLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 8.36853L20.9679 13.1162L20.0321 14.8838L12 10.6315L3.9679 14.8838L3.03212 13.1162L12 8.36853Z"}}]})(props);
}
export default RiArrowUpWideLine;
