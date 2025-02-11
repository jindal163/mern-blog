// Custom error class for better error handling and readability
export class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Error handler function that returns a custom error
export const errorHandler = (statusCode, message) => {
    return new CustomError(statusCode, message);
}