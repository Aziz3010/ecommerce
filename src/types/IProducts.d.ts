type TProduct = {
    id: number;
    title: string;
    price: string;
    cat_prefix: string;
    img: string;
};

interface IProductsState {
    records: TProduct[],
    loading: "idle" | "pending" | "succeded" | "failed",
    error: string | null
};