
import React, { createContext, useState, ReactNode, useCallback } from 'react';
import { ThemeConfig, Project } from '../types';

const initialProjects: Project[] = [
  {
    id: 'design-system',
    category: '실무',
    title: '디자인 시스템 구축 및 협업 프로세스 자동화',
    description: `파지티브호텔(Positive Hotel)은 건강한 식단과 요가, 명상 등을 결합하여 몸과 마음의 회복을 돕는 지속 가능한 웰니스 라이프스타일 브랜드입니다.

파편화된 UI로 인해 발생한 디자인 부채를 해결하고, 신규 기능 확장에 유연하게 대응하기 위해 선제적으로 디자인 시스템을 구축했습니다. GitHub 연동을 통한 핸드오프 자동화와 개발 친화적 명명 규칙을 도입하여 실질적인 생산성을 높이는 데 집중했습니다.

디자인과 개발의 언어를 하나로 잇는 토큰 체계와 명명 규칙 수립, 범용성과 제약 사항을 동시에 고려한 컴포넌트 설계, 그리고 불필요한 리소스 절감을 통해 제품 디테일에 집중할 수 있는 환경을 구축하여 팀의 생산성과 제품의 완성도를 동시에 높이는 핵심 동력임을 확인했습니다.`,
    imageUrl: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    company: '파지티브호텔',
    period: '2025.01 - 2025.03',
    team: '프론트엔드 1, UXUI 디자이너 1',
    role: 'UXUI 디자이너',
    tools: 'Figma, Github',
  },
  {
    id: 'wellness-booking',
    category: '실무',
    title: '웰니스 이벤트 예약 시스템 구축',
    description: `정기권 중심의 기존 시스템으로는 다각도의 옵션이 필요한 신규 비즈니스 모델 '브랜드 프로그램'을 운영하기 어려워, 그간 인스타그램 DM과 구글폼을 통한 수동 예약 및 중복 예약 등의 비효율이 지속되었습니다. 이러한 문제를 근본적으로 해결하기 위해 전용 시스템과 운영 관리용 백오피스를 신규 구축했습니다. 분산되어 있던 예약 접수처를 앱으로 일원화하고 모든 관리 과정을 디지털로 전환함으로써, 운영 리소스를 월 16시간 이상 줄이고 사용자 편의성 증대를 동시에 달성했습니다.

일상적인 '클래스'와 특별한 '브랜드 프로그램'의 이원화 전략을 통해 가치를 극대화하고, 관리자 승인 기반의 예약 로직을 도입하여 프리미엄 서비스로서의 가치를 전달했습니다. 이를 통해 운영 비용을 월 16시간 이상 축소하고 데이터 기반의 지속 가능한 운영 환경을 구축하며 비즈니스에 기여했습니다.`,
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    company: '파지티브호텔',
    period: '2025.03 - 2025.05',
    team: '서비스기획 1, 풀스택개발 2, UXUI 디자이너 1',
    role: 'UXUI 디자이너',
    tools: 'Figma',
    platform: 'iOS, Android, Web(Mobile, PC:Admin)',
  },
  {
    id: 'retention-challenge',
    category: '실무',
    title: '리텐션 향상을 위한 보상형 챌린지 서비스 구축',
    description: `러너블은 러닝 버티컬 플랫폼으로 마라톤 대회 운영과 모바일 앱 서비스를 통해 러너들을 연결하고 건강한 러닝 문화를 선도합니다.

마라톤 대회의 일회성 이용 패턴과 수익 구조를 개선하기 위해 '보상형 챌린지' 서비스를 구축했습니다. 기록 중심 기능에서 보상과 성취 중심의 챌린지 기능을 추가하여 재방문 수가 YoY 11.4% 상승했으며, 브랜드 제휴를 고려한 UX 설계를 통해 아디다스 마케팅 입찰 수주라는 비즈니스 성과를 창출했습니다.

게이미피케이션 요소를 활용하여 지속 가능한 러닝 습관 형성 전략을 수립하고, 재방문율 11.4% 상승 및 B2B 입찰 수주로 그 가치를 증명했습니다. UX 설계를 넘어, 비즈니스 모델을 설계하고 파트너십을 견인했던 프로젝트였습니다.`,
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    company: '러너블',
    period: '2023.06 - 2023.08',
    team: '서비스기획 1, UXUI 디자이너 2, 프론트엔드 2, 백엔드 2, 네이티브 2',
    role: 'UXUI 디자이너',
    tools: 'Figma',
    platform: 'iOS, Android',
  },
];

const initialThemeConfig: ThemeConfig = {
  colors: {
    primary: '#000000',
    secondary: '#FAFAFA',
    background: '#FFFFFF',
    text: '#000000',
    accent: '#EEEEEE',
  },
  fonts: {
    body: "'Pretendard', sans-serif",
  },
  content: {
    heroTitle: 'KIM YOONJU PORTFOLIO',
    heroSubtitle: '비즈니스 성장을 견인하는\nUXUI 디자이너 김윤주입니다.',
    aboutTitle: 'About Me',
    aboutBio: '디자인 시스템 구축부터 비즈니스 모델(BM) 설계까지 전략가로서 사용자 경험과 사업적 임팩트를 고려합니다.\n운영 자동화, 리텐션 11.4% 향상 등 실질적인 성과를 만드는 강점이 있습니다.',
    projectsTitle: 'Projects',
    skillsTitle: 'Skills',
    experienceTitle: 'Experience',
    contactTitle: 'Get In Touch',
    contactSubtitle: '언제든지 편하게 연락주세요.',
    contactEmail: 'kimm.yoonju@gmail.com',
    contactPhone: '010-9120-1947',
    footerText: '© 2024 Kim Yoonju. All Rights Reserved.',
  },
  projects: initialProjects,
  skills: [],
  experience: [],
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