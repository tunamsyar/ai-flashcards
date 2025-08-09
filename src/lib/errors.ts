export class AppError extends Error {
  public statusCode: number;
  public code: string;

  constructor(message: string, statusCode = 500, code = "Internal Error") {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.code = code;
  }
}

export const Errors = {
  BadRequest: (msg = 'Bad Request') => new AppError(msg, 400, "Bad Request"),
  NotFound: (msg = "Not Found") => new AppError(msg, 404, "NOT_FOUND"),
  Unauthorized: (msg = "Unauthorized") => new AppError(msg, 401, "UNAUTHORIZED"),
  Forbidden: (msg = "Forbidden") => new AppError(msg, 403, "FORBIDDEN"),
  ServerError: (msg = "Internal Server Error") => new AppError(msg, 500, "SERVER_ERROR"),
};

export function handleApiError(error: unknown) {
  if (error instanceof AppError) {
    return {
      status: error.statusCode,
      body: { error: error.message, code: error.code }
    }
  }

  if (error instanceof Error) {
    return {
      status: 500,
      body: { error: error.message, code: "INTERNAL_ERROR"}
    }
  }

  return {
    status: 500,
    body: { error: 'Unknown error occured', code: 'INTERNAL_ERROR'}
  }
}
