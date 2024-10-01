const authorizeEmployee = (req, res, next) => {
    const validDesignations = [
      'Employee',
      'Software Engineer',
      'SDE',
      'Developer',
      'QA Engineer',
      'Support Engineer',
      'Manager',
      'Hr'
    ];
  
    if (!validDesignations.includes(req.user.designation)) {
      return res.status(403).json({ message: 'Access denied. Not an authorized employee.' });
    }
  
    next();
  };
  
  const authorizeManagerOrHR = (req, res, next) => {
    if (req.user.designation !== 'Manager' && req.user.designation !== 'HR') {
      return res.status(403).json({ message: 'Access denied. Not authorized.' });
    }
    next();
  };
  
  const authorizeManager = (req, res, next) => {
    if (req.user.designation !== 'Manager') {
      return res.status(403).json({ message: 'Access denied. Not a manager.' });
    }
    next();
  };
  
  const authorizeHR = (req, res, next) => {
    if (req.user.designation !== 'HR') {
      return res.status(403).json({ message: 'Access denied. Not HR.' });
    }
    next();
  };
  
  // Export all functions as an object
  module.exports = {
    authorizeEmployee,
    authorizeManagerOrHR,
    authorizeManager,
    authorizeHR
  };
  