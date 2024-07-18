import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * WebcamLine icon from Remix Icon
 * @module
 */
export function RiWebcamLine(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M11 21V19.9291C7.60771 19.4439 5 16.5265 5 13V8C5 4.13401 8.13401 1 12 1C15.866 1 19 4.13401 19 8V13C19 16.5265 16.3923 19.4439 13 19.9291V21H17V23H7V21H11ZM12 3C9.23858 3 7 5.23858 7 8V13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13V8C17 5.23858 14.7614 3 12 3ZM12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9ZM12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8C15 9.65685 13.6569 11 12 11Z"}}]})(props);
}
export default RiWebcamLine;
