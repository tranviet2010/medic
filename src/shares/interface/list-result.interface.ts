export interface ListResult<T> {
  data: T[];
  total: number;
  page: number;
  lastPage: number;
}
