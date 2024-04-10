type TCategory = {
    id: number;
    title: string;
    prefix: string;
    img: string;
};

interface ICategoriesState {
    records: TCategory[],
    loading: "idle" | "pending" | "succeded" | "failed",
    error: string | null
};