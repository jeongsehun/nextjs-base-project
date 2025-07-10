# Next.js Base Project

Next.js 프로젝트 개발 시 반복적으로 설정하는 개발 도구들과 설정을 미리 구성한 베이스 템플릿입니다.

## 포함된 기능

- **Next.js 15**: App Router, React 19
- **TypeScript**: 엄격한 타입 체크
- **ESLint + Prettier**: 코드 품질 및 포맷팅
- **Husky + Lint-staged**: Git hooks를 통한 자동화된 코드 검사
- **TailwindCSS**: 유틸리티 CSS 프레임워크
- **Form Management**: React Hook Form + Zod 검증
- **Testing**: Jest + Testing Library
- **Bundle Analyzer**: 번들 크기 분석
- **VS Code 설정**: 개발 환경 최적화
- **Cursor Rules**: AI 개발 도구 최적화

## Quick Start

폼 관리 예시를 확인하려면:

```bash
yarn dev
# http://localhost:3000/form-demo 에서 예시 확인
```

## Form Management

React Hook Form + Zod를 사용한 타입 안전한 폼 관리:

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema, type SignInFormData } from '@/lib/validations';
import { Input } from '@/components/ui/input';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data); // { email: string, password: string, rememberMe?: boolean }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        label="이메일"
        register={register('email')}
        error={errors.email}
        required
      />
      <Input
        type="password"
        label="비밀번호"
        register={register('password')}
        error={errors.password}
        required
      />
    </form>
  );
}
```

## Bundle Analysis

```bash
# 번들 크기 분석
yarn analyze
```

## Development Tools

### ESLint & Prettier

```bash
# 린팅 실행
yarn lint

# 자동 수정 가능한 린트 문제 해결
yarn lint:fix

# 코드 포맷팅
yarn format

# 포맷팅 체크
yarn format:check

# 타입 체크
yarn type-check

# 타입 체크 (Watch 모드)
yarn type-check:watch

# 모든 검사 실행 (type + lint + test + format)
yarn check-all

# 빌드 결과물 정리
yarn clean
```

### Testing

```bash
# 테스트 실행
yarn test

# 테스트 (Watch 모드)
yarn test:watch

# 커버리지 포함 테스트
yarn test:coverage

# CI용 테스트
yarn test:ci
```

### Code Quality Automation

```bash
# Pre-commit 검사 수동 실행
yarn pre-commit
```

**Git Hooks:**

- **Pre-commit**: 스테이지된 파일에 ESLint fix 및 Prettier format 자동 실행

## Deploy on Vercel

[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하여 배포할 수 있습니다.

자세한 내용은 [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)을 참고하세요.
