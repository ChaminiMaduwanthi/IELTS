# Palera1n Web Page Editor

A modern, responsive web page editor that allows you to create beautiful HTML pages with copy-paste functionality. Built with vanilla JavaScript and modern CSS, featuring Palera1n branding and advanced pattern processing.

## 🌟 Features

- **Copy-Paste HTML Processing**: Simply paste your HTML content and let the editor process it
- **Pattern Recognition**: Automatic processing of special patterns for images, download buttons, and AdSense
- **Modern Template**: Beautiful, responsive design with Palera1n branding
- **Real-time Preview**: See your changes instantly before generating the final HTML
- **Mobile-Friendly**: Fully responsive design that works on all devices
- **Pattern Support**:
  - `{Download Text - URL}` for animated download buttons
  - `[IMAGE:Alt Text|URL]` for centered images
  - `[ADSENSE]` for AdSense integration

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Insfra-tst/PaleGen.git
   cd PaleGen
   ```

2. **Start the development server**
   ```bash
   python3 -m http.server 8000
   ```

3. **Open your browser**
   Navigate to `http://localhost:8000`

### Vercel Deployment

1. **Install Vercel CLI** (if not already installed)
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

## 📝 Usage

### Basic Workflow

1. **Paste HTML Content**: Copy your HTML content and paste it into the textarea
2. **Process Content**: Click "Process Content" to extract and clean the HTML
3. **Edit Content**: Modify the content in the editor if needed
4. **Generate HTML**: Click "Generate HTML" to create the final file
5. **Download**: Save the generated HTML file to your computer

### Pattern Examples

#### Download Buttons
```
{Download Palera1n - https://github.com/palera1n/palera1n/releases}
```
Generates an animated download button with the specified URL.

#### Images
```
[IMAGE:Palera1n Gui|https://palera1n.com/img/gui.png]
```
Creates a centered image with the specified alt text and URL.

#### AdSense
```
[ADSENSE]
```
Inserts AdSense code at the specified location.

## 🎨 Template Features

- **Centered H1 Tags**: All main headings are automatically centered with gradient text
- **Modern Typography**: Clean, readable fonts with proper spacing
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Palera1n Branding**: Consistent with the Palera1n brand colors and style
- **White Background**: Clean, professional appearance
- **Reduced Width**: 800px max-width for better readability

## 📁 Project Structure

```
Palera1n/
├── index.html          # Main application file
├── template.html       # HTML template for generated pages
├── adsense.js          # AdSense integration script
├── vercel.json         # Vercel deployment configuration
├── package.json        # Project metadata and scripts
├── README.md           # Project documentation
└── DEPLOYMENT.md       # Deployment instructions
```

## 🔧 Configuration

### Customizing the Template

The main template is located in `template.html`. You can customize:

- **Colors**: Modify the CSS variables for brand colors
- **Typography**: Adjust font sizes and spacing
- **Layout**: Change the container width and padding
- **Branding**: Update the logo and navigation links

### AdSense Configuration

Edit `adsense.js` to configure your AdSense settings:

```javascript
// Replace with your actual AdSense publisher ID
const AD_CLIENT = 'ca-pub-1234567890123456';
const AD_SLOT = '1234567890';
```

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the static site configuration
3. Deploy with zero configuration

### Manual Deployment

1. **Build the project** (if needed)
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built for the Palera1n jailbreak community
- Inspired by modern web development practices
- Uses Font Awesome for icons
- Google Fonts for typography

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Contact the Palera1n team
- Check the documentation

---

**Made with ❤️ for the jailbreak community** 