
export const FRAME_BORDER_CM = 3
export const CM_TO_INCH = 0.393701
export const PIXELS_PER_INCH = 96 

export const SIZES = [
  { id: '8x10', name: '8×10"', dimensions: '8" × 10"', width: 8, height: 10 },
  { id: '11x14', name: '11×14"', dimensions: '11" × 14"', width: 11, height: 14 },
  { id: '12x18', name: '12×18"', dimensions: '12" × 18"', width: 12, height: 18 },
  { id: '16x20', name: '16×20"', dimensions: '16" × 20"', width: 16, height: 20 },
  { id: 'a4', name: 'A4', dimensions: '210×297mm', width: 8.27, height: 11.69 },
  { id: 'a3', name: 'A3', dimensions: '297×420mm', width: 11.69, height: 16.54 }
]


export const FRAMES = [
  { id: 'gold-luxury', name: 'Gold Luxury', price: 85, className: 'frame-gold-luxury' },
  { id: 'walnut', name: 'Walnut Wood', price: 65, className: 'frame-walnut' },
  { id: 'silver', name: 'Silver Modern', price: 55, className: 'frame-silver' },
  { id: 'oak', name: 'Natural Oak', price: 58, className: 'frame-oak' },
  { id: 'classic-black', name: 'Classic Black', price: 45, className: 'frame-classic-black' },
  { id: 'modern-white', name: 'Modern White', price: 42, className: 'frame-modern-white' },
  { id: 'minimal', name: 'Minimalist Black', price: 38, className: 'frame-minimal' },
  { id: 'cream', name: 'Vintage Cream', price: 72, className: 'frame-cream' }
]

export const SIZE_PRICING = {
  '8x10': 35,
  '11x14': 48,
  '12x18': 55,
  '16x20': 68,
  'a4': 38,
  'a3': 52
}


export const FRAME_STYLES = {
  'classic-black': {
    borderColor: '#1a1a1a',
    background: 'none',
    boxShadow: 'inset 0 0 0 2px #333'
  },
  'modern-white': {
    borderColor: '#ffffff',
    background: 'none',
    boxShadow: '0 0 0 1px #e0e0e0, inset 0 0 0 2px #f0f0f0'
  },
  'gold-luxury': {
    borderColor: '#D4A574',
    background: 'linear-gradient(135deg, #E5C9A0, #D4A574, #C9955C)',
    boxShadow: 'inset 0 0 0 3px #B8935A'
  },
  'walnut': {
    borderColor: '#5D4037',
    background: 'linear-gradient(90deg, #6D4C41, #5D4037, #4E342E)',
    boxShadow: 'inset 0 0 0 2px #3E2723'
  },
  'silver': {
    borderColor: '#B8B8B8',
    background: 'linear-gradient(135deg, #D3D3D3, #B8B8B8)',
    boxShadow: 'inset 0 0 0 2px #999'
  },
  'oak': {
    borderColor: '#D4A574',
    background: 'linear-gradient(90deg, #DDB892, #D4A574)',
    boxShadow: 'inset 0 0 0 2px #C9955C'
  },
  'minimal': {
    borderColor: '#000000',
    background: 'none',
    boxShadow: 'none'
  },
  'cream': {
    borderColor: '#F5F1E8',
    background: 'linear-gradient(135deg, #F8F6F1, #F5F1E8)',
    boxShadow: 'inset 0 0 0 3px #E5DFC8'
  }
}
