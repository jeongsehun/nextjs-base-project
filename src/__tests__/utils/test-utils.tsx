import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';

// 커스텀 렌더 함수 (향후 Provider 추가 시 확장 가능)
const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { ...options });

// 테스트용 mock 데이터 생성 함수들
export const createMockUser = () => ({
  id: '1',
  name: 'Test User',
  email: 'test@example.com',
});

// 테스트용 이벤트 핸들러 mock
export const createMockEventHandler = () => jest.fn();

// 로컬 스토리지 테스트 헬퍼
export const clearLocalStorage = () => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
      removeItem: jest.fn(() => null),
      clear: jest.fn(() => null),
    },
    writable: true,
  });
};

// API 응답 mock 생성
export const createMockApiResponse = <T,>(data: T) => ({
  data,
  status: 200,
  statusText: 'OK',
});

// 에러 응답 mock 생성
export const createMockErrorResponse = (message: string, status = 500) => ({
  error: {
    message,
    status,
  },
});

// 테스트용 지연 함수
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export * from '@testing-library/react';
export { customRender as render };

// 이 파일은 테스트 유틸리티만 포함하므로 실제 테스트는 없습니다
describe('Test Utils', () => {
  it('should be importable', () => {
    expect(true).toBe(true);
  });
});
