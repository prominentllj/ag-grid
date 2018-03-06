// Type definitions for ag-grid v17.0.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { ColDef, ColGroupDef } from "../entities/colDef";
import { ColumnGroupChild } from "../entities/columnGroupChild";
import { OriginalColumnGroup } from "../entities/originalColumnGroup";
import { ColumnGroup } from "../entities/columnGroup";
import { Column } from "../entities/column";
import { ColumnEventType } from "../events";
export declare class ColumnApi {
    private columnController;
    sizeColumnsToFit(gridWidth: any, source: ColumnEventType): void;
    setColumnGroupOpened(group: OriginalColumnGroup | string, newValue: boolean, source: ColumnEventType): void;
    getColumnGroup(name: string, instanceId?: number): ColumnGroup;
    getOriginalColumnGroup(name: string): OriginalColumnGroup;
    getDisplayNameForColumn(column: Column, location: string): string;
    getDisplayNameForColumnGroup(columnGroup: ColumnGroup, location: string): string;
    getColumn(key: any): Column;
    setColumnState(columnState: any, source: ColumnEventType): boolean;
    getColumnState(): any[];
    resetColumnState(source: ColumnEventType): void;
    getColumnGroupState(): {
        groupId: string;
        open: boolean;
    }[];
    setColumnGroupState(stateItems: ({
        groupId: string;
        open: boolean;
    })[], source: ColumnEventType): void;
    resetColumnGroupState(source: ColumnEventType): void;
    isPinning(): boolean;
    isPinningLeft(): boolean;
    isPinningRight(): boolean;
    getDisplayedColAfter(col: Column): Column;
    getDisplayedColBefore(col: Column): Column;
    setColumnVisible(key: string | Column, visible: boolean, source: ColumnEventType): void;
    setColumnsVisible(keys: (string | Column)[], visible: boolean, source: ColumnEventType): void;
    setColumnPinned(key: string | Column, pinned: string, source: ColumnEventType): void;
    setColumnsPinned(keys: (string | Column)[], pinned: string, source: ColumnEventType): void;
    getAllColumns(): Column[];
    getAllGridColumns(): Column[];
    getDisplayedLeftColumns(): Column[];
    getDisplayedCenterColumns(): Column[];
    getDisplayedRightColumns(): Column[];
    getAllDisplayedColumns(): Column[];
    getAllDisplayedVirtualColumns(): Column[];
    moveColumn(key: string | Column, toIndex: number, source: ColumnEventType): void;
    moveColumnByIndex(fromIndex: number, toIndex: number, source: ColumnEventType): void;
    moveColumns(columnsToMoveKeys: (string | Column)[], toIndex: number, source: ColumnEventType): void;
    moveRowGroupColumn(fromIndex: number, toIndex: number): void;
    setColumnAggFunc(column: Column, aggFunc: string): void;
    setColumnWidth(key: string | Column, newWidth: number, finished?: boolean): void;
    setPivotMode(pivotMode: boolean, source?: ColumnEventType): void;
    isPivotMode(): boolean;
    getSecondaryPivotColumn(pivotKeys: string[], valueColKey: string | Column): Column;
    setValueColumns(colKeys: (string | Column)[], source: ColumnEventType): void;
    getValueColumns(): Column[];
    removeValueColumn(colKey: (string | Column), source: ColumnEventType): void;
    removeValueColumns(colKeys: (string | Column)[], source: ColumnEventType): void;
    addValueColumn(colKey: (string | Column), source: ColumnEventType): void;
    addValueColumns(colKeys: (string | Column)[], source: ColumnEventType): void;
    setRowGroupColumns(colKeys: (string | Column)[], source: ColumnEventType): void;
    removeRowGroupColumn(colKey: string | Column, source: ColumnEventType): void;
    removeRowGroupColumns(colKeys: (string | Column)[], source: ColumnEventType): void;
    addRowGroupColumn(colKey: string | Column, source: ColumnEventType): void;
    addRowGroupColumns(colKeys: (string | Column)[], source: ColumnEventType): void;
    getRowGroupColumns(): Column[];
    setPivotColumns(colKeys: (string | Column)[], source: ColumnEventType): void;
    removePivotColumn(colKey: string | Column, source: ColumnEventType): void;
    removePivotColumns(colKeys: (string | Column)[], source: ColumnEventType): void;
    addPivotColumn(colKey: string | Column, source: ColumnEventType): void;
    addPivotColumns(colKeys: (string | Column)[], source: ColumnEventType): void;
    getPivotColumns(): Column[];
    getLeftDisplayedColumnGroups(): ColumnGroupChild[];
    getCenterDisplayedColumnGroups(): ColumnGroupChild[];
    getRightDisplayedColumnGroups(): ColumnGroupChild[];
    getAllDisplayedColumnGroups(): ColumnGroupChild[];
    autoSizeColumn(key: string | Column, source: ColumnEventType): void;
    autoSizeColumns(keys: (string | Column)[], source: ColumnEventType): void;
    autoSizeAllColumns(source: ColumnEventType): void;
    setSecondaryColumns(colDefs: (ColDef | ColGroupDef)[], source: ColumnEventType): void;
    columnGroupOpened(group: OriginalColumnGroup | string, newValue: boolean, source: ColumnEventType): void;
    hideColumns(colIds: any, hide: any, source: ColumnEventType): void;
    hideColumn(colId: any, hide: any, source: ColumnEventType): void;
    setState(columnState: any, source: ColumnEventType): boolean;
    getState(): any[];
    resetState(source: ColumnEventType): void;
    getAggregationColumns(): Column[];
    removeAggregationColumn(colKey: (string | Column), source: ColumnEventType): void;
    removeAggregationColumns(colKeys: (string | Column)[], source: ColumnEventType): void;
    addAggregationColumn(colKey: (string | Column), source: ColumnEventType): void;
    addAggregationColumns(colKeys: (string | Column)[], source: ColumnEventType): void;
    setColumnAggFunction(column: Column, aggFunc: string, source: ColumnEventType): void;
    getDisplayNameForCol(column: any): string;
}