import { MembershipPlan, TrainingProgram, Trainer, GalleryItem, Testimonial, FaqItem } from '../types';
import {
  GALLERY_PHOTO_1,
  GALLERY_PHOTO_2,
  GALLERY_PHOTO_3,
  GALLERY_PHOTO_4,
  GALLERY_PHOTO_5,
  GALLERY_PHOTO_6,
  GALLERY_PHOTO_7,
  GALLERY_PHOTO_8,
  GALLERY_PHOTO_9,
  GALLERY_PHOTO_10
} from './galleryAssets';

export const LOGO_URL = "/images/logo-transparent.png";

export const GYM_PHONE = "08681005321";
export const GYM_PHONE_DISPLAY = "+91 86810 05321";
export const GYM_WHATSAPP_NUMBER = "918681005321";
export const GYM_WHATSAPP_LINK = "https://wa.me/918681005321?text=Hi%20Ronnie%20Fitness%20%26%20Gym%2C%20I%20would%20like%20to%20inquire%20about%20membership%20and%20training!";
export const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/PjR7t39Qqo6QeoDs6";
export const INSTAGRAM_LINK = "https://www.instagram.com/ronnie_fitness_gym/";

export const PRICING_PLANS: MembershipPlan[] = [
  {
    id: 'starter',
    name: 'STARTER',
    tagline: 'CARDIO',
    price: 1000,
    period: '/ MONTH',
    popular: false,
    features: [
      'Access to Cardio Equipment',
      'Basic Fitness Assessment',
      'Locker Room Access',
      'Regular Gym Access'
    ],
    ctaText: 'JOIN STARTER'
  },
  {
    id: 'professional',
    name: 'PROFESSIONAL',
    tagline: 'CARDIO + STRENGTH',
    price: 1500,
    period: '/ MONTH',
    popular: true,
    badge: '★ MOST POPULAR',
    features: [
      'Access to Cardio & Strength Area',
      'Advanced Equipment Access',
      'Fitness Assessment',
      'Locker Room Access',
      'Priority Support'
    ],
    ctaText: 'JOIN PROFESSIONAL'
  },
  {
    id: 'elite',
    name: 'ELITE',
    tagline: 'PERSONAL TRAINING',
    price: 3000,
    period: '/ MONTH',
    popular: false,
    features: [
      'Everything in Professional',
      '1-on-1 Personal Training',
      'Custom Workout Plan',
      'Nutrition Guidance',
      'Body Progress Tracking',
      'Priority Support'
    ],
    ctaText: 'JOIN ELITE'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    icon: 'Dumbbell',
    title: 'LATEST EQUIPMENT',
    desc: 'State-of-the-art machines and premium equipment for maximum results.'
  },
  {
    icon: 'UserCheck',
    title: 'PROFESSIONAL COACHES',
    desc: 'Certified and experienced coaches who guide, motivate and push you to grow stronger.'
  },
  {
    icon: 'IndianRupee',
    title: 'AFFORDABLE MEMBERSHIP',
    desc: 'High-quality fitness for everyone with transparent and pocket-friendly pricing.'
  },
  {
    icon: 'BicepsFlexed',
    title: 'PERSONAL TRAINING',
    desc: 'Customized training programs tailored to your goals, body and lifestyle.'
  },
  {
    icon: 'Salad',
    title: 'NUTRITION SUPPORT',
    desc: 'Expert nutrition guidance and meal plans to fuel your body and accelerate results.'
  },
  {
    icon: 'Clock',
    title: 'FLEXIBLE TIMINGS',
    desc: 'Workout when it suits you. Flexible hours for your busy schedule.'
  }
];

