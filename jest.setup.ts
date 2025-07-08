import '@testing-library/jest-dom';

// 기본적인 브라우저 API mock들

// IntersectionObserver mock (많은 라이브러리에서 사용)
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
(window as any).IntersectionObserver = mockIntersectionObserver;

// window.matchMedia mock (반응형 디자인 테스트용)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
