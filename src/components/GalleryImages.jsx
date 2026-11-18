

export default function GalleryImages({ imgLink, imgAlt, headline }) {
    return (
        <>
            <div>
                <img src={imgLink} alt={imgAlt} />
            </div>

            <h2>{headline}</h2>
        </>
    )
}
