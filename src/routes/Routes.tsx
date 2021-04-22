import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "../pages/Index";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import PageNotFound from "../pages/PageNotFound";
import BuyRoutes from "./BuyRoutes";
import OrderRoutes from "./OrderRoutes";
import AdminRoutes from "./AdminRoutes";

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route path="/buy">
        <BuyRoutes />
      </Route>
      <Route path="/orders">
        <OrderRoutes />
      </Route>
      <Route path="/admin">
        <AdminRoutes />
      </Route>
      <Route path="/products/:productId">
        <ProductDetail />
      </Route>
      <Route path="/products" component={Products}>
        <Products />
      </Route>
      <Route exact path="/" component={Index}>
        <Index />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
