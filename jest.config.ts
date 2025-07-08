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

  // 모듈 경로 매핑 (TypeScript paths와 동일하게)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // 커버리지 수집 대상 (필수적인 것만)
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
};

// createJestConfig는 비동기 함수로, next/jest가 Babel, Webpack 등과 같은
// 필요한 configuration을 로드할 수 있도록 합니다
export default createJestConfig(config);
