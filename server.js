const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const aiRoutes = require('./routes/ai');
const twilioRoutes = require('./routes/twilio');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/ai', aiRoutes);
app.use('/whatsapp', twilioRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to DaveAI Backend');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
