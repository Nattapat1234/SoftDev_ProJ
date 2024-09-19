import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";

const ExerciseDetailPage = () => {
  const { id } = useParams();
  const [useEquipment, setUseEquipment] = useState(true);

  const exerciseData = {
    name: 'Push Up',
    description: 'A classic exercise that targets your chest, shoulders, and triceps.',
    steps: [
      'Place your hands firmly on the ground, directly under shoulders.',
      'Flatten your back so your entire body is straight and slowly lower your body',
      'Draw shoulder blades back and down, keeping elbows tucked close to your body',
      'Exhale as you push back to the starting position.'
    ],
    imageWithEquipment: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    imageWithoutEquipment: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">{exerciseData.name}</h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex justify-center space-x-4 mb-4">
              <Button
                onClick={() => setUseEquipment(true)}
                variant={useEquipment ? "default" : "outline"}
              >
                แบบใช้อุปกรณ์
              </Button>
              <Button
                onClick={() => setUseEquipment(false)}
                variant={!useEquipment ? "default" : "outline"}
              >
                แบบไม่ใช้อุปกรณ์
              </Button>
            </div>
            <img
              src={useEquipment ? exerciseData.imageWithEquipment : exerciseData.imageWithoutEquipment}
              alt={exerciseData.name}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <p className="text-gray-600 mb-4">{exerciseData.description}</p>
            <h2 className="text-xl font-semibold mb-2">ขั้นตอน:</h2>
            <ol className="list-decimal list-inside space-y-2">
              {exerciseData.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExerciseDetailPage;