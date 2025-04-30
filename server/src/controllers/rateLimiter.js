import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
  
  const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(100, '1 h'), // 100 requests per 1 hour
    analytics: true,
  });

export {ratelimit}