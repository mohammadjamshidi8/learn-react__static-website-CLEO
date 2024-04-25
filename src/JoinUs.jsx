import React from "react";
import Address from "./components/Address";

export default function JoinUs() {

    const addressInfo = [
        {id: 1, title : 'آدرس', text : ' خیابان 121 کینگ ، ملبورن ویکتوریا 3000 استرالیا '},
        {id: 2, title : 'تلفن', text : '+61 3 8376 6284'},
        {id: 3, title : 'ایمیل', text : 'support@example.com'},
    ]

  return (
    <div className="mobile-container md:tablet-container xl:desktop-container">
      <div className="w-full flex items-center justify-center">
        <h3 className="font-black text-4xl"> به ما بپیوندید </h3>
      </div>

      <div className="w-full flex flex-col md:flex-row md:gap-x-5 md:gap-y-0  gap-y-4 mt-10">
        <div className="flex flex-col md:w-1/2 gap-y-3">
            {addressInfo.map(item => (
                <Address {...item} />
            ))}
        </div>

        <div className="md:w-1/2">
            <form className="flex flex-col gap-y-4" action="">
                <div className="w-full flex gap-3">
                    <input className="w-1/2 rounded-md bg-gray-100 px-3 outline-none py-3 border-[1px]" type="text" id="" placeholder="نام"/>
                    <input className="w-1/2 rounded-md bg-gray-100 px-3 outline-none py-3 border-[1px]" type="email" id="" placeholder="ایمیل" />
                </div>
                <div className="w-full">
                    <input className="w-full rounded-md bg-gray-100 px-3 outline-none py-3 border-[1px]" type="text" id="" placeholder="موضوع" />
                </div>
                <div className="w-full">
                    <textarea className="w-full bg-gray-100 rounded-md px-3 outline-none py-3 border-[1px] md:h-52" id="" cols="30" rows="10" placeholder="پیام"></textarea>
                </div>
                <div className="flex justify-center">
                    <button className="px-8 py-4 bg-primary rounded-md text-white hover:scale-105 transition duration-200">ارسال پیام</button>
                </div>
            </form>
        </div>

      </div>
    </div>
  );
}
