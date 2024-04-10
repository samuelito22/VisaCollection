export interface SuccessResponse<T = any> {
    data: T;
    message: string;
    status: 'success';
}

export interface ErrorResponse {
    message: string;
    status: 'fail' | 'error';
}

export interface DevErrorResponse extends ErrorResponse {
    error?: Error;
    stack?: string;
  }
  

export type ApiResponse<T = any> = SuccessResponse<T> | ErrorResponse | DevErrorResponse;
