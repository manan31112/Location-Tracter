import express from 'express';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);    
 
const app = express();
const PORT = 3000;

const server = http.createServer(app);
const io = new Server(server);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id); // Moved this here

  socket.on('send-location', function(data) {
    io.emit('receive-location', {
      id: socket.id,
      ...data
    });
  });



    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        // Notify all clients to remove the marker for this user
        io.emit('remove-marker', { id: socket.id });
    });

});







app.get('/', (req, res) => {
  res.render('index.ejs');
  console.log('Index page requested');
});




server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});