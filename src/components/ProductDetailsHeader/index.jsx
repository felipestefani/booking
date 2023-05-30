import styles from "./styles.module.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductDetailsHeader = () => {
    return (
        <div>
            <section className={styles.productDetailsHeader}>
                <div className={styles.productDetailsHeaderTitles}>
                    <h4>Categoria</h4>
                    <h2>Nome do Produto</h2>
                </div>
                <div className={styles.returnIcon}>
                   <Link to='/home'><IoArrowBackCircleOutline size={'3em'} color="#FFF"/></Link>
                </div>
            </section>
            <section className={styles.locationAndRate}>
                <div className={styles.location}>
                    <p>Localização</p>
                </div>
                <div className={styles.rate}>
                    <div className={styles.rateDescription}>
                        <p>Descriçao</p>
                        <p>Qtd. estrelas</p>
                    </div>
                    <div className={styles.rateGrade}>
                        <p>N</p>
                    </div>
                </div>
            </section>
        </div>
    )    
}

export default ProductDetailsHeader

