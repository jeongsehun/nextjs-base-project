import { z } from 'zod';

// 기본 검증 스키마들
export const emailSchema = z
  .string()
  .min(1, '이메일을 입력해주세요.')
  .email('올바른 이메일 형식이 아닙니다.');

export const passwordSchema = z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.');

export const nameSchema = z
  .string()
  .min(2, '이름은 최소 2자 이상이어야 합니다.')
  .max(50, '이름은 50자를 초과할 수 없습니다.');

// 자주 사용되는 폼 스키마들
export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
  rememberMe: z.boolean().optional(),
});

export const signUpSchema = z
  .object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

// 타입 추출
export type SignInFormData = z.infer<typeof signInSchema>;
export type SignUpFormData = z.infer<typeof signUpSchema>;
