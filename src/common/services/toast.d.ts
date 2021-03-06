/// <reference types="react" />
declare const info: (
        content: import('react-toastify').ToastContent,
        options?: import('react-toastify').ToastOptions | undefined
    ) => import('react').ReactText,
    warn: (
        content: import('react-toastify').ToastContent,
        options?: import('react-toastify').ToastOptions | undefined
    ) => import('react').ReactText,
    error: (
        content: import('react-toastify').ToastContent,
        options?: import('react-toastify').ToastOptions | undefined
    ) => import('react').ReactText,
    success: (
        content: import('react-toastify').ToastContent,
        options?: import('react-toastify').ToastOptions | undefined
    ) => import('react').ReactText;
export { error, info, success, warn };
