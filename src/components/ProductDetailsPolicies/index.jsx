import styles from "./styles.module.css";

const ProductDetailsPolicies = () => {
    return (
        <div className={styles.politiciesContainer}>
            <h2 className={styles.policiesTitle}>O que você precisa saber</h2>
            <hr />
            <div className={ styles.descriptionPolicies }>
                <div className={styles.policy}>
                    <h3>Regras do Hotel</h3>
                    <ul className={styles.rules}>
                        <li><p>Checkout: 11:00</p></li>
                        <li><p>Festas apenas na suíte presidencial</p></li>
                        <li><p>Proibido andar nu no lobby</p></li>
                    </ul>
                </div>
                <div className={styles.policy}>
                    <h3>Saúde e segurança</h3>
                    <ul className={styles.safetyAndHealth}>
                        <li><p>Diretrizes de distanciamento social e outras regulamentções relacionadas ao coronavírus se aplicam</p></li>
                        <li><p>Detector de fumaça</p></li>
                        <li><p>Cofre de segurança</p></li>
                    </ul>
                </div>
                <div className={styles.policy}>
                    <h3>Cancelamento</h3>
                    <ul className={styles.cancelAndRefund}>
                        <li><p>Adicione as datas de cancelamento para obter detalhes de cancelamento para esta estadia</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default  ProductDetailsPolicies