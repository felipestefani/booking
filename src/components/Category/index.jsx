import CategoryCard from "../CategoryCard";
import categoryData from "../../data/categorias";
import styles from "./styles.module.css";

const Category = () => {
    return(
        <div className={styles.categories}>
            <h2 className={styles.categorySearchTitle}>Buscar por categoria</h2>
            <div className={styles.categoryCards}>
                {
                    categoryData.map((category) => (
                        <CategoryCard key={category.title} title={category.title} img={category.img} />
                    ))
                }
            </div>
        </div>)
}

export default Category