export interface AboutCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  problemText: string;
  solutionText: string;
}

export interface AboutSection {
  title: string;
  description: string;
  cards: AboutCard[];
}

export interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}