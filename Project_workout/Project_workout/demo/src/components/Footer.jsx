import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ENERGYM⚡️</h3>
            <p className="text-sm">เราช่วยคุณสร้างร่างกายที่แข็งแรงและมีสุขภาพดี</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">ลิงก์ด่วน</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-gray-300">หน้าหลัก</Link></li>
              <li><Link to="/workouts" className="hover:text-gray-300">การออกกำลังกาย</Link></li>
              <li><Link to="/nutrition" className="hover:text-gray-300">โภชนาการ</Link></li>
              <li><Link to="/community" className="hover:text-gray-300">ชุมชน</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">ติดต่อเรา</h4>
            <p className="text-sm">อีเมล: info@energym.com</p>
            <p className="text-sm">โทร: 02-123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">ติดตามเรา</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">Facebook</a>
              <a href="#" className="hover:text-gray-300">Instagram</a>
              <a href="#" className="hover:text-gray-300">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2024 ENERGYM. สงวนลิขสิทธิ์ทั้งหมด.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;