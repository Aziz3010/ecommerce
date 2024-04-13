import { useCallback, useEffect } from "react";
import Heading from "../components/common/Heading/Heading";
import { useAppDispatch, useAppSelector } from "../store/hook";
import actGetProductsByItems from "../store/cart/act/actGetProductsByItems";
import Status from "../components/feedback/Status/Status";
import CartItemList from "../components/eCommerce/CartList/CartList";
import {
  cartItemChangeQuantity,
  cartItemRemove,
} from "../store/cart/cartSlice";
import CartSubtotalPrice from "../components/eCommerce/CartSubTotalPrice/CartSubTotalPrice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { loading, error, items, productsFullInfo } = useAppSelector(
    (state) => state.cart
  );

  const products = productsFullInfo?.map((product) => {
    return { ...product, quantity: items[product?.id] };
  });

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(actGetProductsByItems());
  }, [dispatch]);

  return (
    <>
      <Heading headingText="cart" />
      <Status status={loading} error={error}>
        <CartItemList
          products={products}
          changeQuantityHandler={changeQuantityHandler}
          removeItemHandler={removeItemHandler}
        />
      </Status>
      <CartSubtotalPrice products={products} />
    </>
  );
};

export default Cart;
