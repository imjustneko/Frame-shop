import { useState, useEffect } from 'react'
import { SIZES, FRAMES, FRAME_BORDER_CM, CM_TO_INCH, PIXELS_PER_INCH } from '../constants'

function Preview({ image, selectedSize, selectedFrame, imageResolution }) {
  const [dimensions, setDimensions] = useState({ photoWidth: 0, photoHeight: 0, borderWidth: 0 })

  useEffect(() => {
    if (image) {
      calculateDimensions()
    }
  }, [image, selectedSize])

  const calculateDimensions = () => {
    const size = SIZES.find((s) => s.id === selectedSize)
    if (!size || !image) return

    // Convert 3cm border to pixels
    const borderInInches = FRAME_BORDER_CM * CM_TO_INCH
    const borderInPixels = borderInInches * PIXELS_PER_INCH

    // Get frame size in pixels (this is the area for the photo)
    const frameWidthInPixels = size.width * PIXELS_PER_INCH
    const frameHeightInPixels = size.height * PIXELS_PER_INCH

    // Calculate aspect ratios
    const frameAspectRatio = size.width / size.height
    const imageAspectRatio = image.width / image.height

    let photoWidth, photoHeight

    // Scale photo to fit inside frame while maintaining aspect ratio
    // Photo is NOT cropped - it maintains its full aspect ratio
    if (imageAspectRatio > frameAspectRatio) {
      // Image is wider than frame - fit to width
      photoWidth = frameWidthInPixels
      photoHeight = photoWidth / imageAspectRatio
    } else {
      // Image is taller than frame - fit to height
      photoHeight = frameHeightInPixels
      photoWidth = photoHeight * imageAspectRatio
    }

    // Scale down for display preview (max 450px height including border)
    const maxDisplayHeight = 450
    const totalHeightWithBorder = photoHeight + borderInPixels * 2

    let scale = 1
    if (totalHeightWithBorder > maxDisplayHeight) {
      scale = maxDisplayHeight / totalHeightWithBorder
    }

    setDimensions({
      photoWidth: photoWidth * scale,
      photoHeight: photoHeight * scale,
      borderWidth: borderInPixels * scale
    })
  }

  const frame = FRAMES.find((f) => f.id === selectedFrame)

  if (!image) {
    return (
      <div className="preview-container">
        <div className="preview-placeholder">
          <div className="placeholder-icon">🖼️</div>
          <div className="placeholder-text">Your photo will appear here</div>
          <div className="placeholder-hint">Upload an image to get started</div>
        </div>
      </div>
    )
  }

  // Get frame styling based on frame type
  const getFrameStyle = () => {
    const borderWidthPx = dimensions.borderWidth
    const baseStyle = {
      border: `${borderWidthPx}px solid`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      outlineOffset: '0'
    }

    switch (selectedFrame) {
      case 'classic-black':
        return {
          ...baseStyle,
          borderColor: '#1a1a1a',
          boxShadow: 'inset 0 0 0 2px #333, 0 8px 24px rgba(0, 0, 0, 0.3)'
        }
      case 'modern-white':
        return {
          ...baseStyle,
          borderColor: '#ffffff',
          boxShadow: '0 0 0 1px #e0e0e0, inset 0 0 0 2px #f0f0f0, 0 8px 24px rgba(0, 0, 0, 0.12)'
        }
      case 'gold-luxury':
        return {
          ...baseStyle,
          borderColor: '#D4A574',
          background: 'linear-gradient(135deg, #E5C9A0, #D4A574, #C9955C)',
          boxShadow: 'inset 0 0 0 3px #B8935A, 0 12px 32px rgba(212, 165, 116, 0.3)'
        }
      case 'walnut':
        return {
          ...baseStyle,
          borderColor: '#5D4037',
          background: 'linear-gradient(90deg, #6D4C41, #5D4037, #4E342E)',
          boxShadow: 'inset 0 0 0 2px #3E2723, 0 8px 24px rgba(0, 0, 0, 0.25)'
        }
      case 'silver':
        return {
          ...baseStyle,
          borderColor: '#B8B8B8',
          background: 'linear-gradient(135deg, #D3D3D3, #B8B8B8)',
          boxShadow: 'inset 0 0 0 2px #999, 0 8px 24px rgba(0, 0, 0, 0.15)'
        }
      case 'oak':
        return {
          ...baseStyle,
          borderColor: '#D4A574',
          background: 'linear-gradient(90deg, #DDB892, #D4A574)',
          boxShadow: 'inset 0 0 0 2px #C9955C, 0 8px 24px rgba(0, 0, 0, 0.18)'
        }
      case 'minimal':
        return {
          ...baseStyle,
          borderColor: '#000000',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)'
        }
      case 'cream':
        return {
          ...baseStyle,
          borderColor: '#F5F1E8',
          background: 'linear-gradient(135deg, #F8F6F1, #F5F1E8)',
          boxShadow: 'inset 0 0 0 3px #E5DFC8, 0 8px 24px rgba(0, 0, 0, 0.1)'
        }
      default:
        return baseStyle
    }
  }

  return (
    <div className="preview-container">
      <div className="preview-frame-wrapper" style={getFrameStyle()}>
        <img
          src={image.src}
          alt="Preview"
          className="preview-image"
          style={{
            width: dimensions.photoWidth,
            height: dimensions.photoHeight,
            display: 'block',
            borderRadius: '2px'
          }}
        />
      </div>
    </div>
  )
}

export default Preview
