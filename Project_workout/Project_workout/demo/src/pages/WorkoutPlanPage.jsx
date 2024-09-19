import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WorkoutPlanPage = () => {
  const location = useLocation();
  const { profile } = location.state || {};

  // This is a simple example of workout plan generation
  // In a real application, this would be more complex and based on the user's profile
  const workoutPlan = [
    { title: 'วิดพื้น', reps: '3 x 3-5 Reps', muscleGroup: 'chest' },
    { title: 'ดึงข้อ', reps: '3 x 3-5 Reps', muscleGroup: 'back' },
    { title: 'สควอท', reps: '3 x 3-5 Reps', muscleGroup: 'legs' },
  ];

  const getMuscleIcon = (muscleGroup) => {
    switch (muscleGroup) {
      case 'chest':
        return '🫁';
      case 'back':
        return '🦴';
      case 'legs':
        return '🦵';
      default:
        return '💪';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">แผนการออกกำลังกายที่เหมาะสำหรับคุณ</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          {workoutPlan.map((exercise, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg flex items-center">
              <div className="flex-grow">
                <h2 className="text-xl font-semibold">{exercise.title}</h2>
                <p>{exercise.reps}</p>
              </div>
              <div className="text-4xl">{getMuscleIcon(exercise.muscleGroup)}</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkoutPlanPage;