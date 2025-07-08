import { cn } from './utils';

describe('cn utility function', () => {
  it('combines class names correctly', () => {
    const result = cn('base-class', 'additional-class');
    expect(result).toContain('base-class');
    expect(result).toContain('additional-class');
  });

  it('handles conditional classes', () => {
    const isActive = true;
    const isDisabled = false;

    const result = cn('base-class', isActive && 'active', isDisabled && 'disabled');

    expect(result).toContain('base-class');
    expect(result).toContain('active');
    expect(result).not.toContain('disabled');
  });

  it('handles undefined and null values', () => {
    const result = cn('base-class', undefined, null, 'valid-class');
    expect(result).toContain('base-class');
    expect(result).toContain('valid-class');
  });

  it('handles tailwind merge conflicts', () => {
    const result = cn('p-4', 'p-2');
    // tailwind-merge가 올바르게 작동하는지 확인
    // 마지막 p-2가 우선되어야 함
    expect(result).toContain('p-2');
    expect(result).not.toContain('p-4');
  });
});
