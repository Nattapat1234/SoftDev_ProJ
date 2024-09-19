import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="text-center">
            <img src="/placeholder.svg" alt="Energym Logo" className="mx-auto w-16 h-16" />
            <h2 className="mt-4 text-2xl font-bold">สมัครสมาชิก</h2>
          </div>
          <form className="space-y-4 mt-8">
            <div>
              <Input type="email" placeholder="อีเมล" />
            </div>
            <div>
              <Input type="password" placeholder="รหัสผ่าน" />
            </div>
            <div>
              <Input type="password" placeholder="ยืนยันรหัสผ่าน" />
            </div>
            <Button className="w-full">สมัครสมาชิก</Button>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              มีบัญชีอยู่แล้ว?{' '}
              <Link to="/login" className="text-blue-600 hover:underline">
                เข้าสู่ระบบ
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;