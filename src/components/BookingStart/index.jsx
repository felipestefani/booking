import { DateRangePicker, CustomProvider } from "rsuite";
import ptBR from "rsuite/locales/pt_BR";
import "rsuite/dist/rsuite.css";
import styles from "./styles.module.css";
import './custom-styles.css'
import { useContext } from "react";
import { MainContext } from "../../contexts/MainContext";


const BookingStart = () => {

    const { windowSize } = useContext(MainContext)
    const {beforeToday} = DateRangePicker

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <CustomProvider locale={ptBR}>
        <div className={styles.bookingStartContainer}>
            <div className={styles.calendarContainer}>      
                <div className={styles.calendarTitle}>
                    <h2>Datas disponíveis</h2>
                </div>
                <DateRangePicker 
                    defaultOpen={true}
                    shouldDisableDate={beforeToday()}
                    ranges={[]}
                    open={true}
                    onClose={()=>setShow(false)}
                    className={styles.datePicker}
                    placeholder={''}
                    style={{visibility:'hidden', height:"0px"}}
                    showOneCalendar={windowSize[0] < 769 ? true : false} 
                />
            </div>
            <div className={styles.bookingForm}>
                <form className={styles.box}>
                    <p>Adicione as datas de sua viagem para obter preços exatos</p>
                    <button type="submit" onClick={()=>handleSubmit}>Iniciar reserva</button>
                </form>
            </div>
        </div>
        </CustomProvider>
    )
}

export default BookingStart