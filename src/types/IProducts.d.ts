type TProduct = {
    id: number;
    title: string;
    price: number;
    max: number;
    cat_prefix: string;
    img: string;
    quantity?: number;
};

interface IProductsState {
    records: TProduct[],
    loading: TLoading,
    error: TError
};