#!/bin/bash

# Portfolio Website Deployment Script

echo "🚀 Deploying Portfolio Website..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm i -g vercel
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to Vercel
echo "☁️  Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Your portfolio is now live!"
