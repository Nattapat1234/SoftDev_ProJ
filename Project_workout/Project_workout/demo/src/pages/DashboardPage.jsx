import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">ยินดีต้อนรับสู่ ENERGYM</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="โปรแกรมแขน" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">โปรแกรมแขน</h2>
              <p className="text-gray-600 mb-4">การออกกำลังกายเพื่อเสริมสร้างกล้ามเนื้อแขนให้แข็งแรง</p>
              <Button as={Link} to="/workouts/arms" className="w-full">เริ่มเลย</Button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="โปรแกรมขา" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">โปรแกรมขา</h2>
              <p className="text-gray-600 mb-4">การออกกำลังกายเพื่อเสริมสร้างกล้ามเนื้อขาให้แข็งแรง</p>
              <Button as={Link} to="/workouts/legs" className="w-full">เริ่มเลย</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;