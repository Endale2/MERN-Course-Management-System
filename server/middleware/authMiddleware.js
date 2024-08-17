import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const protect = async (req, res, next) => {
  let token;

  // Check if the cookie header exists
  if (req.headers.cookie) {
    // Extract the token from the cookie header (assuming it's stored under a key like 'token=')
    const cookies = req.headers.cookie.split(';');
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split('=');
      if (key === 'token') {
        token = value;
        break;
      }
    }

    // If the token is found, proceed with verification
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = await User.findById(decoded.id).select('-password'); // Attach user to request
        return next(); // Call the next middleware
      } catch (error) {
        return res.status(401).json({ message: 'Not authorized, token failed' });
      }
    }
  }

  // If no token is found
  return res.status(401).json({ message: 'Not authorized, no token' });
};

export { protect };
