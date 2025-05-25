exports.handleWhatsApp = (req, res) => {
  const incoming = req.body.Body;
  const response = `You said: ${incoming}`;
  res.set('Content-Type', 'text/xml');
  res.send(`<Response><Message>${response}</Message></Response>`);
};
