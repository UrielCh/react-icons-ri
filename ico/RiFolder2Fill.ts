import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Folder2Fill icon from Remix Icon
 * @module
 */
export function RiFolder2Fill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M22 11V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V11H22ZM22 9H2V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V9Z"}}]})(props);
}
export default RiFolder2Fill;
