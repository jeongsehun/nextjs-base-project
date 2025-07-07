// 공통 타입 정의

// API 응답 타입
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// 페이지네이션 타입
export interface PaginationParams {
  page: number;
  limit: number;
  total?: number;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// 공통 컴포넌트 props 타입
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// 로딩 상태 타입
export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

// 폼 관련 타입
export interface FormErrors {
  [key: string]: string | undefined;
}

// 환경 변수 타입 (필요에 따라 확장)
export interface Environment {
  NODE_ENV: 'development' | 'production' | 'test';
  NEXT_PUBLIC_API_URL?: string;
}

// 유틸리티 타입들
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type NonEmptyArray<T> = [T, ...T[]];

// ID 타입
export type ID = string | number;

// 정렬 관련 타입
export type SortDirection = 'asc' | 'desc';
export interface SortParams {
  field: string;
  direction: SortDirection;
}

// 필터 관련 타입
export interface FilterParams {
  [key: string]: string | number | boolean | null | undefined;
}
