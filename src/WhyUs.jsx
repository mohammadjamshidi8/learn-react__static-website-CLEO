import React from "react";
import aboutImage from "./assets/images/about-img.png";

export default function WhyUs() {
  return (
    <div className="mobile-container md:tablet-container xl:desktop-container flex flex-col md:flex-row md:items-center md:gap-y-0 md:gap-x-10 md:justify-between gap-y-5 mt-24">
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={aboutImage}
          className="md:max-w-[400px] lg:max-w-[600px] aspect-video object-contain"
          alt="about-image"
        />
      </div>

      <div className="flex flex-col gap-y-8 md:w-1/2">

        <h2 className="text-5xl font-black">چرا ما؟</h2>

        <div className="flex flex-col gap-5">
          <span>
            ما چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
            است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
            بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته
            حال و آینده
          </span>
          <span>
            شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
            بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
            پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام
            و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان
            مورد نیاز شامل حروفچینی دستاوردهای اصلی
          </span>
        </div>

        <ul className="pr-4">
            <li className="custom-list-item">ویژگی های کامل</li>
            <li className="custom-list-item">لورم ایپسوم متن</li>
            <li className="custom-list-item">ساختگی با تولید سادگی</li>
        </ul>

      </div>
    </div>
  );
}
