const cors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
};

const error = (error, req, res, next) => {
  const status = error.statusCode || 500;
  const {
    message,
    data
  } = error;
  res.status(status).json({
    message,
    data
  });
};


module.exports = {
  cors,
  error
};