import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TextSpacing icon from Remix Icon
 * @module
 */
export function RiTextSpacing(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7 17H17V14.5L20.5 18L17 21.5V19H7V21.5L3.5 18L7 14.5V17ZM13 6V15H11V6H5V4H19V6H13Z"}}]})(props);
}
export default RiTextSpacing;
