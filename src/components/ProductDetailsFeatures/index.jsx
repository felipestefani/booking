import styles from "./styles.module.css";
import { FaWifi, FaHelicopter, FaTv, FaSnowflake } from "react-icons/fa";
import { MdPets, MdPool, MdKitchen, MdWork } from "react-icons/md";

const ProductDetailsFeatures = () => {
    return (
        <div className={styles.featuresContainer}>
            <h2>Características</h2>
            <hr />
            <ul>
                <div className={styles.feature}>
                    <FaWifi color="#1dbeb4"/>
                    <li>Wifi</li>
                </div>
                <div className={styles.feature}>
                    <FaHelicopter color="#1dbeb4"/>
                    <li>Helicoptero para passeio</li>
                </div>
                <div className={styles.feature}>
                    <FaTv color="#1dbeb4" />
                    <li>Cinema</li>
                </div>
                <div className={styles.feature}>
                    <FaSnowflake color="#1dbeb4"/>
                    <li>Ar condicionado central</li>
                </div>
                <div className={styles.feature}>
                    <MdPets color="#1dbeb4"/>
                    <li>Petfriendly</li>
                </div>
                <div className={styles.feature}>
                    <MdPool color="#1dbeb4"/>
                    <li>Piscina olímpica</li>
                </div>
                <div className={styles.feature}>
                    <MdKitchen color="#1dbeb4"/>
                    <li>Frigobares</li>
                </div>
                <div className={styles.feature}>
                    <MdWork color="#1dbeb4"/>
                    <li>Salas de conferência</li>
                </div>
            </ul>
        </div>
    )
}

export default ProductDetailsFeatures