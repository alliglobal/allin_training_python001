import { FaRegClock } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { IoPlayOutline } from "react-icons/io5";
import { PiPlusCircleBold } from "react-icons/pi";

export default function VideoSection() {
  return (
    <div className="mx-auto max-w-screen-xl p-3 pb-28 md:pb-[164px]">
      <p className="mb-3 text-center font-poppins text-[22px] font-medium text-secondary">
        Tại sao dành cho bạn?
      </p>

      <div className="relative mt-4 flex w-full items-center justify-center">
        <img className="w-full" src="/PythonFinance.jpeg" alt="Video" />
        <button className="absolute flex size-[60px] items-center justify-center rounded-full bg-primary-start md:size-[100px]">
          <IoPlayOutline className="ml-2 size-10 text-white md:size-16" />
        </button>
      </div>

      <div>
        <h4 className="mb-3 mt-4 text-center font-poppins text-[32px] font-semibold text-[#031432]">
        Phương pháp giảng dạy bài bản, dễ hiểu
        </h4>
        <p className="mx-auto max-w-[843px] text-center text-para">
        Learn Python Programming and Conduct Real-World Financial Analysis in Python - Complete Python Training
        </p>
      </div>

      <div className="mt-[60px] flex flex-col items-center justify-center gap-6 md:flex-row">
        <Item title="+9 years of experience" />
        <Item title="Dịch vụ 24/7" Icon={FiCheckCircle} />
        <Item title="Hướng dẫn tận tình" Icon={PiPlusCircleBold} />
      </div>
    </div>
  );
}

function Item({ Icon = FaRegClock, title = "" }) {
  return (
    <div className="flex w-full items-center gap-3 rounded-[12px] bg-gradient-to-t from-[#65A8FB] to-[#1678F2] px-7 py-4 text-white transition hover:-rotate-3 md:max-w-[320px]">
      <div>
        <Icon className="size-[38px]" />
      </div>

      <h3 className="font-poppins text-lg font-medium">{title}</h3>
    </div>
  );
}
