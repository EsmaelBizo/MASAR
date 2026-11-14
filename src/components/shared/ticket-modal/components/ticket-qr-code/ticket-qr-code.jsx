export function TicketQrCode() {
  return (
    <div className="relative shrink-0 overflow-hidden rounded-lg">
      <svg
        viewBox="0 0 84 84"
        className="size-[76px] shrink-0 rounded-lg border border-border bg-white p-1.5 text-basalt"
        role="img"
        aria-label="رمز الاستجابة السريعة QR للتذكرة الرقمية"
      >
        <rect
          x="6"
          y="6"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <rect x="12" y="12" width="12" height="12" fill="currentColor" />
        <rect
          x="54"
          y="6"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <rect x="60" y="12" width="12" height="12" fill="currentColor" />
        <rect
          x="6"
          y="54"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <rect x="12" y="60" width="12" height="12" fill="currentColor" />
        <path
          d="M36 8h6v6h-6zM44 14h6v12h-6zM36 26h8v6h-8zM8 36h12v6H8zM26 36h10v10H26zM42 36h12v6H42zM60 36h18v6H60zM36 48h10v8H36zM52 46h10v10H52zM68 48h10v12H68zM38 62h8v16h-8zM52 64h14v6H52zM58 72h20v6H58z"
          fill="currentColor"
        />
      </svg>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-1 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_8px_#C88A32] animate-qr-scan"
      />
    </div>
  );
}

export default TicketQrCode;
