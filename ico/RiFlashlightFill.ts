import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FlashlightFill icon from Remix Icon
 * @module
 */
export function RiFlashlightFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M13 10H20L11 23V14H4L13 1V10Z"}}]})(props);
}
export default RiFlashlightFill;
