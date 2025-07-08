import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 클래스명을 조건부로 결합하고 Tailwind CSS 충돌을 해결하는 유틸리티 함수
 *
 * @param inputs - 클래스명들 (문자열, 조건부 클래스, undefined, null 등)
 * @returns 병합된 클래스명 문자열
 *
 * @example
 * cn('px-2 py-1', 'bg-red-500') // 'px-2 py-1 bg-red-500'
 * cn('px-2', condition && 'bg-blue-500') // 조건부 클래스
 * cn('p-4', 'p-2') // 'p-2' (마지막 패딩이 우선)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
