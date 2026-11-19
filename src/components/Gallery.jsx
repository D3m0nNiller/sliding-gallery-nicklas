import GalleryImages from './GalleryImages'

export default function Gallery({ currentImage, transition, handleTransitionEnd }) {

    const images = [
        { imgLink: "/street_01.jpg", headline: "Street Foto 1" },
        { imgLink: "/street_02.jpg", headline: "Street Foto 2" },
        { imgLink: "/street_03.jpg", headline: "Street Foto 3" },
        { imgLink: "/street_04.jpg", headline: "Street Foto 4" },
        { imgLink: "/street_05.jpg", headline: "Street Foto 5" },
        { imgLink: "/street_06.jpg", headline: "Street Foto 6" },
        { imgLink: "/street_07.jpg", headline: "Street Foto 7" },
        { imgLink: "/street_08.jpg", headline: "Street Foto 8" },
        { imgLink: "/street_09.jpg", headline: "Street Foto 9" },
        { imgLink: "/street_10.jpg", headline: "Street Foto 10" },
        { imgLink: "/street_11.jpg", headline: "Street Foto 11" },
        { imgLink: "/street_12.jpg", headline: "Street Foto 12" },
        { imgLink: "/street_13.jpg", headline: "Street Foto 13" },
        { imgLink: "/street_14.jpg", headline: "Street Foto 14" },
        { imgLink: "/street_15.jpg", headline: "Street Foto 15" },
        { imgLink: "/street_16.jpg", headline: "Street Foto 16" },
    ]

    const galleryImages = [
        images[images.length - 1],
        ...images,
        images[0]
    ]

    return (
        <div className="gallery__images">
            <div
                className="gallery__track"
                style={{
                    transform: `translateX(-${currentImage * 100}%)`,
                    transition: transition ? "transform 0.4s ease-in-out" : "none"
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {galleryImages.map((image, index) => (
                    <GalleryImages
                        key={index}
                        imgLink={image.imgLink}
                        headline={image.headline}
                        divClass="gallery__setup"
                    />
                ))}
            </div>
        </div>
    )
}