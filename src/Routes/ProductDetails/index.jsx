import styles from "./styles.module.css";
import { FiShare2 } from "react-icons/fi";
import ProductDetailsLike from "../../components/ProductDetailsLike";
import ProductDetailsHeader from "../../components/ProductDetailsHeader";
import Description from "../../components/Description";
import ImageBoard from "../../components/ImageBoard";
import ProductDetailsFeatures from "../../components/ProductDetailsFeatures";
import ProductDetailsPolicies from "../../components/ProductDetailsPolicies";
import BookingStart from "../../components/BookingStart";

const ProductDetails = (props) => {

    const iconSize = '1.5em'

    return (
        <div className={styles.productDetailsContainer}>
            <ProductDetailsHeader />
            <div className={styles.shareAndLike}>
                <FiShare2 size={iconSize}/>
                <ProductDetailsLike size={iconSize} />
            </div>
            <ImageBoard />
            <Description />
            <ProductDetailsFeatures />
            <ProductDetailsPolicies />
            <BookingStart />
            <div className={styles.space}></div>
        </div>
    )
}

export default ProductDetails