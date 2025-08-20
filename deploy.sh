#!/bin/bash

# Palera1n Web Editor Deployment Script
echo "🚀 Starting Palera1n Web Editor deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy: Palera1n Web Editor v1.0.0

- Modern copy-paste HTML editor
- Pattern processing for images, buttons, and AdSense
- Responsive design with Palera1n branding
- Vercel deployment ready
- Centered H1 tags and improved typography"

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 Adding remote repository..."
    git remote add origin https://github.com/Insfra-tst/PaleGen.git
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main

echo "✅ Deployment completed!"
echo ""
echo "🌐 Next steps:"
echo "1. Go to https://vercel.com"
echo "2. Import your GitHub repository: Insfra-tst/PaleGen"
echo "3. Deploy automatically or use: vercel --prod"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT.md" 