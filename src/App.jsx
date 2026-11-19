import { useState } from 'react'
import Gallery from './components/Gallery'
import GalleryArrows from './components/GalleryArrows'

function App() {

  const [currentImage, setCurrentImage] = useState(1)
  const [transition, setTransition] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  function nextImage() {
    if (isAnimating) return

    setIsAnimating(true)
    setTransition(true)
    setCurrentImage(current => current + 1)
  }

  function previousImage() {
    if (isAnimating) return

    setIsAnimating(true)
    setTransition(true)
    setCurrentImage(current => current - 1)
  }

  function handleTransitionEnd(event) {

    if (event.propertyName !== "transform") return

    if (currentImage === 0) {
      setTransition(false)
      setCurrentImage(16)

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true)
          setIsAnimating(false)
        })
      })

      return
    }

    if (currentImage === 17) {
      setTransition(false)
      setCurrentImage(1)

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true)
          setIsAnimating(false)
        })
      })

      return
    }

    setIsAnimating(false)
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