import street1 from "./img/street_01.jpg"
import street2 from "./img/street_02.jpg"
import street3 from "./img/street_03.jpg"
import street4 from "./img/street_04.jpg"
import street5 from "./img/street_05.jpg"
import street6 from "./img/street_06.jpg"
import street7 from "./img/street_07.jpg"
import street8 from "./img/street_08.jpg"
import street9 from "./img/street_09.jpg"
import street10 from "./img/street_10.jpg"
import street11 from "./img/street_11.jpg"
import street12 from "./img/street_12.jpg"
import street13 from "./img/street_13.jpg"
import street14 from "./img/street_14.jpg"
import street15 from "./img/street_15.jpg"
import street16 from "./img/street_16.jpg"
import GalleryImages from './components/GalleryImages'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

function App() {

  return (
    <>
      <main className="gallery">
        <div className="gallery__images">
          <GalleryImages imgLink={street1} headline="Street Foto 1" divClass="gallery__setup" arrowLeft={true} arrowRight={false} />
          <GalleryImages imgLink={street2} headline="Street Foto 2" divClass="gallery__setup" />
          <GalleryImages imgLink={street3} headline="Street Foto 3" divClass="gallery__setup" />
          <GalleryImages imgLink={street4} headline="Street Foto 4" divClass="gallery__setup" />
          <GalleryImages imgLink={street5} headline="Street Foto 5" divClass="gallery__setup" />
          <GalleryImages imgLink={street6} headline="Street Foto 6" divClass="gallery__setup" />
          <GalleryImages imgLink={street7} headline="Street Foto 7" divClass="gallery__setup" />
          <GalleryImages imgLink={street8} headline="Street Foto 8" divClass="gallery__setup" />
          <GalleryImages imgLink={street9} headline="Street Foto 9" divClass="gallery__setup" />
          <GalleryImages imgLink={street10} headline="Street Foto 10" divClass="gallery__setup" />
          <GalleryImages imgLink={street11} headline="Street Foto 11" divClass="gallery__setup" />
          <GalleryImages imgLink={street12} headline="Street Foto 12" divClass="gallery__setup" />
          <GalleryImages imgLink={street13} headline="Street Foto 13" divClass="gallery__setup" />
          <GalleryImages imgLink={street14} headline="Street Foto 14" divClass="gallery__setup" />
          <GalleryImages imgLink={street15} headline="Street Foto 15" divClass="gallery__setup" />
          <GalleryImages imgLink={street16} headline="Street Foto 16" divClass="gallery__setup" />
        </div>
      </main>
    </>
  )
}

export default App
