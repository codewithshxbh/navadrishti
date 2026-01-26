export interface Testimonial {
  id: number;
  name: string;
  role: string;
  social: string;
  socialUrl: string;
  image: string;
  text: string;
  reverse: boolean;
}

export interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayDuration?: number;
  className?: string;
}

export interface TestimonialItemProps {
  testimonial: Testimonial;
  className?: string;
}