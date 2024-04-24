import React, { Component } from "react";

export default class WorkTogether extends Component {
  render() {
    return (
      <div className="mobile-container md:tablet-container xl:desktop-container flex flex-col gap-y-8 px-4 bg-primary bg-opacity-90 py-10 rounded-lg text-white sm:flex-row sm:justify-between sm:px-4 sm:items-center lg:px-14">
        <h4 className="text-4xl sm:text-3xl lg:text-4xl text-center font-black">بیایید با هم روی پروژه شما کار کنیم</h4>
        <button className="bg-primary font-thin border-[1px] border-transparent px-6 py-3 rounded-md self-center hover:border-primary hover:text-primary hover:bg-white transition-colors duration-200">تماس با ما</button>
      </div>
    );
  }
}
