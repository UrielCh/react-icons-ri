import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * KeyboardLine icon from Remix Icon
 * @module
 */
export function RiKeyboardLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M3 17H21V19H3V17ZM3 11H6V14H3V11ZM8 11H11V14H8V11ZM3 5H6V8H3V5ZM13 5H16V8H13V5ZM18 5H21V8H18V5ZM13 11H16V14H13V11ZM18 11H21V14H18V11ZM8 5H11V8H8V5Z"}}]})(props);
}
export default RiKeyboardLine;
