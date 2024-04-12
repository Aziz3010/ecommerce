type TProduct = {
    id: number;
    title: string;
    price: string;
    max: number;
    cat_prefix: string;
    img: string;
    quatitiy?: number;
};

interface IProductsState {
    records: TProduct[],
    loading: TLoading,
    error: TError
};