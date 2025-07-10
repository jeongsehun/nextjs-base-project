import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

// 폼 필드 공통 Props
export interface FormFieldProps {
  label?: string;
  error?: FieldError;
  required?: boolean;
  description?: string;
  className?: string;
}

// Input 컴포넌트 Props
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, FormFieldProps {
  register?: UseFormRegisterReturn;
}

// Textarea 컴포넌트 Props
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    FormFieldProps {
  register?: UseFormRegisterReturn;
}

// Select 컴포넌트 Props
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>, FormFieldProps {
  register?: UseFormRegisterReturn;
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
}

// Checkbox 컴포넌트 Props
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement>, FormFieldProps {
  register?: UseFormRegisterReturn;
}

// 폼 제출 상태
export interface FormSubmitState {
  isSubmitting: boolean;
  isValid: boolean;
  isDirty: boolean;
}

// API 응답 공통 타입
export interface FormResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}
