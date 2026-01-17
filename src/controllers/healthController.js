const healthCheck = async (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Node JS Backend Rest API Services is Running",
  });
};

export { healthCheck };
