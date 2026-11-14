export function getNextDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getTodayIso() {
  return new Date().toISOString().slice(0, 10);
}

export function formatMoney(amount) {
  return `${Number(amount).toLocaleString('en-US')} ل.س`;
}

export function formatDateArabic(dateString) {
  if (!dateString) return '';
  try {
    return new Intl.DateTimeFormat('ar-SY', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(`${dateString}T12:00:00`));
  } catch {
    return dateString;
  }
}

export function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours} س ${mins} د`;
}
