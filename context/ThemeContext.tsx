
import React, { createContext, useState, ReactNode, useCallback } from 'react';
import { ThemeConfig, Project } from '../types';

const initialProjects: Project[] = [
  {
    id: 'proj1',
    category: 'UX/UI 리서치',
    title: '모빌리티 앱 리디자인',
    description: '사용자 경험 개선을 위한 모빌리티 서비스의 전반적인 UX/UI 개편 프로젝트',
    imageUrl: 'https://picsum.photos/seed/mobility/800/600'
  },
  {
    id: 'proj2',
    category: 'UX 전략',
    title: '금융 서비스 UX 전략',
    description: '핀테크 앱의 사용자 유지율을 높이기 위한 장기적인 UX 전략 수립',
    imageUrl: 'https://picsum.photos/seed/finance/800/600'
  },
  {
    id: 'proj3',
    category: '플랫폼 디자인',
    title: '이커머스 플랫폼 개선',
    description: '구매 전환율 상승을 목표로 한 이커머스 플랫폼의 UI/UX 개선',
    imageUrl: 'https://picsum.photos/seed/ecommerce/800/600'
  },
  {
    id: 'proj4',
    category: '브랜딩',
    title: '스타트업 브랜딩 및 웹사이트 구축',
    description: '초기 스타트업의 브랜드 아이덴티티를 정립하고 웹사이트를 디자인',
    imageUrl: 'https://picsum.photos/seed/startup/800/600'
  }
];

const initialThemeConfig: ThemeConfig = {
  colors: {
    primary: '#FFFFFF',
    secondary: '#000000',
    background: '#000000',
    text: '#FFFFFF',
    accent: '#F5F5F5',
  },
  fonts: {
    body: "'Pretendard', sans-serif",
  },
  content: {
    heroTitle: 'Kim Yoonju Archive',
    heroSubtitle: '경험을 디자인하는\nUX/UI 디자이너',
    aboutTitle: 'About Me',
    aboutBio: '안녕하세요. 저는 문제 해결을 통해 가치 있는 경험을 만드는 UX/UI 디자이너 김윤주입니다. 사용자의 입장에서 깊이 공감하고, 비즈니스 목표에 부합하는 직관적이고 아름다운 디자인을 추구합니다. 복잡한 문제를 단순하게 풀어내는 것에 즐거움을 느끼며, 데이터 기반의 의사결정과 창의적인 접근을 통해 최적의 솔루션을 찾아냅니다.',
    projectsTitle: 'Projects',
    skillsTitle: 'Skills',
    experienceTitle: 'Experience',
    contactTitle: 'Contact Me',
    contactSubtitle: '함께할 기회를 찾고 계신다면, 언제든지 편하게 연락주세요.',
    contactEmail: 'yoonju.kim@example.com',
    footerText: '© 2024 Kim Yoonju. All Rights Reserved.',
  },
  projects: initialProjects,
  skills: [
    { name: 'UX Research', level: 95 },
    { name: 'UI Design', level: 90 },
    { name: 'Prototyping', level: 85 },
    { name: 'Figma', level: 98 },
    { name: 'Adobe Creative Suite', level: 80 },
  ],
  experience: [
    { period: '2021 - Present', company: 'Tech Company', role: 'Senior UX/UI Designer' },
    { period: '2019 - 2021', company: 'Design Agency', role: 'UX/UI Designer' },
    { period: '2018 - 2019', company: 'Startup Inc.', role: 'Junior Designer' },
  ],
  socials: {
    instagram: '#',
    linkedin: '#',
    behance: '#',
  },
};

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: React.Dispatch<React.SetStateAction<ThemeConfig>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeConfig>(initialThemeConfig);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
