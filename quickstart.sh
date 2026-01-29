#!/bin/bash
# Frame Studio - Quick Start Script
# This script helps you get started with Frame Studio

echo "🎨 Frame Studio - Quick Start"
echo "=========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed."
    echo "Please install Node.js 16+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version:"
node --version
echo ""

# Navigate to project directory
cd "$(dirname "$0")" || exit

echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ npm install failed"
    exit 1
fi

echo "✅ Dependencies installed"
echo ""

# Show available commands
echo "🚀 Available Commands:"
echo "─────────────────────"
echo ""
echo "  Development Server:"
echo "    npm run dev"
echo "    → Starts local development server on http://localhost:5173"
echo "    → Hot reloading on file changes"
echo ""
echo "  Production Build:"
echo "    npm run build"
echo "    → Creates optimized production build in dist/"
echo ""
echo "  Preview Production Build:"
echo "    npm run preview"
echo "    → Preview production build locally"
echo ""

# Offer to start dev server
echo "Would you like to start the development server now? (y/n)"
read -r response

if [[ "$response" =~ ^[Yy]$ ]]; then
    echo ""
    echo "Starting development server..."
    echo "Press Ctrl+C to stop"
    echo ""
    npm run dev
else
    echo ""
    echo "To get started, run:"
    echo "  npm run dev"
    echo ""
    echo "Happy framing! 🎨"
fi
