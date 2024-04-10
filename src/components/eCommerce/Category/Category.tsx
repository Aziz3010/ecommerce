import { Link } from "react-router-dom";
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

const Category = ({ categoryData }: { categoryData: TCategory }) => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${categoryData.prefix}`}>
        <div className={categoryImg}>
          <img src={categoryData.img} alt={categoryData.title} />
        </div>
        <h4 title={categoryData.title} className={categoryTitle}>
          {categoryData.title}
        </h4>
      </Link>
    </div>
  );
};

export default Category;
