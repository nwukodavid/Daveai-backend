exports.signUp = (req, res) => {
  res.json({ message: 'User signed up (mock)' });
};

exports.signIn = (req, res) => {
  res.json({ message: 'User signed in (mock)' });
};

exports.forgotPassword = (req, res) => {
  res.json({ message: 'Password reset link sent (mock)' });
};
