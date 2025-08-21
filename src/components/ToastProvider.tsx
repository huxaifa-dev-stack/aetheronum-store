import { useEffect } from 'react';
import { toast } from 'sonner';

export function ToastProvider() {
  useEffect(() => {
    const handleToast = (event: CustomEvent) => {
      const { title, description, type } = event.detail;
      
      switch (type) {
        case 'success':
          toast.success(title, { description });
          break;
        case 'error':
          toast.error(title, { description });
          break;
        case 'info':
          toast.info(title, { description });
          break;
        default:
          toast(title, { description });
      }
    };

    window.addEventListener('showToast', handleToast as EventListener);
    
    return () => {
      window.removeEventListener('showToast', handleToast as EventListener);
    };
  }, []);

  return null;
}