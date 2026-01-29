import { useState } from 'react'
import Header from './components/Header'
import ImageUpload from './components/ImageUpload'
import ResolutionInput from './components/ResolutionInput'
import SizeSelection from './components/SizeSelection'
import FrameSelection from './components/FrameSelection'
import Preview from './components/Preview'
import Pricing from './components/Pricing'
import { SIZES, FRAMES, SIZE_PRICING } from './constants'

function App() {
  const [image, setImage] = useState(null)
  const [selectedSize, setSelectedSize] = useState('8x10')
  const [selectedFrame, setSelectedFrame] = useState('gold-luxury')
  const [imageResolution, setImageResolution] = useState(300)

  const handleAddToCart = () => {
    if (!image) return

    const size = SIZES.find(s => s.id === selectedSize)
    const frame = FRAMES.find(f => f.id === selectedFrame)
    const total = SIZE_PRICING[selectedSize] + frame.price

    const message = `
🎉 Order Confirmation

Photo: ${image.name}
Resolution: ${imageResolution} DPI
Dimensions: ${image.width}×${image.height}px
Size: ${size.name}
Frame: ${frame.name}
Border: 3cm on all sides (fixed)
Total: $${total.toFixed(2)}

Thank you for choosing Frame Studio!
Your order is ready for checkout.
    `.trim()

    alert(message)
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="main-grid">
          <div className="controls-column">
            <ImageUpload image={image} onImageUpload={setImage} />
            <ResolutionInput image={image} resolution={imageResolution} onResolutionChange={setImageResolution} />
            <SizeSelection selectedSize={selectedSize} onSizeChange={setSelectedSize} />
            <FrameSelection selectedFrame={selectedFrame} onFrameChange={setSelectedFrame} />
          </div>
          <div className="preview-sticky">
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Live Preview</h2>
                <p className="card-subtitle">See how your framed photo will look</p>
              </div>
              <Preview
                image={image}
                selectedSize={selectedSize}
                selectedFrame={selectedFrame}
                imageResolution={imageResolution}
              />
              <Pricing
                image={image}
                selectedSize={selectedSize}
                selectedFrame={selectedFrame}
                onAddToCart={handleAddToCart}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
