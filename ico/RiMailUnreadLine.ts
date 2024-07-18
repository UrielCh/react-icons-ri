import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MailUnreadLine icon from Remix Icon
 * @module
 */
export function RiMailUnreadLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16.1 3C16.0344 3.32311 16 3.65753 16 4C16 4.34247 16.0344 4.67689 16.1 5H4.51146L12.0619 11.662L17.1098 7.14141C17.5363 7.66888 18.0679 8.10787 18.6728 8.42652L12.0718 14.338L4 7.21594V19H20V8.89998C20.3231 8.96557 20.6575 9 21 9C21.3425 9 21.6769 8.96557 22 8.89998V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H16.1ZM21 1C22.6569 1 24 2.34315 24 4C24 5.65685 22.6569 7 21 7C19.3431 7 18 5.65685 18 4C18 2.34315 19.3431 1 21 1Z"}}]})(props);
}
export default RiMailUnreadLine;
