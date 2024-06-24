import { toast } from "react-toastify";

export function showToastPromise(promise: Promise<unknown> | undefined, keyword: string): void;
export function showToastPromise(
  promise: Promise<unknown>,
  pendingMessage: string,
  successMessage: string,
  errorMessage: string,
): void;
export function showToastPromise(
  promise: Promise<unknown> | undefined,
  arg1: string,
  arg2?: string,
  arg3?: string,
): void {
  if (!promise) {
    return;
  }

  if (arg2 && arg3) {
    toast.promise(promise, {
      pending: arg1,
      success: arg2,
      error: arg3,
    });
  } else {
    toast.promise(promise, {
      pending: `${arg1} 중...`,
      success: `${arg1} 완료되었습니다.`,
      error: `${arg1} 실패하였습니다.`,
    });
  }
}
