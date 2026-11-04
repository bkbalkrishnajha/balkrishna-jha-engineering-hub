/**
 * Confirmed profile information transcribed from Balkrishna Jha's supplied CV.
 * Keep this file as the single source of truth for public biography content.
 */
export const professionalSummary =
  'Civil Engineer with experience in public-sector engineering work, infrastructure-related technical checks and field surveying. Interested in continuous learning and practical engineering work.';

type ExperienceItem = {
  readonly title: string;
  readonly organisation: string;
  readonly period: string;
  readonly context?: string;
  readonly responsibilities: readonly string[];
};

type EducationItem = {
  readonly qualification: string;
  readonly institution: string;
  readonly affiliation?: string;
  readonly period: string;
  readonly result: string;
};

export const experience: readonly ExperienceItem[] = [
  {
    title: 'Hydrologist Engineer, Gazetted Third Class Officer',
    organisation: 'Department of Roads | Ministry of Physical Infrastructure and Transport',
    period: '2083/03/32 – Present',
    context: 'Bridge Division',
    responsibilities: [
      'Provides hydrological and hydraulic checks for bridges and river-training works.',
      'Contributes to the safety and stability assessment of streams in the vicinity of bridge sites.',
    ],
  },
  {
    title: 'Engineer, Level 7 Officer',
    organisation: 'Infrastructure Development Office, Sarlahi | Ministry of Physical Infrastructure Development, Madhesh Pradesh',
    period: '2083/02/29 – 2083/03/30',
    responsibilities: [
      'Provided engineering and technical assistance to contractors.',
      'Verified and certified work completed by contractors and user committees.',
      'Verified reports and handled processing, filing and maintenance of bills in line with organisational procedures.',
    ],
  },
  {
    title: 'Part-time Teacher — Survey Camp (2079 Batch)',
    organisation: 'Khwopa College of Engineering',
    period: '2082/01/09 – 2082/01/12; 2082/01/28 – 2082/02/04',
    responsibilities: [
      'Instructed students during survey-camp field activities for the 2079 batch.',
      'Assisted with field surveying, measurements and data collection.',
      'Helped operate survey instruments and maintain field records.',
      'Supported preparation of survey reports and maps.',
      'Coordinated with the survey team to support accurate and timely fieldwork.',
    ],
  },
] as const;

export const education: readonly EducationItem[] = [
  {
    qualification: 'Bachelor in Civil Engineering',
    institution: 'Khwopa College of Engineering, Libali, Bhaktapur-08',
    affiliation: 'Tribhuvan University',
    period: '2077 – 2081',
    result: '81.07% (Distinction)',
  },
  {
    qualification: 'School Leaving Certificate, +2 Science with Mathematics',
    institution: 'Adarsha Janapremi English Secondary School, Kaushaltar, Bhaktapur',
    period: '2076 – 2077',
    result: 'CGPA: 3.52 (A)',
  },
  {
    qualification: 'Secondary Education Examination, Grade 10',
    institution: 'Adarsha Janapremi English Secondary School, Kaushaltar, Bhaktapur',
    period: '2075',
    result: 'GPA: 3.75 (A+)',
  },
] as const;

export const technicalSkills = [
  'Topographic Surveys',
  'Python (Programming Language)',
  'ArcGIS Pro',
  'AutoCAD',
  'SketchUp',
  'Microsoft Office',
] as const;

export const publication = {
  title:
    'Deformation and Support Analysis of Headrace Tunnels in Three Tectonic Zones of Nepal: An Empirical and Numerical Approach',
  authors: 'Shrestha, I., Jha, B., Koju, A., Mishra, A. K., & Kafle, N. (2025).',
  journal: 'Journal of Nepal Hydrogeological Association, 2(1), 45–65.',
  doi: 'https://doi.org/10.3126/jnha.v2i1.85379',
} as const;

export const geotechnicalAward = {
  title: 'Best Undergraduate Geotechnical Project Award',
  organisation: 'Nepal Geotechnical Society',
  year: '2025',
  projectTitle: publication.title,
  description:
    'The undergraduate geotechnical project focused on deformation and support analysis of headrace tunnels located across three tectonic zones of Nepal.',
  tectonicZones: ['Siwalik', 'Lower Himalaya', 'Higher Himalaya'],
  approach: 'Empirical and numerical approach',
} as const;

export const awards = [
  geotechnicalAward,
  {
    title: 'Rank 1',
    organisation:
      'Public Service Commission, Nepal Engineering Service, Civil Group, Hydrology Sub-group, Gazetted Third Class',
    year: '',
  },
] as const;

export const participation = [
  {
    title: 'Paper Bridge Competition at 26th National Earthquake Safety Day',
    role: 'Participant',
    year: '2080',
  },
  {
    title: 'Civil Engineering Model Competition — 16th Anniversary KhEC and Bhaktapur Festival',
    role: 'Participant',
    year: '2081',
  },
] as const;

export const leadership = [
  {
    title: 'FIDIC Asia Pacific Conference: “Governance for Climate Shocks”',
    role: 'Volunteer',
    period: 'November 18–20, 2024',
  },
  {
    title: '26th National Earthquake Safety Day',
    role: 'Volunteer',
    period: '2nd Magh, 2080',
  },
] as const;

