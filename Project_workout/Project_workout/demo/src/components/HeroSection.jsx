import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-[500px] bg-gray-200 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="Woman exercising"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl font-bold mb-4">ตารางวิ่งยังมีวันพัก</h1>
          <p className="text-xl mb-6">แต่ถ้าคุณหยุดรักพักยังไง</p>
          <Button as={Link} to="/courses" className="text-lg px-6 py-3">
            เริ่มต้นตอนนี้
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
