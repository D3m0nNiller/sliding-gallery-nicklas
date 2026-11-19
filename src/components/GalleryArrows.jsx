import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function GalleryArrows({ nextImage, previousImage }) {

    return (
        <>
            <button
                className="gallery__leftArrow"
                onClick={previousImage}
            >
                <FaChevronLeft />
            </button>

            <button
                className="gallery__rightArrow"
                onClick={nextImage}
            >
                <FaChevronRight />
            </button>
        </>
    )
}