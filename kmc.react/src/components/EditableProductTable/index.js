import React from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import '../../libs/css/react-bootstrap-table-all.min.css'

import "./index.css";

function onBeforeSaveCell(row, cellName, cellValue) {
    // You can do any validation on here for editing value,
    // return false for reject the editing
    return true;
}

function onAfterSaveCell(row, cellName, cellValue) {
}

export default function EditableProductTable({
    isLoading,
    className = "",
    products = [],
    ...props
}) {
    const cellEditProp = {
        mode: 'dbclick',
        blurToSave: true,
        beforeSaveCell: onBeforeSaveCell
    };

    const options = {
        page: 1,
        sizePerPageList: [
            {text: '1', value: 1},
            {text: '50', value: 50},
            {text: '100', value: 100}
        ],
        sizePerPage: 1,
        pageStartIndex: 1,
        paginationSize: 5,
        prePage: '<',
        nextPage: '>',
        firstPage: '<<',
        lastPage: '>>',
        paginationPosition: 'bottom',
        defaultSortName: 'productId',
        defaultSortOrder: 'asc'
    };

    return (
        <BootstrapTable
            data={products}
            cellEdit={cellEditProp}
            pagination={true}
            options={options}
        >
            <TableHeaderColumn
                dataField='productId'
                isKey
                width='13%'
                dataSort
                filter={{
                    type: 'TextFilter',
                    placeholder: 'Nhập mã'
                }}
            >
                Mã Hàng
            </TableHeaderColumn>
            <TableHeaderColumn
                dataField='type'
                width='16%'
                dataSort
                filter={{
                    type: 'RegexFilter',
                    placeholder: 'Nhập sản phẩm'
                }}
            >
                Loại sản phẩm
            </TableHeaderColumn>
            <TableHeaderColumn
                dataField='name'
                dataSort
                filter={{
                    type: 'RegexFilter',
                    placeholder: 'Nhập tên hàng'
                }}
            >
                Tên hàng
            </TableHeaderColumn>
            <TableHeaderColumn
                dataField='goldWeight'
                width='13%'
                dataSort
                filter={{
                    type: 'RegexFilter',
                    placeholder: '...'
                }}
            >
                TL vàng
            </TableHeaderColumn>
            <TableHeaderColumn
                dataField='beadWeight'
                width='13%'
                dataSort
                filter={{
                    type: 'RegexFilter',
                    placeholder: '...'
                }}
            >
                TL hột
            </TableHeaderColumn>
            <TableHeaderColumn
                dataField='wage'
                width='13%'
                dataSort
                filter={{
                    type: 'RegexFilter',
                    placeholder: '...'
                }}
            >
                Tiền công
            </TableHeaderColumn>
            <TableHeaderColumn
                width='5%'
                dataSort
            >
                Edit
            </TableHeaderColumn>
        </BootstrapTable>
    )
}
