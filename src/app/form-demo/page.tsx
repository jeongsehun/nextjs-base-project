'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signInSchema, type SignInFormData } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function FormDemoPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    // API 호출 예시
    console.log('Form data:', data);

    // 실제 API 호출 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('폼 제출 완료!');
  };

  return (
    <div className="container mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold mb-6">폼 예시</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          type="email"
          label="이메일"
          placeholder="example@email.com"
          register={register('email')}
          error={errors.email}
          required
        />

        <Input
          type="password"
          label="비밀번호"
          placeholder="비밀번호 입력"
          register={register('password')}
          error={errors.password}
          required
        />

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="rememberMe" className="h-4 w-4" {...register('rememberMe')} />
          <label htmlFor="rememberMe" className="text-sm">
            로그인 상태 유지
          </label>
        </div>

        <Button type="submit" loading={isSubmitting} className="w-full">
          로그인
        </Button>
      </form>
    </div>
  );
}
