import styles from './styles.module.css'

const Card = (props) => {
    const { hotel } = props
    const { img, category, title, location, description } = hotel

    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img src={img} alt={title} className={styles.img}/>
            </div>
            <div className={styles.content}>
                <h2 className={styles.recomendationsCardTitle}>{title}</h2>
                <h4>{category}</h4>
                <h4>{location}</h4>
                <p className={styles.p} >{description}</p>
                <button className={styles.button} navigate='#'>Detalhes</button>
            </div>
        </div>
    )
}

export default Card