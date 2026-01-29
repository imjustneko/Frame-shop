# 🖼️ Frame Studio

A professional photo framing web application where customers can upload photos, customize frames, and see a real-time preview before ordering.

## Features

- **📸 Image Upload** - Upload your photos easily
- **🎨 Frame Selection** - Choose from 8 premium frame styles:
  - Gold Luxury
  - Walnut Wood
  - Silver Modern
  - Natural Oak
  - Classic Black
  - Modern White
  - Minimalist Black
  - Vintage Cream

- **📐 Multiple Sizes** - Available sizes:
  - 8×10", 11×14", 12×18", 16×20"
  - A4 & A3

- **⚙️ Resolution Control** - Adjust DPI (dots per inch) for your photos

- **👁️ Live Preview** - See exactly how your framed photo will look

- **💰 Instant Pricing** - Automatic price calculation based on size and frame selection

## Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** CSS
- **Runtime:** Node.js

## Quick Start

### Prerequisites
- Node.js (v14 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/imjustneko/Frame-shop.git
cd frame
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## How It Works

1. Upload a photo
2. Select your preferred frame style
3. Choose the size you want
4. Adjust the resolution (DPI)
5. Review the preview with 3cm borders
6. Add to cart with automatic pricing calculation

## Project Structure

```
src/
├── App.jsx                 # Main application component
├── main.jsx               # Entry point
├── constants.js           # Frame styles, sizes, and pricing
├── index.css              # Global styles
└── components/
    ├── Header.jsx         # Top navigation
    ├── ImageUpload.jsx    # Photo upload handler
    ├── ResolutionInput.jsx# DPI adjustment
    ├── SizeSelection.jsx  # Frame size picker
    ├── FrameSelection.jsx # Frame style picker
    ├── Preview.jsx        # Live preview display
    └── Pricing.jsx        # Price information
```

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Author

Created by [imjustneko](https://github.com/imjustneko)
