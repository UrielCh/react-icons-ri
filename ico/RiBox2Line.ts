import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Box2Line icon from Remix Icon
 * @module
 */
export function RiBox2Line(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM4.5 7.65311V7.65788L12 12V20.689L19.5 16.3469V7.65311L12 3.311L4.5 7.65311Z"}}]})(props);
}
export default RiBox2Line;
