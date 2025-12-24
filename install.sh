#!/bin/bash

# Portfolio Setup Script
# This script sets up the Omar Al-Saket portfolio website

echo "=================================="
echo "Omar Al-Saket Portfolio Setup"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from: https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "=================================="
echo "Setup Complete! 🎉"
echo "=================================="
echo ""
echo "Next steps:"
echo "1. Run 'npm run dev' to start development server"
echo "2. Run 'npm run build' to create production build"
echo "3. Run 'npm run preview' to preview production build"
echo ""
echo "For deployment instructions, see SETUP_GUIDE.md"
echo ""
