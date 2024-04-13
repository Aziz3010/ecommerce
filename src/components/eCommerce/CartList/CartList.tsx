import CartItem from "../CartItem/CartItem";

const CartItemList = ({
  products,
  changeQuantityHandler,
  removeItemHandler,
}: CartItemListProps) => {
  const renderList = products?.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQuantityHandler={changeQuantityHandler}
      removeItemHandler={removeItemHandler}
    />
  ));

  return <div>{renderList?.length ? renderList : "Your cart is empty"}</div>;
};

export default CartItemList;
