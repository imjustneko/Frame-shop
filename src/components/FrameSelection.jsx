import { FRAMES } from '../constants'

function FrameSelection({ selectedFrame, onFrameChange }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Select Frame Style</h2>
        <p className="card-subtitle">Pick a frame that complements your photo</p>
      </div>
      <div className="frame-grid">
        {FRAMES.map((frame) => (
          <div
            key={frame.id}
            className={`frame-card ${selectedFrame === frame.id ? 'active' : ''}`}
            onClick={() => onFrameChange(frame.id)}
          >
            <div className="frame-visual">
              <div className={`frame-sample-container ${frame.className}`} />
            </div>
            <div className="frame-info">
              <div className="frame-name">{frame.name}</div>
              <div className="frame-price">+${frame.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FrameSelection
