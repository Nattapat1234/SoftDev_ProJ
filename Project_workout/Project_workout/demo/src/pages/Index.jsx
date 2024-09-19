import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ExerciseCategories from '../components/ExerciseCategories';
import FeaturedWorkouts from '../components/FeaturedWorkouts';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <HeroSection />
        <ExerciseCategories />
        <FeaturedWorkouts />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;