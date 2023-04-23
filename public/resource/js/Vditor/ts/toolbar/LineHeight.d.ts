/// <reference types="./types" />
import { MenuItem } from "./MenuItem";
/**
 * 设置字体大小
 * @param event
 * @param vditor
 */
export declare class LineHeight extends MenuItem {
    element: HTMLElement;
    constructor(vditor: IVditor, menuItem: IMenuItem);
    _bindEvent(vditor: IVditor, panelElement: HTMLElement): void;
}
