export function notFound(req, res, next) {
    res.status(404).json({ message: 'Route not found' });
  }
  
  export function errorHandler(err, req, res, next) {
    console.error('❌', err);
    if (err.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    if (err.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
    res.status(500).json({ message: 'Server error' });
  }