import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="/placeholder.svg" alt="Energym Logo" className="h-10 w-10 mr-2" />
          </Link>
          <Link to="/">
            <span className="text-xl font-bold">ENERGYM⚡️</span>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">หน้าหลัก</Link>
          <Link to="/workouts" className="text-white hover:text-gray-300">การออกกำลังกาย</Link>
          <Link to="/about" className="text-white hover:text-gray-300">เกี่ยวกับเรา</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">ติดต่อเรา</Link>
          <Link to="/profile" className="text-white hover:text-gray-300">โปรไฟล์</Link>
        </nav>
        <div>
          <Link to="/login">
            <Button variant="ghost" className="mr-2 text-white">เข้าสู่ระบบ</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-white text-gray-800">สมัครสมาชิก</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
