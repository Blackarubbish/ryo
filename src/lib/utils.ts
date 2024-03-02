import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// 类名管理
export function classManage(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
