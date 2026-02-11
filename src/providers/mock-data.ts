import { Subject } from '@/types';

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: 'CS-301',
    name: 'Data Structures and Algorithms',
    department: 'CS',
    description:
      'An in-depth study of fundamental data structures including arrays, linked lists, trees, graphs, hash tables, and their associated algorithms. Topics include searching, sorting, algorithm complexity analysis, and problem-solving techniques.',
    created_at: new Date().toISOString(),
  },
  {
    id: 2,
    code: 'MATH-205',
    name: 'Linear Algebra',
    department: 'Math',
    description:
      'Introduction to vector spaces, linear transformations, matrices, determinants, eigenvalues and eigenvectors. Applications include solving systems of linear equations and computational methods used in engineering and data science.',
    created_at: new Date().toISOString(),
  },
  {
    id: 3,
    code: 'BIO-150',
    name: 'Introduction to Molecular Biology',
    department: 'Biology',
    description:
      'Explores the molecular mechanisms of life including DNA replication, transcription, translation, gene regulation, and protein synthesis. Laboratory component includes techniques such as PCR, gel electrophoresis, and genetic analysis.',
    created_at: new Date().toISOString(),
  },
];

