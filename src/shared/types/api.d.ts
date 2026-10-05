export interface IErrorResponse {
  status: false;
  message: string;
  code: number;
}

export interface ISuccessResponse<T> {
  status: true;
  message?: string;
  payload: T;
}

export type IApiResponse<T> = IErrorResponse | ISuccessResponse<T>;
