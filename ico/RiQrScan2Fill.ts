import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * QrScan2Fill icon from Remix Icon
 * @module
 */
export function RiQrScan2Fill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M15 3H21V9H15V3ZM9 3V9H3V3H9ZM15 21V15H21V21H15ZM9 21H3V15H9V21ZM3 11H21V13H3V11Z"}}]})(props);
}
export default RiQrScan2Fill;
