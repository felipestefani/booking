import styles from './styles.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { MainContext } from "../../contexts/MainContext"
import { useContext } from "react";
const MainTemplate = ({children}) => {

    const { path } = useContext(MainContext)
    return(
        <div className={styles.container}>
            <Header />
            <main className={styles.main} style={{background:`${path == '/booking/login' || path == '/booking/register' ? '#f6f6f6' : ''}`}}>
                {children}
            </main>    
            <Footer />        
        </div>)
}

export default MainTemplate