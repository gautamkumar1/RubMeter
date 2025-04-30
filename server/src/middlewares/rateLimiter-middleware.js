import {ratelimit} from '../controllers/rateLimiter.js';


const rateLimiterMiddleware = async (req, res, next) => {
  const ip = req.ip || 'anonymous'; // fallback for testing locally

  const { success, limit, remaining, reset } = await ratelimit.limit(ip);

  res.setHeader('X-RateLimit-Limit', limit);
  res.setHeader('X-RateLimit-Remaining', remaining);
  res.setHeader('X-RateLimit-Reset', reset);

  if (!success) {
    return res.status(429).json({
      message: 'Too many requests. Please try again later.',
    });
  }

  next();
};

export default rateLimiterMiddleware;
