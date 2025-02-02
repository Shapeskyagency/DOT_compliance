'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lenis from 'lenis';
import { useEffect } from 'react';
import RevolutionSlider from '@/components/RevolutionSlider';
import Service from '@/components/Service';
import AboutUs from '@/components/AboutUs';
import Ihbox from '@/components/Ihbox';
import Services2 from '@/components/Service2';
import History from '@/components/History';
import Testimonials from '@/components/Testimonials';
import Clients from '@/components/Clients';
import BlogSection from '@/components/BlogSection';

export default function Home() {

useEffect(() => {
  const lenis= new Lenis();
  function raf(time) {
  lenis.raf (time)
  requestAnimationFrame(raf);
  }
  requestAnimationFrame (raf);

}, [])
  return (
    <div>
      <AnimatedSection>
      <RevolutionSlider/>
      </AnimatedSection>
      <Service/>
      <AboutUs/>
      <Ihbox/>
      <Services2/>
      <History/>
      <Testimonials/>
      <Clients/>
      <BlogSection/>
    </div>
  );
}

function AnimatedSection({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
