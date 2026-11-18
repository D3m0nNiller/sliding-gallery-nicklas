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
import './App.css'
import GalleryImages from './components/GalleryImages'

function App() {

  return (
    <>
      <main id="gallery">
        <GalleryImages imgLink={street1} />
        <GalleryImages imgLink={street2} />
        <GalleryImages imgLink={street3} />
        <GalleryImages imgLink={street4} />
        <GalleryImages imgLink={street5} />
        <GalleryImages imgLink={street6} />
        <GalleryImages imgLink={street7} />
        <GalleryImages imgLink={street8} />
        <GalleryImages imgLink={street9} />
        <GalleryImages imgLink={street10} />
        <GalleryImages imgLink={street11} />
        <GalleryImages imgLink={street12} />
        <GalleryImages imgLink={street13} />
        <GalleryImages imgLink={street14} />
        <GalleryImages imgLink={street15} />
        <GalleryImages imgLink={street16} />
      </main>
    </>
  )
}

export default App
