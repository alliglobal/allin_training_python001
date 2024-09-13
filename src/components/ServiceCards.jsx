import React from "react";
import { ServiceCard } from "./ui";

export default function ServiceCards() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-9 pb-[80px] md:pb-[164px]">
      <ServiceCard title="Chuyên viên phân tích dữ liệu" imgSrc="/data analysis icon.png" />
      <ServiceCard title="Nhà đầu tư" imgSrc="/investor.png" />
      <ServiceCard title="Nhà tiếp thị" imgSrc="/marketer.png" />
      <ServiceCard title="Nhà nghiên cứu" imgSrc="/Researcher.png" />
      <ServiceCard title="Người làm MMO" imgSrc="/mmo.png" />
      <ServiceCard title="Cá nhân" imgSrc="/person.png" />
    </div>
  );
}
