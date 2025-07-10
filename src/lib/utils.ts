import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Tailwind CSS 클래스를 병합하는 유틸리티 함수
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 폼 에러 메시지를 포맷팅하는 유틸리티 함수
 */
export function formatFormError(error: unknown): string {
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message;
  return '알 수 없는 오류가 발생했습니다.';
}

/**
 * 객체의 빈 필드를 제거하는 유틸리티 함수
 */
export function removeEmptyFields<T extends Record<string, unknown>>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== '' && value != null)
  ) as Partial<T>;
}
