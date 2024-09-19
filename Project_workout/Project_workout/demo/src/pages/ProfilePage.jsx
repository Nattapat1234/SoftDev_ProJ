import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    height: '',
    weight: '',
    goal1: '',
    goal2: '',
    goal3: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
    // Here you would typically send the data to your backend
    navigate('/workout-plan', { state: { profile } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">ข้อมูลของคุณ</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">ชื่อ</label>
              <Input type="text" id="name" name="name" value={profile.name} onChange={handleChange} className="mt-1" />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">อายุ</label>
              <Input type="number" id="age" name="age" value={profile.age} onChange={handleChange} className="mt-1" />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="height" className="block text-sm font-medium text-gray-700">ส่วนสูง (ซม.)</label>
                <Input type="number" id="height" name="height" value={profile.height} onChange={handleChange} className="mt-1" />
              </div>
              <div className="flex-1">
                <label htmlFor="weight" className="block text-sm font-medium text-gray-700">น้ำหนัก (กก.)</label>
                <Input type="number" id="weight" name="weight" value={profile.weight} onChange={handleChange} className="mt-1" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">เป้าหมายการออกกำลังกาย</label>
              {['goal1', 'goal2', 'goal3'].map((goal, index) => (
                <Select key={goal} onValueChange={(value) => handleSelectChange(goal, value)} value={profile[goal]}>
                  <SelectTrigger className="w-full mb-2">
                    <SelectValue placeholder={`เลือกเป้าหมายที่ ${index + 1}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ลดน้ำหนัก">ลดน้ำหนัก</SelectItem>
                    <SelectItem value="เพิ่มกล้ามเนื้อ">เพิ่มกล้ามเนื้อ</SelectItem>
                    <SelectItem value="เพิ่มความแข็งแรง">เพิ่มความแข็งแรง</SelectItem>
                    <SelectItem value="เพิ่มความยืดหยุ่น">เพิ่มความยืดหยุ่น</SelectItem>
                    <SelectItem value="ปรับปรุงสุขภาพทั่วไป">ปรับปรุงสุขภาพทั่วไป</SelectItem>
                  </SelectContent>
                </Select>
              ))}
            </div>
            <div className="flex space-x-4">
              <Button type="submit" className="flex-1">สร้างแผนออกกำลังกาย</Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;