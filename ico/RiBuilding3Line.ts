import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Building3Line icon from Remix Icon
 * @module
 */
export function RiBuilding3Line(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10 10.1111V1L21 7V21H3V7L10 10.1111ZM12 4.36908V13.1886L5 10.0775V19H19V8.18727L12 4.36908Z"}}]})(props);
}
export default RiBuilding3Line;
