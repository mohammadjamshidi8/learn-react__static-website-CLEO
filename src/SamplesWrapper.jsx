import React from "react";
import Samples from "./components/Samples";

export default function SamplesWrapper() {

    const samplesInfo = [
        {id:1,image: "bg-[url('./assets/images/portfolio1.jpg')]",title: 'کاغذ دیواری', sub: 'برندینگ'},
        {id:2,image: "bg-[url('./assets/images/portfolio2.jpg')]",title: 'گل خاص', sub: 'برندینگ'},
        {id:3,image: "bg-[url('./assets/images/portfolio3.jpg')]",title: 'ساختمان عتیفه', sub: 'برندینگ'},
        {id:4,image: "bg-[url('./assets/images/portfolio4.jpg')]",title: 'تئو دیجیتال', sub: 'برندینگ'},
        {id:5,image: "bg-[url('./assets/images/portfolio5.jpg')]",title: 'رنک دیواری', sub: 'برندینگ'},
        {id:6,image: "bg-[url('./assets/images/portfolio6.jpg')]",title: 'آبی لولیپاپ', sub: 'برندینگ'},

    ]



  return (
    <div className="mobile-container md:tablet-container xl:desktop-container flex flex-col my-20 gap-y-5">
      <div className="w-full flex items-center justify-center">
        <h3 className="font-black text-4xl">نمونه کارهای ما</h3>
      </div>

      <div className="w-full flex justify-center items-center gap-x-3 md:gap-x-8 md:text-lg mt-6">
        <div>
          <input type="radio" name="sample" id="all" className="invisible opacity-0 peer" />
          <label className="text-black transition duration-150 font-thin text-opacity-50 peer-checked:text-primary peer-checked:font-bold cursor-pointer"  htmlFor="all">همه</label>
        </div>
        <div>
          <input className="invisible opacity-0 peer" type="radio" name="sample" id="web" />
          <label className="text-black transition duration-150 font-thin text-opacity-50 peer-checked:text-primary peer-checked:font-bold cursor-pointer" htmlFor="web">طراحی وب</label>
        </div>
        <div>
          <input className="invisible opacity-0 peer" type="radio" name="sample" id="marketing" />
          <label className="text-black transition duration-150 font-thin text-opacity-50 peer-checked:text-primary peer-checked:font-bold cursor-pointer" htmlFor="marketing">مارکتینگ</label>
        </div>
        <div>
          <input className="invisible opacity-0 peer" type="radio" name="sample" id="branding" />
          <label className="text-black transition duration-150 font-thin text-opacity-50 peer-checked:text-primary peer-checked:font-bold cursor-pointer" htmlFor="branding">برندینگ</label>
        </div>
      </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3">
        {samplesInfo.map(item => (
            <Samples {...item}/>
        ))}
        </div>

    </div>
  );
}
