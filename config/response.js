const response = (statusCode, data, message, res) => {
  res.status(statusCode).json({
    payload: {
      status_Code: statusCode,
      message: message,
      data: data,
    },
  });
};
