import React from "react";
import image1 from './assets/images/1.jpg'
import image2 from './assets/images/2.jpg'

export default function Blog() {
  const blogInfo = [
    {
      id: 1,
      title: "کارگاه گرافیکی و تصویری ما",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ",
    },
    {
      id: 1,
      title: "کارگاه گرافیکی و تصویری ما",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ",
    },
  ];

  return (
    <div className="mobile-container md:tablet-container xl:desktop-container flex flex-col md:flex-row gap-y-5 my-20">
      <div className="md:w-1/2 flex flex-col gap-y-4">
        <h3 className="text-4xl font-black">آخرین پست ها </h3>
        <span>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و در ستون و سطرآنچنان که لازم است و برای
          شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
        </span>
      </div>

      <div className="md:w-1/2 flex flex-col gap-2 sm:flex-row">
        <div className="flex flex-col gap-y-3 w-full">
          <img
            src={image1}
            className="w-full rounded-lg cursor-pointer shadow hover:scale-105 hover:shadow-3xl"
            alt=""
          />
          <h3 className="text-xl font-bold">
            <a href="#">{blogInfo[0].title}</a>
          </h3>
          <span className="text-black text-opacity-50">{blogInfo[0].text}</span>
        </div>

        <div className="flex flex-col gap-y-3 w-full">
          <img
            src={image2}
            className="w-full rounded-lg cursor-pointer shadow hover:scale-105 hover:shadow-3xl"
            alt=""
          />
          <h3 className="text-xl font-bold">
            <a href="#">{blogInfo[0].title}</a>
          </h3>
          <span className="text-black text-opacity-50">{blogInfo[0].text}</span>
        </div>
      </div>
    </div>
  );
}
