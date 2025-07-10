'use client';

import { cn } from '@/lib/utils';
import type { FormFieldProps } from '@/types/form';

interface FormFieldWrapperProps extends FormFieldProps {
  children: React.ReactNode;
}

/**
 * 폼 필드를 감싸는 래퍼 컴포넌트
 */
export function FormField({
  children,
  label,
  error,
  required,
  description,
  className,
}: FormFieldWrapperProps) {
  return (
    <div className={cn('space-y-2', className)}>
      {label && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      {children}
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
      {error && <p className="text-sm font-medium text-destructive">{error.message}</p>}
    </div>
  );
}
