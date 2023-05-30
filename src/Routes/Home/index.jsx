import styles from './styles.module.css'
import SearchBar from "../../components/SearchBar";
import Category from "../../components/Category";
import { useEffect, useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import Recomendations from "../../components/Recomendations";

const Home = () => {

    const { setPath } = useContext(MainContext)

    useEffect(() => {
        setPath('/booking')
    })

    return(
        <div className={styles.container}>
            <SearchBar />
            <Category />
            <Recomendations />
        </div>       
    )
}

export default Home