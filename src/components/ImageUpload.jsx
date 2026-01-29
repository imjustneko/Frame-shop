import { useRef, useState } from 'react'

function ImageUpload({ image, onImageUpload }) {
  const fileInputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      processFile(file)
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      processFile(file)
    }
  }

  const processFile = (file) => {
    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB')
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        onImageUpload({
          src: e.target.result,
          name: file.name,
          size: file.size,
          width: img.width,
          height: img.height
        })
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  }

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Upload Your Photo</h2>
        <p className="card-subtitle">Start by uploading the photo you want to frame</p>
      </div>
      <div
        className={`upload-area ${isDragging ? 'drag-over' : ''}`}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="upload-icon">📷</div>
        <div className="upload-text">Drop your photo here</div>
        <div className="upload-hint">
          or <strong>click to browse</strong> • JPG, PNG up to 10MB
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
      {image && (
        <div className="uploaded-preview">
          <img src={image.src} alt="Uploaded" className="uploaded-thumbnail" />
          <div className="uploaded-info">
            <div className="uploaded-name">{image.name}</div>
            <div className="uploaded-size">{formatFileSize(image.size)}</div>
          </div>
          <button
            className="change-photo-btn"
            onClick={(e) => {
              e.stopPropagation()
              fileInputRef.current?.click()
            }}
          >
            Change
          </button>
        </div>
      )}
    </div>
  )
}

export default ImageUpload
