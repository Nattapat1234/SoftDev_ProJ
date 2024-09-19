import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "สมชาย ใจดี",
    text: "ฉันรู้สึกแข็งแรงขึ้นและมีพลังงานมากขึ้นหลังจากใช้ ENERGYM เพียงแค่ 2 เดือน!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "สมหญิง สุขใจ",
    text: "โปรแกรมการออกกำลังกายที่ปรับแต่งได้ช่วยให้ฉันบรรลุเป้าหมายสุขภาพของฉันได้เร็วกว่าที่คิด",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "ใจดี มีสุข",
    text: "ชุมชนที่ให้กำลังใจและโค้ชที่เชี่ยวชาญทำให้การออกกำลังกายสนุกและน่าตื่นเต้น",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">เสียงจากสมาชิก</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto" />
              </CardHeader>
              <CardContent>
                <p className="text-center italic mb-4">"{testimonial.text}"</p>
                <p className="text-center font-semibold">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;