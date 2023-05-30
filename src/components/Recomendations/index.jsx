import styles from './styles.module.css'
import hoteis from '../../data/hoteis.json';
import Card from "../Card";

const Recomendations = () => {
    return( 
        <div className={styles.recomendationsContainer}>
            <h2 className={styles.recomendationsTitle}>Recomendações</h2>
            <div className={styles.recomendations}>
                {
                    hoteis.map((hotel) => (
                        <li key={hotel.description}>
                            <Card 
                                hotel={hotel}
                            /> 
                        </li>
                    ))
                }
            </div>
            <div className={styles.space}></div>
        </div> 
    )
}

export default Recomendations