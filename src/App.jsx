// import street1 from "./img/street_01.jpg"
// import street2 from "./img/street_02.jpg"
// import street3 from "./img/street_03.jpg"
// import street4 from "./img/street_04.jpg"
// import street5 from "./img/street_05.jpg"
// import street6 from "./img/street_06.jpg"
// import street7 from "./img/street_07.jpg"
// import street8 from "./img/street_08.jpg"
// import street9 from "./img/street_09.jpg"
// import street10 from "./img/street_10.jpg"
// import street11 from "./img/street_11.jpg"
// import street12 from "./img/street_12.jpg"
// import street13 from "./img/street_13.jpg"
// import street14 from "./img/street_14.jpg"
// import street15 from "./img/street_15.jpg"
// import street16 from "./img/street_16.jpg"
import GalleryArrows from './components/GalleryArrows'
import GalleryImages from './components/GalleryImages'

function App() {

  return (
    <>
      <main className="gallery">
        <GalleryArrows />
        <div className="gallery__images">
          <GalleryImages imgLink="./public/street_01.jpg" headline="Street Foto 1" divClass="gallery__setup" arrowLeft={true} arrowRight={true} />
          <GalleryImages imgLink="./public/street_02.jpg" headline="Street Foto 2" divClass="gallery__setup" />
          <GalleryImages imgLink="./public/street_03.jpg" headline="Street Foto 3" divClass="gallery__setup" />
          <GalleryImages imgLink="./public/street_04.jpg" headline="Street Foto 4" divClass="gallery__setup" />
          <GalleryImages imgLink="./public/street_05.jpg" headline="Street Foto 5" divClass="gallery__setup" />
          <GalleryImages imgLink="./public/street_06.jpg" headline="Street Foto 6" divClass="gallery__setup" />
          <GalleryImages imgLink="./public/street_07.jpg" headline="Street Foto 7" divClass="gallery__setup" />
          <GalleryImages imgLink="./public/street_08.jpg" headline="Street Foto 8" divClass="gallery__setup" />
          <GalleryImages imgLink="./public/street_09.jpg" headline="Street Foto 9" divClass="gallery__setup" />
          <GalleryImages imgLink="./public/street_10.jpg" headline="Street Foto 10" divClass="gallery__setup" />
          <GalleryImages imgLink="./public/street_11.jpg" headline="Street Foto 11" divClass="gallery__setup" />
          <GalleryImages imgLink="./public/street_12.jpg" headline="Street Foto 12" divClass="gallery__setup" />
          <GalleryImages imgLink="./public/street_13.jpg" headline="Street Foto 13" divClass="gallery__setup" />
          <GalleryImages imgLink="./public/street_14.jpg" headline="Street Foto 14" divClass="gallery__setup" />
          <GalleryImages imgLink="./public/street_15.jpg" headline="Street Foto 15" divClass="gallery__setup" />
          <GalleryImages imgLink="./public/street_16.jpg" headline="Street Foto 16" divClass="gallery__setup" />
        </div>
      </main>
    </>
  )
}

export default App
