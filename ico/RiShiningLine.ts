import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ShiningLine icon from Remix Icon
 * @module
 */
export function RiShiningLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 11C6.52285 11 11 6.52285 11 1H13C13 6.52285 17.4772 11 23 11V13C17.4772 13 13 17.4772 13 23H11C11 17.4772 6.52285 13 1 13V11ZM5.80342 12C8.56895 13.2093 10.7907 15.431 12 18.1966C13.2093 15.431 15.431 13.2093 18.1966 12C15.431 10.7907 13.2093 8.56895 12 5.80342C10.7907 8.56895 8.56895 10.7907 5.80342 12Z"}}]})(props);
}
export default RiShiningLine;
