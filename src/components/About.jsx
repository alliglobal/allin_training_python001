import React from "react";
import { Button } from "./ui";
import { FaWhatsapp } from "react-icons/fa";

export default function About() {
  return (
    <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-5 px-3 pt-28 md:flex-row md:pb-[145px] lg:gap-20 lg:px-0 lg:pt-[220px]">
      <div className="max-h-[495px] max-w-[586px]">
        <img
          className="custom-animate size-[85%] object-contain md:size-full"
          src="/main.png"
          alt="About"
        />
      </div>

      <div className="flex flex-col items-start gap-4">
        <h5 className="font-poppins text-[22px] font-medium tracking-[0.44px] text-secondary">
          About me
        </h5>
        <h1 className="max-w-[485px] font-poppins text-[32px] font-semibold leading-normal text-[#031432]">
         Giảng viên giàu kinh nghiệm thực chiến

        </h1>
        <p className="mb-4 max-w-[485px] text-para">
        I am doing this course as part of my preparation for an Associate Quantitative Developer role. So far it has been very clear, I am a recent graduate software engineer, but have not used python much before. I can't wait to learn how to use python and apply quantitative methods on financial data. Then I get to go a delve into Equity Futures, Options and Forwards. I might head over to Quantopian for that. Wish me luck guys! and again thanks for the great content
        </p>
        <Button title="Đăng ký ngay" Icon={FaWhatsapp} />
      </div>
    </div>

    

  );
}
