import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GalleryFill icon from Remix Icon
 * @module
 */
export function RiGalleryFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M17.409 19C16.633 16.6012 15.1323 15.1147 13.1434 13.3979C15.0238 11.8971 17.4071 11 20 11V3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934C2 3.44476 2.45531 3 2.9918 3H6V1H8V5H4V12C9.22015 12 13.6618 14.4616 15.3127 19H17.409ZM18 1V5H10V3H16V1H18ZM16.5 10C15.6716 10 15 9.32843 15 8.5C15 7.67157 15.6716 7 16.5 7C17.3284 7 18 7.67157 18 8.5C18 9.32843 17.3284 10 16.5 10Z"}}]})(props);
}
export default RiGalleryFill;
