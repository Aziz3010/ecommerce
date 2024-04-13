type TCartInitialState = {
    items: {[key: string]: number},
    productsFullInfo: TProduct[],
    loading: TLoading,
    error: TError
}

type CartItemListProps = {
    products: TProduct[];
    changeQuantityHandler: (id: number, quantity: number) => void;
    removeItemHandler: (id: number) => void;
  };