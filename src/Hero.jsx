import React from "react";
import headerImage from './assets/images/header-img.png'

export default function Hero() {
  return (
    <div className="mobile-container md:tablet-container xl:desktop-container flex flex-col md:flex-row md:gap-x-4 md:justify-between gap-y-10 mt-14 font-dana text-lg">
      {/* hero text container start */}
      <div className="space-y-10 md:w-1/2">
        <div className="space-y-3 text-5xl font-black">
          <h1>
            با ما <span className="text-primary">آژانسی</span>
          </h1>
          <h1>
            <span className="text-primary">بی نظیر</span> بسازید
          </h1>
        </div>

        <div>
          <span>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک
          </span>
        </div>

        <div className="flex items-center gap-x-4">
          <button className="px-5 py-3 bg-primary text-white rounded-md font-thin border-[1px] border-transparent hover:bg-transparent hover:text-primary hover:border-primary transition-colors duration-300">
            شروع کنید
          </button>
          <button className="px-5 py-3 bg-white text-primary border-[1px] border-primary rounded-md font-thin hover:bg-primary hover:text-white hover:border-transparent transition-colors duration-300">
            تست رایگان
          </button>
        </div>
      </div>
      {/* hero text container ends */}

      {/* hero section banner start */}

      <div className="flex justify-center md:w-1/2">
        <img src={headerImage} className="max-w-[500px] md:max-w-[400px] aspect-video object-contain" alt="header-banner" />
      </div>

      {/* hero section banner ends */}
    </div>
  );
}
