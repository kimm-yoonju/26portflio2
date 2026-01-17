
import React, { createContext, useState, ReactNode, useCallback } from 'react';
import { ThemeConfig, Project } from '../types';

const initialProjects: Project[] = [
  {
    id: 'proj1',
    category: 'UX/UI 리서치',
    title: '모빌리티 앱 리디자인',
    description: `기존 모빌리티 앱의 사용자 경험을 심층적으로 분석하고, 페르소나와 사용자 여정 맵을 기반으로 문제점을 도출했습니다. 
    이를 바탕으로 정보 구조를 재설계하고, 직관적인 UI를 적용하여 사용성을 대폭 개선했습니다. 
    프로토타이핑과 반복적인 사용자 테스트를 통해 사용자의 만족도를 높이고, 주요 기능의 접근성을 향상시키는 데 집중했습니다.`,
    imageUrl: 'https://picsum.photos/seed/mobility/800/600'
  },
  {
    id: 'proj2',
    category: 'UX 전략',
    title: '금융 서비스 UX 전략',
    description: `경쟁이 치열한 핀테크 시장에서 사용자의 충성도를 높이기 위한 장기적인 UX 전략을 수립했습니다. 
    데이터 분석을 통해 주요 이탈 지점을 파악하고, 개인화된 금융 추천 및 목표 설정 기능을 도입하여 사용자 인게이지먼트를 강화했습니다. 
    서비스의 핵심 가치를 명확히 전달하는 온보딩 프로세스를 설계하여 초기 이탈률을 낮추는 데 기여했습니다.`,
    imageUrl: 'https://picsum.photos/seed/finance/800/600'
  },
  {
    id: 'proj3',
    category: '플랫폼 디자인',
    title: '이커머스 플랫폼 개선',
    description: `A/B 테스트와 사용자 피드백을 기반으로 이커머스 플랫폼의 구매 전환율을 높이는 데 집중했습니다. 
    상품 탐색부터 결제까지의 과정을 간소화하고, 장바구니와 위시리스트 기능을 개선하여 사용자 편의성을 높였습니다. 
    모바일 환경에 최적화된 반응형 디자인을 적용하여 모든 디바이스에서 일관된 쇼핑 경험을 제공합니다.`,
    imageUrl: 'https://picsum.photos/seed/ecommerce/800/600'
  },
  {
    id: 'proj4',
    category: '브랜딩',
    title: '스타트업 브랜딩 및 웹사이트 구축',
    description: `새롭게 시작하는 스타트업의 비전과 가치를 담은 브랜드 아이덴티티를 정립하고, 이를 효과적으로 전달하는 웹사이트를 구축했습니다. 
    로고, 컬러 시스템, 타이포그래피 등 시각적 요소를 통일감 있게 디자인하여 전문적이고 신뢰감 있는 브랜드 이미지를 만들었습니다. 
    기업의 스토리를 전달하는 인터랙티브한 요소를 추가하여 방문자의 흥미를 유발하고, 브랜드 메시지를 각인시키는 데 중점을 두었습니다.`,
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
    heroSubtitle: '비즈니스와 함께 성장하는 프로덕트 디자이너',
    aboutTitle: 'About Me',
    aboutBio: '안녕하세요. 저는 문제 해결을 통해 가치 있는 경험을 만드는 UX/UI 디자이너 김윤주입니다. 사용자의 입장에서 깊이 공감하고, 비즈니스 목표에 부합하는 직관적이고 아름다운 디자인을 추구합니다. 복잡한 문제를 단순하게 풀어내는 것에 즐거움을 느끼며, 데이터 기반의 의사결정과 창의적인 접근을 통해 최적의 솔루션을 찾아냅니다.',
    projectsTitle: 'Projects',
    skillsTitle: 'Skills',
    experienceTitle: 'Experience',
    contactTitle: 'Contact Me',
    contactSubtitle: '함께할 기회를 찾고 계신다면, 언제든지 편하게 연락주세요.',
    contactEmail: 'kimm.yoonju@gmail.com',
    footerText: '© 2025 KimYoonju. All Rights Reserved.',
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
