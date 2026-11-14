import cityDamascus from '../../../assets/images/city-damascus.svg';
import cityAleppo from '../../../assets/images/city-aleppo.svg';
import cityLatakia from '../../../assets/images/city-latakia.svg';
import cityHoms from '../../../assets/images/city-homs.svg';

export const HERO_METRICS = [
  { id: 'cities', value: '14', label: 'محافظة وكراج معتمد' },
  { id: 'companies', value: '2+1', label: 'بولمانات رجال الأعمال VIP' },
  { id: 'trips', value: '+40', label: 'رحلة يومية بين المحافظات' },
  { id: 'access', value: 'QR', label: 'تذكرة إلكترونية دون إنترنت' },
];

export const FEATURED_DESTINATIONS = [
  {
    id: 'damascus',
    name: 'دمشق',
    description: 'كراج القابون الدولي — عاصمة الياسمين',
    image: cityDamascus,
  },
  {
    id: 'aleppo',
    name: 'حلب',
    description: 'كراج الراموسة — قلعة الشهباء',
    image: cityAleppo,
  },
  {
    id: 'latakia',
    name: 'اللاذقية',
    description: 'كراج البولمان الجديد — عروس الساحل',
    image: cityLatakia,
  },
  {
    id: 'homs',
    name: 'حمص',
    description: 'كراج البولمان الشمالي — عقدة المواصلات',
    image: cityHoms,
  },
];

export const PROCESS_STEPS = [
  {
    id: 'step-1',
    icon: 'search',
    number: '01',
    title: 'حدد مسارك وموعدك',
    description: 'اختر محافظة الانطلاق والوصول وتاريخ السفر عبر محرك البحث السريع.',
  },
  {
    id: 'step-2',
    icon: 'seat',
    number: '02',
    title: 'اختر مقعدك الفعلي (2+1)',
    description: 'شاهد مخطط البولمان التفاعلي واختر مقعدك الفردي أو المزدوج بدقة.',
  },
  {
    id: 'step-3',
    icon: 'ticket',
    number: '03',
    title: 'احصل على تذكرتك الرقمية',
    description: 'تصدر تذكرتك فوراً برمز QR جاهز للمسح عند بوابة البولمان في الكراج.',
  },
];
