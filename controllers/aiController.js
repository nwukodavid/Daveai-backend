exports.handleMessage = (req, res) => {
  res.json({ reply: 'AI response to message (mock)' });
};

exports.handleVoice = (req, res) => {
  res.json({ reply: 'AI transcription and response to voice note (mock)' });
};

exports.handleImage = (req, res) => {
  res.json({ reply: 'AI interpretation of image (mock)' });
};
