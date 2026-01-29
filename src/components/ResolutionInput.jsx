import { useState } from 'react'

function ResolutionInput({ resolution, onResolutionChange, image }) {
  const [customValue, setCustomValue] = useState('')
  const [showCustom, setShowCustom] = useState(false)

  const presetResolutions = [72, 150, 200, 300, 400, 600]

  const handlePresetClick = (dpi) => {
    onResolutionChange(dpi)
    setShowCustom(false)
    setCustomValue('')
  }

  const handleCustomChange = (e) => {
    const value = e.target.value
    setCustomValue(value)
    if (value && !isNaN(value) && value > 0) {
      onResolutionChange(parseInt(value))
    }
  }

  const handleCustomSubmit = () => {
    if (customValue && !isNaN(customValue) && customValue > 0) {
      onResolutionChange(parseInt(customValue))
      setShowCustom(false)
    }
  }

  if (!image) {
    return (
      <div className="card" style={{ opacity: 0.5, pointerEvents: 'none' }}>
        <div className="card-header">
          <h2 className="card-title">Image Resolution</h2>
          <p className="card-subtitle">Upload a photo first</p>
        </div>
        <div style={{ padding: '1.5rem', textAlign: 'center', color: '#999' }}>
          Resolution selection available after upload
        </div>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Image Resolution</h2>
        <p className="card-subtitle">Select DPI (dots per inch) for print quality</p>
      </div>
      <div className="resolution-content">
        <div className="image-info">
          <div className="info-label">Image Dimensions:</div>
          <div className="info-value">{image.width} × {image.height} pixels</div>
          <div className="info-label" style={{ marginTop: '0.75rem' }}>
            Current Resolution:
          </div>
          <div className="info-value" style={{ color: '#2563eb' }}>
            {resolution} DPI
          </div>
        </div>

        <div className="resolution-presets">
          <div style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem' }}>
            Quick Select:
          </div>
          <div className="preset-buttons">
            {presetResolutions.map((dpi) => (
              <button
                key={dpi}
                className={`preset-btn ${resolution === dpi ? 'active' : ''}`}
                onClick={() => handlePresetClick(dpi)}
              >
                {dpi} DPI
              </button>
            ))}
          </div>
        </div>

        <div className="custom-resolution">
          {!showCustom ? (
            <button
              className="custom-btn"
              onClick={() => setShowCustom(true)}
            >
              + Enter Custom DPI
            </button>
          ) : (
            <div className="custom-input-group">
              <input
                type="number"
                min="1"
                max="2400"
                value={customValue}
                onChange={handleCustomChange}
                placeholder="Enter DPI value"
                className="custom-input"
              />
              <button
                className="custom-submit-btn"
                onClick={handleCustomSubmit}
              >
                Set
              </button>
              <button
                className="custom-cancel-btn"
                onClick={() => {
                  setShowCustom(false)
                  setCustomValue('')
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="resolution-reference">
          <div style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
            📋 DPI Reference:
          </div>
          <ul style={{ fontSize: '0.8rem', color: '#666', lineHeight: '1.6', paddingLeft: '1rem' }}>
            <li><strong>72 DPI:</strong> Screen display, web</li>
            <li><strong>150 DPI:</strong> Basic printing</li>
            <li><strong>200 DPI:</strong> Standard printing</li>
            <li><strong>300 DPI:</strong> Professional print quality</li>
            <li><strong>400-600 DPI:</strong> High-end printing</li>
          </ul>
        </div>

        <div className="resolution-calculated">
          <div style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem' }}>
            📐 Print Size at {resolution} DPI:
          </div>
          <div style={{ fontSize: '0.8rem', color: '#666' }}>
            {(image.width / resolution).toFixed(2)}" × {(image.height / resolution).toFixed(2)}"
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResolutionInput
