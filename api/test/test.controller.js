const testController = (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  try {
    return res.status(200).json(healthcheck);
  } catch (e) {
    return res.status(503).send(e);
  }
};

module.exports = testController;
