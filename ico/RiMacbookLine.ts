import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MacbookLine icon from Remix Icon
 * @module
 */
export function RiMacbookLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4 5V16H20V5H4ZM2 4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V18H2V4.00748ZM1 19H23V21H1V19Z"}}]})(props);
}
export default RiMacbookLine;
