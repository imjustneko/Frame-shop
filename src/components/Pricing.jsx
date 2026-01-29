import { SIZES, FRAMES, SIZE_PRICING } from '../constants'

function Pricing({ image, selectedSize, selectedFrame, onAddToCart }) {
  const size = SIZES.find((s) => s.id === selectedSize)
  const frame = FRAMES.find((f) => f.id === selectedFrame)
  const basePrice = SIZE_PRICING[selectedSize]
  const framePrice = frame.price
  const total = basePrice + framePrice

  return (
    <div className="pricing-card">
      <div className="pricing-title">Order Summary</div>
      <div className="pricing-row">
        <span className="pricing-label">Size</span>
        <span className="pricing-value">{size.name}</span>
      </div>
      <div className="pricing-row">
        <span className="pricing-label">Frame Style</span>
        <span className="pricing-value">{frame.name}</span>
      </div>
      <div className="pricing-row">
        <span className="pricing-label">Print</span>
        <span className="pricing-value">${basePrice.toFixed(2)}</span>
      </div>
      <div className="pricing-row">
        <span className="pricing-label">Frame (3cm border)</span>
        <span className="pricing-value">${framePrice.toFixed(2)}</span>
      </div>
      <div className="pricing-row pricing-total">
        <span className="total-label">Total</span>
        <span className="total-value">${total.toFixed(2)}</span>
      </div>
      <button
        className="cta-button"
        disabled={!image}
        onClick={onAddToCart}
      >
        {image ? 'Add to Cart' : 'Upload Photo to Continue'}
      </button>
      <div className="trust-icons">
        <div className="trust-item">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Free Shipping</span>
        </div>
        <div className="trust-item">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>30-Day Returns</span>
        </div>
        <div className="trust-item">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Satisfaction Guaranteed</span>
        </div>
      </div>
    </div>
  )
}

export default Pricing
