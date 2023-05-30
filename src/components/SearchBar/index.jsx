import styles from './styles.module.css'
import { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchBar = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/booking/product')
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Buscar hotéis, casas e muito mais</h1>
            <form className={styles.searchForm}>
                <div className={styles.whereToGo}>
                    <MdLocationOn  className={styles.locationIcon} />                    
                    <input className={styles.input} type="text" placeholder='Para onde vamos?' />
                </div>
                <div className={styles.inputCheckInOut}>
                    <div className={styles.checkIn}>
                    <DatePicker
                        dateFormat='dd/MM/yyyy'
                        selected={startDate} 
                        onChange={date => setStartDate(date)} 
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        className={`${styles.date} ${styles.dateLeft}`} 
                         />
                    </div>
                    <div className={styles.checkOut}>
                    <DatePicker 
                        dateFormat='dd/MM/yyyy'
                        selected={endDate} 
                        onChange={date => setEndDate(date)} 
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        className={`${styles.date} ${styles.dateRight}`} 
                        />
                    </div>
                </div>
                <button className={styles.searchButton} onClick={() => handleClick}>Buscar</button>  
            </form>
        </div>
    )
}

export default SearchBar