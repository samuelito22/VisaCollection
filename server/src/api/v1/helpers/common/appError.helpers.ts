export class AppError extends Error {
    statusCode: number;
    status: string;
    isOperational: boolean;
  
    constructor(message: string, statusCode: number) {
      super(message); // Calls the constructor of the base Error class
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true; // Indicates this is a known type of error
  
      // Captures the stack trace to exclude the constructor call for this class
      Error.captureStackTrace(this, this.constructor);
    }
  }
  