import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import "./gallery.scss"

export default function GalleryImages({ imgLink, headline, divClass, arrowLeft, arrowRight }) {
    return (
        <>
            <div className={divClass}>
                <img src={imgLink} alt={headline} />

                <h2>{headline}</h2>

                {arrowLeft && <FaChevronLeft className="gallery__leftArrow" />}
                {arrowRight && <FaChevronRight className="gallery__rightArrow" />}
            </div>
        </>
    )
}
