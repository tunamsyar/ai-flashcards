export class ResponseHandler {
  static handleError(response: Response): never {
    let errorData: any = null;
    try {
      errorData = response.json();
    } catch (_) {
      errorData = null;
    }

    let message = "An error occurred.";
    switch (response.status) {
      case 400:
        message = "Bad Request: The request was invalid.";
        break;
      case 401:
        message = "Unauthorized: Invalid or missing credentials.";
        break;
      case 404:
        message = "Not Found: The requested resource does not exist.";
        break;
      case 500:
        message = "Internal Server Error: An unexpected error occurred on the server.";
        break;
      default:
        message = `Error ${response.status}: ${response.statusText}`;
    }

    throw new Error(message);
  }
}
