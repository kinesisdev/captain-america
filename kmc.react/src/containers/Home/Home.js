import React, { useState, useEffect } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { API } from "aws-amplify";
import { LinkContainer } from "react-router-bootstrap";

import { useAppContext } from "../../libs/contextLib";
import { onError } from "../../libs/errorLib";
import EditableProductTable from "../../components/EditableProductTable";
import "./Home.css";

export default function Home() {
    const [products, setProducts] = useState([]);
    const { isAuthenticated } = useAppContext();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function onLoad() {
            if (!isAuthenticated) {
                return;
            }

            try {
                const products = await loadProducts();
                setProducts(products);
            } catch (e) {
                onError(e);
            }

            setIsLoading(false);
        }

        onLoad();
    }, [isAuthenticated]);

    function loadProducts() {
        return API.get("kmc", "/products");
    }

    function renderProductsList(products) {
        return (
            <div>
                <LinkContainer key="new" to="/products/new">
                    <ListGroupItem>
                        <h4>
                            <b></b> Thêm sản phẩm
                        </h4>
                    </ListGroupItem>
                </LinkContainer>
                <LinkContainer key="new" to="/products/new">
                    <ListGroupItem>
                        <h4>
                            <b></b> Bán hàng
                        </h4>
                    </ListGroupItem>
                </LinkContainer>
                <EditableProductTable products={products} />
            </div>
        )
    }

    function renderLander() {
        return (
            <div className="lander">
                <h1>KMC</h1>
                <p>Kim Minh Chau</p>
                <div>
                    <Link to="/login" className="btn btn-info btn-lg">
                        Login
                    </Link>
                </div>
            </div>
        );
    }

    function renderProducts() {
        return (
            <div className="products">
                <PageHeader>Kim Minh Châu</PageHeader>
                <ListGroup>
                    {!isLoading && renderProductsList(products)}
                </ListGroup>
            </div>
        );
    }

    return (
        <div className="Home">
            {isAuthenticated ? renderProducts() : renderLander()}
        </div>
    );
}
