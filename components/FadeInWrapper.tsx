
import React from 'react';
import { useScrollFadeIn } from '../hooks/useScrollFadeIn';

interface FadeInWrapperProps {
  children: React.ReactNode;
}

const FadeInWrapper: React.FC<FadeInWrapperProps> = ({ children }) => {
  const fadeInProps = useScrollFadeIn<HTMLDivElement>();
  return <div {...fadeInProps}>{children}</div>;
};

export default FadeInWrapper;
