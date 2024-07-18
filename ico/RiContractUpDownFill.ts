import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ContractUpDownFill icon from Remix Icon
 * @module
 */
export function RiContractUpDownFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M18 5 12 11 6 5H18ZM18 19 12 13 6 19H18Z"}}]})(props);
}
export default RiContractUpDownFill;
