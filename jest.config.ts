import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Next.js 앱의 경로를 제공하여 next.config.js와 .env 파일을 로드합니다
  dir: './',
});

// Jest에 전달할 사용자 정의 설정
const config: Config = {
  // Jest가 테스트를 실행할 환경
  testEnvironment: 'jsdom',

  // 테스트 전에 실행할 설정 파일
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // 모듈 경로 매핑 (Next.js의 absolute imports와 module path aliases)
  moduleNameMapper: {
    // 절대 경로 임포트 지원
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
  },

  // 테스트 파일 패턴
  testMatch: ['**/__tests__/**/*.(ts|tsx|js|jsx)', '**/?(*.)(test|spec).(ts|tsx|js|jsx)'],

  // 테스트 제외 패턴
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/out/',
    '<rootDir>/dist/',
  ],

  // 변환 무시 패턴 (일부 node_modules는 변환이 필요할 수 있음)
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],

  // 커버리지 설정
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/app/**/layout.tsx',
    '!src/app/**/loading.tsx',
    '!src/app/**/not-found.tsx',
    '!src/app/**/error.tsx',
    '!src/app/globals.css',
  ],

  // 커버리지 임계값
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // 커버리지 리포터
  coverageReporters: ['text', 'lcov', 'html'],

  // 테스트 실행 시 상세 정보 출력
  verbose: true,

  // 테스트 병렬 실행
  maxWorkers: '50%',
};

// createJestConfig는 비동기 함수로, next/jest가 Babel, Webpack 등과 같은
// 필요한 configuration을 로드할 수 있도록 합니다
export default createJestConfig(config);
