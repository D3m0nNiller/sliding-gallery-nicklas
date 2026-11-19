import { useState, useEffect } from 'react'
import Gallery from './components/Gallery'
import GalleryArrows from './components/GalleryArrows'

useEffect(() => {
  if (!transition) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransition(true)
      })
    })
  }
}, [transition])

function App() {

  const [currentImage, setCurrentImage] = useState(1)
  const [transition, setTransition] = useState(true)

  function nextImage() {
    setTransition(true)
    setCurrentImage(current => current + 1)
  }

  function previousImage() {
    setTransition(true)
    setCurrentImage(current => current - 1)
  }

  function handleTransitionEnd() {
    if (currentImage === 0) {
      setTransition(false)
      setCurrentImage(16)
    }

    if (currentImage === 17) {
      setTransition(false)
      setCurrentImage(1)
    }
  }

  return (
    <>
      <main className="gallery">
        <GalleryArrows
          nextImage={nextImage}
          previousImage={previousImage}
        />

        <Gallery
          currentImage={currentImage}
          transition={transition}
          handleTransitionEnd={handleTransitionEnd}
        />
      </main>
    </>
  )
}

export default App