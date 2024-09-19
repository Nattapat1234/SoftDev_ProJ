import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <img src="/placeholder.svg" alt="Energym Logo" className="mx-auto w-16 h-16" />
        <h2 className="mt-4 text-2xl font-bold">เข้าสู่ระบบ</h2>
      </div>
      <form className="space-y-4">
        <div>
          <Input type="email" placeholder="อีเมล" />
        </div>
        <div>
          <Input type="password" placeholder="รหัสผ่าน" />
        </div>
        <Button className="w-full">เข้าสู่ระบบ</Button>
      </form>
      <div className="text-center space-y-2">
        <Link to="/signup" className="text-sm text-blue-600 hover:underline">สร้างบัญชีของคุณ</Link>
        <br />
        <Link to="/password-recovery" className="text-sm text-blue-600 hover:underline">ลืมรหัสผ่าน?</Link>
      </div>
    </div>
  );
};

export default LoginForm;