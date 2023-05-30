import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import galeryImages from "../../data/galeryImages.json";
import './MyCss.css'

const ImageGallerySlider = (props) => {
    const { showThumbnails,showPlayButton,autoPlay,slideDuration,
            showNav,showFullscreenButton,slideInterval,showIndex,showBullets} = props

    const [imagesArray, setImagesArray] = useState([])

    const transformImages = () => {
        let imagesObject = []
        galeryImages.map((image) => {
            imagesObject.push({
                original: image.img,
                thumbnail: image.img
            })})
        setImagesArray(imagesObject)
    }

    useEffect(() => {
        transformImages()
    },[])

    return (
        <div className={`${styles.imageGalleryContainer} custom-image-gallery`}>
            <ImageGallery 
                items={imagesArray} 
                showThumbnails={showThumbnails}  
                showPlayButton={showPlayButton}
                autoPlay={autoPlay}
                slideDuration={slideDuration}
                showNav={showNav}
                showFullscreenButton={showFullscreenButton}
                slideInterval={slideInterval}
                showIndex={showIndex}                
                showBullets={showBullets}
            />
    </div>
    )
}

export default ImageGallerySlider