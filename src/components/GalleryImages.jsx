import "./gallery.scss"

export default function GalleryImages({ imgLink, headline, divClass }) {
    return (
        <div className={divClass}>
            <img src={imgLink} alt={headline} />

            <h2>{headline}</h2>
        </div>
    )
}