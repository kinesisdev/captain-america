import React from "react";
import { Table } from "react-bootstrap";
import "./ProductTable.css";

export default function PrintableProductTable({
    className = "",
    products = [],
    ...props
}) {

    function renderProductRows(products) {
        return [{}].concat(products).map((product, i) => (
            <tr>
                <td> {i + 1} </td>
                <td> {product.productId || ""} </td>
                <td> {product.type || ""} </td>
                <td> {product.name || ""} </td>
                <td> {product.goldWeight || 0} </td>
                <td> {product.beadWeight || 0} </td>
                <td> {product.wage || 0} </td>
                <td> {product.goldPrice || 0} </td>
                <td> {product.price || 0} </td>
            </tr>
        ));
    }

    return (
        <Table striped bordered condensed hover responsive>
            <thead>
                <tr>
                    <th> STT </th>
                    <th> Mã Hàng </th>
                    <th> Loại sản phẩm </th>
                    <th> Tên hàng </th>
                    <th> TL vàng </th>
                    <th> TL hột </th>
                    <th> Tiền công </th>
                    <th> Đơn giá </th>
                    <th> Thành tiền </th>
                </tr>
            </thead>
            <tbody>
                {renderProductRows(products)}
            </tbody>
        </Table>
    );
};
