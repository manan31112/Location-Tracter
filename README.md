# 📍 Real-Time Location Tracker

A real-time location tracking web application built with Node.js, Express, Socket.IO, and Leaflet maps. Track and share locations in real-time with multiple users on an interactive map.

## ✨ Features

- 🗺️ **Interactive Map**: Powered by Leaflet and OpenStreetMap
- 📍 **Real-Time Location Sharing**: Share your location with other users instantly
- 👥 **Multi-User Support**: See all connected users on the map simultaneously
- 🔄 **Live Updates**: Automatic marker updates when users move
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🌐 **Geolocation API**: Utilizes browser's native geolocation capabilities

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Real-Time Communication**: Socket.IO
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Maps**: Leaflet.js with OpenStreetMap tiles
- **Template Engine**: EJS
- **Development**: Nodemon for auto-restart

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- A modern web browser with geolocation support

## 🚀 Installation & Setup

### 1. Clone or Download the Project
```bash
# If you have git
git clone <repository-url>
cd location

# Or download and extract the ZIP file
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```

### 4. Open Your Browser
Navigate to: `http://localhost:3000`

## 📁 Project Structure

```
location/
├── app.js                 # Main server file
├── package.json           # Project dependencies and scripts
├── README.md             # Project documentation
├── public/               # Static files
│   ├── css/
│   │   └── styles.css    # Custom styles
│   └── javascript/
│       └── script.js     # Client-side JavaScript
└── views/
    └── index.ejs         # Main HTML template
```

## 🔧 Configuration

### Environment Variables (Optional)
You can customize the port by setting the `PORT` environment variable:

```bash
# Windows
set PORT=8080 && npm start

# Linux/Mac
PORT=8080 npm start
```

### Default Configuration
- **Port**: 3000
- **Map Center**: [0, 0] (initially)
- **Zoom Level**: 15
- **Geolocation Options**:
  - High accuracy: enabled
  - Timeout: 5 seconds
  - Maximum age: 0 (no caching)

## 📱 Usage

1. **Grant Location Permission**: When prompted, allow the browser to access your location
2. **View Your Location**: Your position will appear as a marker on the map
3. **See Other Users**: Other connected users will appear as additional markers
4. **Real-Time Updates**: As users move, their markers update automatically
5. **Automatic Cleanup**: When users disconnect, their markers are removed

## 🔒 Privacy & Security

- Location data is only shared while the browser tab is active
- No location data is stored permanently on the server
- Users are identified only by temporary session IDs
- Location sharing stops when you close the browser tab

## 🌐 Browser Compatibility

### Supported Browsers:
- ✅ Chrome 50+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Required Browser Features:
- Geolocation API support
- WebSocket support
- ES6+ JavaScript support

## 🐛 Troubleshooting

### Common Issues:

#### "Location access denied"
- **Solution**: Enable location services in your browser settings
- **Chrome**: Settings > Privacy and Security > Site Settings > Location
- **Firefox**: Settings > Privacy & Security > Permissions > Location

#### "Cannot connect to server"
- **Solution**: Ensure the server is running on port 3000
- Check if another application is using port 3000
- Try accessing `http://localhost:3000` directly

#### "Map not loading"
- **Solution**: Check your internet connection
- Ensure you're not behind a firewall blocking map tile requests
- Try refreshing the page

#### Dependencies not installing
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 🔧 Development

### Adding New Features
1. **Server-side changes**: Modify `app.js`
2. **Client-side changes**: Modify `public/javascript/script.js`
3. **Styling**: Update `public/css/styles.css`
4. **HTML structure**: Modify `views/index.ejs`

### Socket.IO Events
- `send-location`: Client sends location to server
- `receive-location`: Server broadcasts location to all clients
- `remove-marker`: Server notifies clients to remove disconnected user's marker

### Testing Locally
1. Open multiple browser tabs/windows
2. Allow location access in each
3. Observe real-time marker updates

## 📦 Dependencies

### Production Dependencies
```json
{
  "express": "^5.1.0",      // Web framework
  "ejs": "^3.1.10",         // Template engine
  "socket.io": "^4.8.1"     // Real-time communication
}
```

### Development Dependencies
```json
{
  "nodemon": "^3.1.10"      // Auto-restart during development
}
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

**Manan Chaudhari**
- Email: 22amtics444@gmail.com

## 🙏 Acknowledgments

- [Leaflet](https://leafletjs.com/) for the amazing mapping library
- [OpenStreetMap](https://www.openstreetmap.org/) for free map tiles
- [Socket.IO](https://socket.io/) for real-time communication
- [Express.js](https://expressjs.com/) for the web framework

## 📈 Future Enhancements

- [ ] User authentication and profiles
- [ ] Location history tracking
- [ ] Custom marker icons for different users
- [ ] Group/room functionality
- [ ] Distance calculations between users
- [ ] Offline map caching
- [ ] Mobile app development
- [ ] Database integration for persistent data

---

⭐ **If you found this project helpful, please give it a star!** ⭐
