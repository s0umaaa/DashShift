// src/data/portfolioData.ts
/* eslint-disable @typescript-eslint/consistent-type-definitions */

/* ──────────── Types ──────────── */
export interface PersonaType {
  name: string;
  role: string;
  age: string;
  avatar: string;
  visa?: string;
  business?: string;
  about: string;
  goals: string[];
  frustrations: string[];
  journey: Record<string, string>;
  // ストーリーボード用のプロパティを追加
  storyboard?: string[];
  storyboardCaptions?: string[];
}

export interface PrototypeType {
  id: string;
  title: string;
  images: string[];
}

/* ──────────── Image Arrays ──────────── */
export const lofi = [
  '/Lofi/スクリーンショット%202025-04-17%2017.12.13.png',
  '/Lofi/スクリーンショット%202025-04-17%2017.12.20.png',
  '/Lofi/スクリーンショット%202025-04-17%2017.12.38.png',
  '/Lofi/スクリーンショット%202025-04-17%2017.12.45.png',
  '/Lofi/スクリーンショット%202025-04-17%2017.12.56.png',
];

export const midfi = [
  '/Midfi/6d851103-9c52-4863-8de9-ce48fad81a27.png',
  '/Midfi/6e1107e0-2313-45d8-b4f7-c1cbba9e5b7b.png',
  '/Midfi/7a2eefa6-3ccd-403e-93c2-cffc9f935cca.png',
  '/Midfi/82c39d73-2b52-4393-bb77-0380b0b61e43.png',
  '/Midfi/88f1632f-6ab4-4e57-a308-3c4f356599eb.png',
  '/Midfi/28903ea9-99a8-4c82-9e98-548329dde967.png',
  '/Midfi/d681bd54-723d-4ed3-a422-445b0c55de18.png',
];

export const hifi = [
  '/Hifi/スクリーンショット%202025-05-28%2014.33.38.png',
  '/Hifi/スクリーンショット%202025-05-28%2014.34.11.png',
  '/Hifi/スクリーンショット%202025-05-28%2014.34.31.png',
  '/Hifi/スクリーンショット%202025-05-28%2014.34.47.png',
  '/Hifi/スクリーンショット%202025-05-28%2014.34.59.png',
];

export const finalDesign = [
  '/FinalDesign/Home.png',
  '/FinalDesign/Map.png',
  '/FinalDesign/Profile.png',
  '/FinalDesign/EmployerHome.png',
  '/FinalDesign/PostJob.png',
  '/FinalDesign/HirePage.png',
  '/FinalDesign/EmployerProfile.png'
];

/* ──────────── Prototypes ──────────── */
export const prototypes: PrototypeType[] = [
  { id: 'lofi', title: 'Low-Fidelity Wireframes', images: lofi },
  { id: 'midfi', title: 'Mid-Fidelity Wireframes', images: midfi },
  { id: 'hifi', title: 'High-Fidelity Prototype', images: hifi },
  { id: 'final', title: 'Final Implementation', images: finalDesign },
];

/* ──────────── Research Data ──────────── */
export const seekerData = {
  visaTypes: [
    { type: 'Student Visa', count: 11, percentage: 44 },
    { type: 'Working Holiday', count: 10, percentage: 40 },
    { type: 'PR/Graduate Visa', count: 4, percentage: 16 },
  ],
  searchMethods: [
    { method: 'Job listing websites', count: 13, percentage: 52 },
    { method: 'Direct visits', count: 5, percentage: 20 },
    { method: 'Social media', count: 4, percentage: 16 },
    { method: 'Referrals', count: 3, percentage: 12 },
  ],
  workFactors: [
    { factor: 'Workplace atmosphere', score: 4.4, importance: 'high' },
    { factor: 'High pay', score: 4.2, importance: 'high' },
    { factor: 'Proximity to residence', score: 3.8, importance: 'medium' },
    { factor: 'Shift flexibility', score: 3.7, importance: 'medium' },
    { factor: 'Skill development', score: 3.5, importance: 'medium' },
    { factor: 'Short-notice work', score: 3.2, importance: 'low' },
  ],
  challenges: [
    { challenge: 'High competition', count: 15, percentage: 60 },
    { challenge: 'Lack of required skills', count: 12, percentage: 48 },
    { challenge: 'Visa restrictions', count: 11, percentage: 44 },
    { challenge: 'Language barriers', count: 6, percentage: 24 },
  ],
  satisfaction: {
    jobInfoAccess: 2.8,
    hiringTransparency: 3.2,
    workingConditions: 3.6,
    workplaceSupport: 3.4,
    careerAdvancement: 3.1,
  },
};

export const employerData = {
  recruitmentChannels: [
    { channel: 'Job listing websites', count: 14, percentage: 82 },
    { channel: 'Employee referrals', count: 12, percentage: 71 },
    { channel: 'Social media', count: 8, percentage: 47 },
    { channel: 'In-store posters', count: 6, percentage: 35 },
  ],
  hiringTime: [
    { duration: '2-4 weeks', count: 10, percentage: 59 },
    { duration: '1-2 weeks', count: 5, percentage: 29 },
    { duration: 'Over 1 month', count: 2, percentage: 12 },
  ],
  hiringFactors: [
    { factor: 'Ready-to-work experience', score: 4.4, importance: 'high' },
    { factor: 'Shift flexibility', score: 4.4, importance: 'high' },
    { factor: 'Communication skills', score: 4.2, importance: 'high' },
    { factor: 'Team compatibility', score: 4.1, importance: 'medium' },
    { factor: 'Hygiene qualifications', score: 2.7, importance: 'low' },
  ],
  urgentShortages: [
    { frequency: 'Monthly', count: 9, percentage: 53 },
    { frequency: 'Weekly', count: 4, percentage: 24 },
    { frequency: 'Daily', count: 2, percentage: 12 },
    { frequency: 'Never', count: 2, percentage: 12 },
  ],
  satisfaction: [
    { level: 'Dissatisfied', count: 7, percentage: 41 },
    { level: 'Neutral', count: 6, percentage: 35 },
    { level: 'Satisfied', count: 4, percentage: 24 },
  ],
};

