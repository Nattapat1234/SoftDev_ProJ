import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const workouts = [
  {
    title: "เบิร์นไขมันทั้งตัว",
    description: "การออกกำลังกายแบบ HIIT 30 นาที",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    duration: "30 นาที",
    level: "ปานกลาง"
  },
  {
    title: "โยคะเพื่อความยืดหยุ่น",
    description: "เพิ่มความยืดหยุ่นและผ่อนคลายกล้ามเนื้อ",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    duration: "45 นาที",
    level: "เริ่มต้น"
  },
  {
    title: "สร้างกล้ามเนื้อทั้งตัว",
    description: "การฝึกเวทเทรนนิ่งแบบครบวงจร",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    duration: "60 นาที",
    level: "ขั้นสูง"
  }
];

const FeaturedWorkouts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">การออกกำลังกายแนะนำ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workouts.map((workout, index) => (
            <Card key={index}>
              <CardHeader>
                <img src={workout.image} alt={workout.title} className="w-full h-48 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>{workout.title}</CardTitle>
                <CardDescription>{workout.description}</CardDescription>
                <div className="mt-4 flex justify-between text-sm text-gray-600">
                  <span>{workout.duration}</span>
                  <span>{workout.level}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">เริ่มการออกกำลังกาย</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkouts;