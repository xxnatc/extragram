module.exports = exports = function(err, res) {
  console.error(err);
  res.status(500).json({ msg: 'Database error' });
};
