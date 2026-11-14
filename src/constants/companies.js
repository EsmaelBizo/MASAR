export const COMPANIES = [
  {
    id: 'qawafel',
    name: 'قوافل الشام للبولمان',
    short: 'ق',
    color: '#163A5F',
    bg: '#E8EFF6',
    rating: '4.9',
    tag: 'فئة رجال الأعمال VIP 2+1',
    busClass: 'vip',
    features: ['مكيّف', 'Wi-Fi', 'شحن USB', 'ضيافة ومياه'],
    about: 'بولمانات ملكية حديثة بنظام مقاعد (2+1) الواسعة ورحلات مباشرة عبر الأوتوستراد الدولي.',
  },
  {
    id: 'palmyra',
    name: 'أجنحة تدمر الملكية',
    short: 'ت',
    color: '#C88A32',
    bg: '#FBF3E4',
    rating: '4.8',
    tag: 'الأكثر حجزاً (VIP 2+1)',
    busClass: 'vip',
    features: ['مكيّف', 'شحن USB', 'ضيافة ومياه'],
    about: 'أسطول بولمانات VIP فاخر يربط المحافظات السورية بمواعيد دقيقة وراحة استثنائية.',
  },
  {
    id: 'shahba',
    name: 'الشهباء إكسبرس',
    short: 'ش',
    color: '#2E6F5E',
    bg: '#E6F0EC',
    rating: '4.7',
    tag: 'بولمان سياحي (2+2)',
    busClass: 'standard',
    features: ['مكيّف', 'Wi-Fi', 'شحن USB'],
    about: 'رحلات يومية منتظمة ببولمانات سياحية حديثة وأسعار مدروسة تناسب العائلات والطلاب.',
  },
  {
    id: 'darb',
    name: 'درب الساحل للنقل',
    short: 'د',
    color: '#B83B3B',
    bg: '#FCEAEA',
    rating: '4.6',
    tag: 'مواعيد مرنة (2+2)',
    busClass: 'standard',
    features: ['مكيّف', 'شحن USB'],
    about: 'شبكة خطوط واسعة تربط دمشق وحلب بمدن الساحل والمنطقة الوسطى على مدار الساعة.',
  },
];

export function getCompanyById(id) {
  return COMPANIES.find((c) => c.id === id) || COMPANIES[0];
}
