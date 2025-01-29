'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ThreeTileCard from "../components/ThreeTileCard";
import Banner from "../components/Banner";
import FiftyFifty from "@/components/FiftyFifty";
import ServicesCards from "../components/ServicesCards";
import LogisticsWorkflow from "../components/LogisticsWorkflow";
import ProductsTransport from "@/components/ProductsTransport";
import TransportSection from "@/components/TransportSection";
import UpdatedArticles from "@/components/UpdatedArticles";
import Fullbanner from "@/components/Fullbanner";
import SupervisorTrainingSection from "@/components/SupervisorTrainingSection ";
import Lenis from 'lenis';
import { useEffect } from 'react';

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
      <Banner />
      {/* <ThreeTileCard /> */}
      <AnimatedSection>
        <FiftyFifty />
      </AnimatedSection>
      <AnimatedSection>
        <ServicesCards />
      </AnimatedSection>
      <AnimatedSection>
        <Fullbanner bgImg={'https://www.commercialtrucktrader.com/blog/wp-content/uploads/sites/9/2023/11/How-Will-AI-Impact-the-Future-of-Truck-Drivers.jpg'} />
      </AnimatedSection>
      <AnimatedSection>
        <LogisticsWorkflow />
      </AnimatedSection>
      <AnimatedSection>
        <SupervisorTrainingSection />
      </AnimatedSection>
      <AnimatedSection>
        <TransportSection />
      </AnimatedSection>
      {/* <ProductsTransport /> */}
      {/* <UpdatedArticles /> */}
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
