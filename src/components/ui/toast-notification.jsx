import { useToastStore } from '../../store/use-toast-store';
import { SairnaIcon } from './sairna-icon';
import { cn } from '../../lib/cn';

export function ToastNotification() {
  const toast = useToastStore((state) => state.toast);

  if (!toast) return null;

  const isError = toast.type === 'error';

  return (
    <div
      key={toast.message}
      id="toast"
      className={cn(
        'animate-toast-in fixed bottom-6 left-6 z-[300] flex max-w-[calc(100%-48px)] items-center gap-2.5 rounded-2xl border border-white/20 px-5 py-3.5 text-[12px] font-bold text-white shadow-[0_22px_50px_rgba(22,58,95,0.28)] backdrop-blur-md pointer-events-none [&>svg]:flex-none',
        isError ? 'bg-danger/95' : 'bg-secondary/95'
      )}
      data-type={toast.type}
      role="status"
      aria-live="polite"
    >
      <SairnaIcon name={isError ? 'info' : 'check-circle'} size={19} />{' '}
      {toast.message}
    </div>
  );
}
