import { Link } from "react-router-dom";
import styles from './styles.module.css'
import LoginForm from '../../components/LoginForm'
import { useEffect, useContext } from "react";
import { MainContext } from "../../contexts/MainContext";

const Login = () => {

    const { path, setPath } = useContext(MainContext)

    useEffect(()=> {
        setPath('/booking/login')
    })
    return (
        <div className={styles.containerLogin}>
            <LoginForm />
            <p className={styles.p}>Ainda não tem conta? <Link to={'/booking/register'} className={styles.linkRegister}>Registre-se</Link> </p>
        </div>
    )
}

export default Login