export const PROGRAMS: TrainingProgram[] = [
  {
    id: 'strength',
    title: 'STRENGTH TRAINING',
    subtitle: 'STRENGTH',
    description: 'Build raw strength and improve overall performance with proven workout plans.',
    image: '/images/gallery/chest-machine.jpg',
    iconName: 'Dumbbell',
    detailedDescription: 'Our Strength Training program at Ronnie Fitness & Gym focuses on progressive overload, compound barbell lifts, heavy plate-loaded machine work, and structured strength periodization. Designed for both beginner strength builders and seasoned power lifters.',
    schedule: 'Mon, Wed, Fri (Flexible Morning & Evening Slots)',
    leadTrainer: 'NATHER (Head Strength Coach)',
    highlights: [
      'Heavy-duty plate-loaded machines',
      'Progressive overload tracking',
      'Form & posture correction',
      'Power racks & Olympic lifting platforms',
      'Core & spinal stability work'
    ]
  },
  {
    id: 'muscle',
    title: 'MUSCLE BUILDING',
    subtitle: 'BUILDING',
    description: 'Targeted workouts to help you build muscle, gain strength and achieve a powerful physique.',
    image: '/images/gallery/dumbbell-rack.png',
    iconName: 'BicepsFlexed',
    detailedDescription: 'Hypertrophy-focused training designed to maximize muscle fiber recruitment, volume split management, and time under tension. Combined with guidance on protein intake and recovery strategies to sculpture a sculpted, powerful physique.',
    schedule: 'Mon to Sat (Flexible Sessions)',
    leadTrainer: 'ARUN (Performance & Hypertrophy Coach)',
    highlights: [
      'Complete rubber dumbbell set up to 30kg+',
      'Iso-lateral chest & back stations',
      'Customized Push-Pull-Legs & Split routines',
      'Nutritional macronutrient recommendations',
      'Injury prevention & mobility protocols'
    ]
  },
  {
    id: 'weight-loss',
    title: 'WEIGHT LOSS & SHRED',
    subtitle: 'FAT LOSS',
    description: 'Burn fat, boost metabolism and achieve a lean, healthy and confident body.',
    image: '/images/gallery/leg-press.jpg',
    iconName: 'Flame',
    detailedDescription: 'A high-octane blend of metabolic conditioning, high-intensity interval training (HIIT), and targeted fat burn circuits. Designed to boost your resting metabolic rate and shed body fat while retaining hard-earned muscle.',
    schedule: 'Mon to Sat (6:00 AM - 10:00 AM & 5:00 PM - 9:00 PM)',
    leadTrainer: 'PRIYA (Transformation Coach)',
    highlights: [
      'High-calorie burn HIIT & cardio circuits',
      'Body fat percentage tracking & assessment',
      'Targeted endurance & stamina training',
      'Caloric deficit nutritional coaching',
      'Group energy & motivational atmosphere'
    ]
  },
  {
    id: 'functional',
    title: 'FUNCTIONAL TRAINING',
    subtitle: 'ATHLETIC',
    description: 'Improve mobility, flexibility and real-life strength through dynamic functional workouts.',
    image: '/images/gallery/cardio-zone.png',
    iconName: 'Weight',
    detailedDescription: 'Train your body for real-life movements, agility, core strength, and multi-planar stability. Utilizing artificial turf tracks, medicine balls, kettlebells, and functional rigs to build athletic durability.',
    schedule: 'Tue, Thu, Sat (Morning & Evening)',
    leadTrainer: 'NATHER & Coaching Team',
    highlights: [
      'Synthetic turf functional track area',
      'Kettlebells, medicine balls & battle ropes',
      'Core conditioning & dynamic flexibility',
      'Agility ladder & plyometric jumps',
      'Joint mobility & rehabilitation exercises'
    ]
  },
  {
    id: 'cardio',
    title: 'CARDIO TRAINING',
    subtitle: 'ENDURANCE',
    description: 'Increase endurance, boost stamina and improve heart health with effective cardio sessions.',
    image: '/images/gallery/gym-floor.jpg',
    iconName: 'HeartPulse',
    detailedDescription: 'Enhance your cardiovascular health, stamina, and respiratory capacity using Infinity Fitness curved treadmills, motorized treadmills, and upright exercise bikes in our air-conditioned cardio arena.',
    schedule: 'Daily Open Access (5:30 AM - 10:00 PM)',
    leadTrainer: 'PRIYA (Fitness & Cardio Coach)',
    highlights: [
      'Curved manual treadmills & S600 motorized treadmills',
      'Low-impact spin bikes & elliptical trainers',
      'Heart rate zone monitoring',
      'Stamina building & VO2 max elevation',
      'Vibrant neon mood lighting environment'
    ]
  },
  {
    id: 'coaching',
    title: 'PERSONAL COACHING',
    subtitle: '1-ON-1 COACHING',
    description: 'One-on-one coaching tailored to your goals for faster and smarter results.',
    image: '/images/gallery/reception.jpg',
    iconName: 'UserCheck',
    detailedDescription: 'Get undivided 1-on-1 attention, tailored workout programming, customized meal plans, and weekly progress audits from our certified head coaches to achieve your transformation goals in record time.',
    schedule: 'Dedicated Reserved Personal Slots',
    leadTrainer: 'NATHER (Head Coach) & Master Trainers',
    highlights: [
      '100% personalized workout & diet plans',
      'Dedicated 1-on-1 hands-on coaching',
      'Weekly body composition & metric check-ins',
      'Direct WhatsApp access to your trainer',
      'Guaranteed accountability & accelerated results'
    ]
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'nather',
    name: 'NATHER',
    role: 'HEAD STRENGTH COACH',
    specialization: 'Strength Training',
    experience: '8+ Years',
    quote: "I believe strength is built in the mind first. I'm here to push you beyond your limits and unlock your true potential.",
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1000&auto=format&fit=crop',
    socials: {
      instagram: INSTAGRAM_LINK,
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com'
    }
  },
  {
    id: 'priya',
    name: 'PRIYA',
    role: 'FITNESS & TRANSFORMATION COACH',
    specialization: 'Fat Loss, HIIT',
    experience: '6+ Years',
    quote: "Transformation is not a destination, it's a journey. I'll guide you every step of the way to a stronger you.",
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1000&auto=format&fit=crop',
    socials: {
      instagram: INSTAGRAM_LINK,
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com'
    }
  },
  {
    id: 'arun',
    name: 'ARUN',
    role: 'PERFORMANCE COACH',
    specialization: 'Muscle Building',
    experience: '7+ Years',
    quote: "Discipline today, strength tomorrow. My goal is to help you become the strongest version of yourself.",
    image: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1000&auto=format&fit=crop',
    socials: {
      instagram: INSTAGRAM_LINK,
      facebook: 'https://facebook.com',
      youtube: 'https://youtube.com'
    }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'photo-1',
    title: 'Main Gym Floor & Ambient Purple Lights',
    category: 'GYM INTERIOR',
    image: GALLERY_PHOTO_1,
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'photo-2',
    title: 'Plate-Loaded Machine & Training Station',
    category: 'EQUIPMENT',
    image: GALLERY_PHOTO_2,
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'photo-3',
    title: 'Ronnie Unisex Fitness & Gym Neon Sign',
    category: 'COMMUNITY',
    image: GALLERY_PHOTO_3,
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'photo-4',
    title: 'Front Reception Desk & Office Lounge',
    category: 'GYM INTERIOR',
    image: GALLERY_PHOTO_4,
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'photo-5',
    title: 'Cardio Zone & Functional Turf Track',
    category: 'EQUIPMENT',
    image: GALLERY_PHOTO_5,
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'photo-6',
    title: 'Professional Rubber Dumbbell Rack',
    category: 'EQUIPMENT',
    image: GALLERY_PHOTO_6,
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'photo-7',
    title: '45-Degree Heavy Leg Press Station',
    category: 'EQUIPMENT',
    image: GALLERY_PHOTO_7,
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'photo-8',
    title: 'Panoramic Training Hall View',
    category: 'GYM INTERIOR',
    image: GALLERY_PHOTO_8,
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'photo-9',
    title: '\'Make Yourself Proud\' Neon Sign',
    category: 'COMMUNITY',
    image: GALLERY_PHOTO_9,
    span: 'col-span-1 row-span-1'
  },
  {
    id: 'photo-10',
    title: 'Cable Crossover & Workout Floor',
    category: 'WORKOUTS',
    image: GALLERY_PHOTO_10,
    span: 'col-span-1 row-span-1'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'SIVA BALAN M',
    role: 'Member',
    dateAgo: '8 months ago',
    rating: 5,
    title: 'FRIENDLY TRAINERS, GREAT GUIDANCE',
    review: 'Ronnie Fitness Gym is really good! The place has all new machines for both cardio and strength workouts. Trainer Nather is very friendly, motivating and knows a lot about fitness. He always guides well and pushes you to do better.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't2',
    author: 'RIDERS PARK TN45 PITSTOP',
    role: 'Member',
    dateAgo: '8 months ago',
    rating: 5,
    title: 'BEST GYM IN TRICHY',
    review: 'One of the best gym in Trichy in prime location also maintenance was so good and NOT in a too much crowd like other gyms, good ambiance proper guidance using towel for all equipments.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't3',
    author: 'FAREWELL 2K18',
    role: 'Member',
    dateAgo: '8 months ago',
    rating: 5,
    title: 'AFFORDABLE & EFFECTIVE',
    review: 'The gym is good, and the trainer\'s approach is also good. They charge ₹1000 per month for cardio, and ₹1500 per month for both cardio and strength training. The registration fee is ₹500. They also offer personal training for ₹3000 per month.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    question: 'What membership plans do you offer?',
    answer: 'We offer flexible membership plans to suit every fitness goal and budget. Choose from our Starter (₹1000/mo), Professional (₹1500/mo), and Elite (₹3000/mo) plans. All plans include access to modern equipment, expert trainers, and premium facilities.'
  },
  {
    id: 'f2',
    question: 'Do you provide personal training?',
    answer: 'Yes! We offer 1-on-1 personal training with certified coaches like Nather, Priya, and Arun. They create customized workout and nutrition plans tailored specifically to your body type and fitness goals.'
  },
  {
    id: 'f3',
    question: 'What are your gym timings?',
    answer: 'Our gym is open Monday through Saturday from 5:00 AM to 10:00 PM, and on Sundays from 6:00 AM to 1:00 PM to accommodate early morning and late evening workouts.'
  },
  {
    id: 'f4',
    question: 'Is there a free trial available?',
    answer: 'Absolutely! We offer a complimentary 1-day pass so you can experience our state-of-the-art machines, meet our certified trainers, and immerse yourself in the Ronnie community before signing up.'
  },
  {
    id: 'f5',
    question: 'Are lockers available at the gym?',
    answer: 'Yes, secure personal locker facilities, clean shower facilities, and hygienic changing spaces are provided to all members free of charge.'
  },
  {
    id: 'f6',
    question: 'Do you provide nutrition guidance?',
    answer: 'Yes, all our Professional and Elite plans include personalized nutrition advice, calorie-counted meal charts, and supplement recommendations to maximize your recovery and performance.'
  }
];