export const usabilityData = {
  susScores: [
    { participant: 'Participant 1', score: 62.5, profile: 'Experienced worker' },
    { participant: 'Participant 2', score: 95.0, profile: 'Student, tech-savvy' },
    { participant: 'Participant 3', score: 80.0, profile: 'Working holiday' },
  ],
  taskResults: [
    { task: 'Find short-notice shift', completion: 67, avgTime: 45, difficulty: 3.7 },
    { task: 'Find nearby job', completion: 67, avgTime: 52, difficulty: 3.0 },
    { task: 'Find barista job', completion: 100, avgTime: 15, difficulty: 4.3 },
    { task: 'Apply for shift', completion: 100, avgTime: 12, difficulty: 4.7 },
    { task: 'Check profile/badges', completion: 100, avgTime: 18, difficulty: 4.3 },
    { task: 'Switch worker/employer', completion: 100, avgTime: 10, difficulty: 4.0 },
  ],
  keyIssues: [
    'Worker/employer mode indicator unclear',
    'Need onboarding instructions for new users',
    'Job category filter chips needed',
    'Date selection functionality broken',
    'Location search requires improvement',
  ],
};

export const competitorData = [
  {
    name: 'Seek',
    pros: ['Market leader', 'Comprehensive job listings', 'Strong employer brand'],
    cons: ['Not optimized for casual work', 'Complex interface', 'Limited real-time features'],
    features: ['Job alerts', 'Company reviews', 'Salary insights'],
    focus: 'Permanent employment',
  },
  {
    name: 'Indeed',
    pros: ['Global platform', 'Easy application process', 'Mobile app'],
    cons: ['Generic experience', 'Poor casual job filtering', 'No skill verification'],
    features: ['Resume builder', 'Company pages', 'Interview scheduling'],
    focus: 'General job search',
  },
  {
    name: 'Gumtree',
    pros: ['Local focus', 'Casual work section', 'Direct contact'],
    cons: ['No verification system', 'Poor user experience', 'Limited employer tools'],
    features: ['Location-based search', 'Direct messaging', 'Free posting'],
    focus: 'Casual/part-time work',
  },
];

/* ──────────── Personas ──────────── */
export const personas: PersonaType[] = [
  {
    name: 'Eimi',
    role: 'International Student',
    age: '22',
    avatar: '/Eimi.png',
    visa: 'Student Visa',
    about: 'Japanese international student studying at University of Melbourne. She needs flexible part-time work to support her studies while building professional experience in Australia.',
    goals: [
      'Find flexible work around study schedule',
      'Secure jobs close to university/home',
      'Access transparent pay information',
      'Build hospitality experience and skills',
    ],
    frustrations: [
      'Limited working hours (20hrs/week)',
      'High competition with local workers',
      'Unclear job descriptions and requirements',
      'Language barriers in interviews',
    ],
    journey: {
      discovery: 'Uses job boards and map features to find nearby opportunities',
      application: 'Applies through DashShift with verified student status',
      interview: 'Reviews transparent job details before committing',
      outcome: 'Starts work immediately with clear expectations',
    },
    storyboard: [
      '/Storyboard/Student1.png',
      '/Storyboard/Student2.png',
      '/Storyboard/Student3.png',
      '/Storyboard/Student4.png'
    ],
    storyboardCaptions: [
      'Eimi worries about limited working hours on student visa',
      'Discovers nearby café job using DashShift map feature',
      'Reviews transparent job details and hourly wage',
      'Starts work immediately with warm welcome from employer'
    ]
  },
  {
    name: 'Ken',
    role: 'Café Owner',
    age: '35',
    avatar: '/Ken.png',
    business: 'Melbourne CBD Café',
    about: 'Ken owns a busy café in Melbourne CBD that experiences unpredictable customer surges. He frequently faces staffing shortages and needs workers who can start immediately with minimal training.',
    goals: [
      'Fill urgent staff shortages quickly',
      'Find experienced, reliable workers',
      'Minimize screening and training time',
      'Maintain service quality during rush hours',
    ],
    frustrations: [
      'Weekly staffing gaps during peak times',
      'Time-consuming hiring process (2-4 weeks)',
      'Unqualified applicants through job boards',
      'Last-minute sick calls creating chaos',
    ],
    journey: {
      posting: 'Posts urgent shifts with specific experience requirements',
      screening: 'Reviews pre-verified candidate profiles and badges',
      interviewing: 'Minimal screening needed due to badge verification',
      hiring: 'Quick hiring decisions based on verified skills and availability',
    },
    storyboard: [
      '/Storyboard/CafeOwner1.png',
      '/Storyboard/CafeOwner2.png',
      '/Storyboard/CafeOwner3.png',
      '/Storyboard/CafeOwner4.png'
    ],
    storyboardCaptions: [
      'Ken panics about staff shortage with lunch rush approaching',
      'Uses DashShift app to post urgent shift with experience filters',
      'Reviews qualified candidate profiles with verified badges',
      'Successfully manages lunch rush with reliable temporary staff'
    ]
  },
];