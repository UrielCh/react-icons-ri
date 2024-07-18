import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlarmWarningLine icon from Remix Icon
 * @module
 */
export function RiAlarmWarningLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4.00001 20V14C4.00001 9.58172 7.58173 6 12 6C16.4183 6 20 9.58172 20 14V20H21V22H3.00001V20H4.00001ZM6.00001 20H18V14C18 10.6863 15.3137 8 12 8C8.6863 8 6.00001 10.6863 6.00001 14V20ZM11 2H13V5H11V2ZM19.7782 4.80761L21.1924 6.22183L19.0711 8.34315L17.6569 6.92893L19.7782 4.80761ZM2.80762 6.22183L4.22183 4.80761L6.34315 6.92893L4.92894 8.34315L2.80762 6.22183ZM7.00001 14C7.00001 11.2386 9.23858 9 12 9V11C10.3432 11 9.00001 12.3431 9.00001 14H7.00001Z"}}]})(props);
}
export default RiAlarmWarningLine;
