import styles from './styles.module.css'
import RegisterForm from "../../components/RegisterForm";
import { Link } from "react-router-dom";
import { MainContext } from "../../contexts/MainContext";
import { useContext, useEffect } from "react";

 const Register = () => {

    const {path, setPath} = useContext(MainContext)

    useEffect(()=>{
        setPath('/booking/register')
    })

    return(
        <div className={styles.containerRegister}>
            <RegisterForm />
            <p className={styles.p}>Possui uma conta? <Link to={'/login'} className={styles.linkLogin}>Faça login</Link> </p>
        </div>
    )
 }

 export default Register