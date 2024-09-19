import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const workoutCategories = [
  { name: 'โปรแกรมแขน', icon: '💪' },
  { name: 'โปรแกรมไหล่', icon: '🦾' },
  { name: 'โปรแกรมอก', icon: '🫁' },
  { name: 'โปรแกรมขา', icon: '🦵' },
  { name: 'โปรแกรมหลัง', icon: '🦴' },
];

const WorkoutsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">หมวดหมู่การฝึกออกกำลังกาย</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {workoutCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
              <div className="text-4xl mb-2">{category.icon}</div>
              <h2 className="text-lg font-semibold">{category.name}</h2>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkoutsPage;