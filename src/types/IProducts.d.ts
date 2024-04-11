type TProduct = {
    id: number;
    title: string;
    price: string;
    cat_prefix: string;
    img: string;
};

interface IProductsState {
    records: TProduct[],
    loading: TLoading,
    error: TError
};