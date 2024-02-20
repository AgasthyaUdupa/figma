'use client'
import Live from "@/components/Live";

export default function Page() {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center text-center">
      <h1 className="font-xl font-bold text-2xl text-white ">Hey</h1>
      <Live />
    </div>
  );
}
