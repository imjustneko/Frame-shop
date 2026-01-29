import { SIZES } from '../constants'

function SizeSelection({ selectedSize, onSizeChange }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Choose Frame Size</h2>
        <p className="card-subtitle">Select the perfect size for your space</p>
      </div>
      <div className="size-grid">
        {SIZES.map((size) => (
          <div
            key={size.id}
            className={`size-option ${selectedSize === size.id ? 'active' : ''}`}
            onClick={() => onSizeChange(size.id)}
          >
            <div className="size-name">{size.name}</div>
            <div className="size-dimensions">{size.dimensions}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SizeSelection
