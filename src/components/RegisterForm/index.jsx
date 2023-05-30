import styles from './styles.module.css'

const RegisterForm = () => {
    return (
        <form className={styles.containerRegisterForm}>
            <h1>Criar conta</h1>
            <div className={styles.completeNameContainer}>
                <label>
                    Nome
                    <input type="text" />
                </label>
                <label>
                    Sobrenome
                    <input type="text" />
                </label>
            </div>
            <label>
                E-mail
                <input type="email" />
            </label>
            <label>
                Repetir e-mail
                <input type="email" />
            </label>
            <label>
                Senha
                <input type="password" />
            </label>
            <button className={styles.submitRegisterButton} type="submit" >Criar conta</button>
        </form>
    )
}

export default RegisterForm
