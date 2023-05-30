import styles from "./styles.module.css";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import ImageGallerySlider from "../ImageGallerySlider";
import galeryImages from "../../data/galeryImages.json";
import ProductDetailsModal from "../ProductDetailsModal";
import { MainContext } from "../../contexts/MainContext";
import './MyCustom.css';

const ImageBoard = () => {
    const {open, setOpen, windowSize} = useContext(MainContext)

    return (
        <div className={styles.imageBoardContainer}>
            {
                windowSize[0] >= 1024 ? (
                    <div>
                        <div className={styles.imageBoardContainerDesktop}>
                            <img src={galeryImages[0].img} alt="" className={styles.img1} />
                            <div className={styles.img2}>
                                <img src={galeryImages[1].img} alt=""  />
                            </div>
                            <div className={styles.img3}>
                                <img src={galeryImages[2].img} alt=""  />
                            </div>
                            <div className={styles.img4}>
                                <img src={galeryImages[3].img} alt=""  />
                            </div>
                            <div className={styles.img5}>
                                <img src={galeryImages[4].img} alt=""  />
                            </div>
                        <Link onClick={() => setOpen(true)}><p className={styles.seeMore}>Ver mais</p></Link>
                        </div>
                        <ProductDetailsModal />
                    </div> 
                ) :  
                (
                    <div className="my-custom-gallery">
                        <ImageGallerySlider 
                                showThumbnails={false}  
                                showPlayButton={false}
                                autoPlay={true}
                                slideDuration={400}
                                showNav={false}
                                showFullscreenButton={false}
                                slideInterval={2000}
                                showIndex={true}
                                showBullets={false}
                                className=''
                        />
                    </div>

                )
            }   
        </div>
    )
}

export default ImageBoard