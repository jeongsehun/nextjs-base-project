'use client';

import { cn } from '@/lib/utils';
import type { TextareaProps } from '@/types/form';
import { forwardRef } from 'react';
import { FormField } from './form-field';

/**
 * 기본 Textarea 컴포넌트
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, required, description, register, ...props }, ref) => {
    const textareaElement = (
      <textarea
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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
          {textareaElement}
        </FormField>
      );
    }

    return textareaElement;
  }
);

Textarea.displayName = 'Textarea';
