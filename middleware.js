const handleRequest = (req, res, next) => {
  const currentTime = Date.now();
  const sessionTimeout = 60 * 1000;
  if (
    !req.session.lastRequestTime ||
    currentTime - req.session.lastRequestTime > sessionTimeout
  ) {
    req.session.lastRequestTime = currentTime;
    req.session.counter = 1;
  } else {
    req.session.lastRequestTime = currentTime;
    req.session.counter++;
  }
  if (req.session.counter > 10) {
    res.status(429).send("Too Many Requests");
  } else {
    next();
  }
};

module.exports = { handleRequest };