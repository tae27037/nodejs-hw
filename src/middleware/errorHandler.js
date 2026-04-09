// import { HttpError } from 'http-errors';

import createHttpError from 'http-errors';
export const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof createHttpError.HttpError) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  const isProd = process.env.NODE_ENV === 'production';

  res.status(500).json({
    message: isProd
      ? 'Something went wrong. Please try again later.'
      : err.message,
  });
};
