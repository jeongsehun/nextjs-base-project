'use client';

import { cn } from '@/lib/utils';
import type { InputProps } from '@/types/form';
import { forwardRef } from 'react';
import { FormField } from './form-field';

/**
 * 기본 Input 컴포넌트
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, required, description, register, ...props }, ref) => {
    const inputElement = (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          error &&
            'border-destructive focus-visible:ring-destructive focus-visible:ring-offset-destructive/20',
          className
        )}
        ref={ref}
        {...register}
        {...props}
      />
    );

    // 라벨이나 에러가 있으면 FormField로 감싸기
    if (label || error || description) {
      return (
        <FormField label={label} error={error} required={required} description={description}>
          {inputElement}
        </FormField>
      );
    }

    return inputElement;
  }
);

Input.displayName = 'Input';
