import React from 'react';

const categories = [
  { name: 'ไหล่', icon: '🦾' },
  { name: 'แขน', icon: '💪' },
  { name: 'หน้าอก', icon: '🫁' },
  { name: 'หลัง', icon: '🦴' },
  { name: 'ขา', icon: '🦵' },
];

const ExerciseCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">หมวดหมู่การฝึกออกกำลังกาย</h2>
        <div className="flex justify-center space-x-8">
          {categories.map((category) => (
            <div key={category.name} className="text-center">
              <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mb-4 mx-auto">
                <span className="text-4xl">{category.icon}</span>
              </div>
              <p className="font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExerciseCategories;