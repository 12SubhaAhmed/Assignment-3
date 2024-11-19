import Image from "next/image"
import Hero from "./hero";
import Second from "./second";
import Third , {Forth,Fifth,Sixth,Seventh} from "./third";

export default function home() {
  return (
    <div className="w-[1922px] h-[5669px] top-[-4239px] left-[-961px] bg-white">
      <div className="navbar w-[1920px] h-[92px] left-[1px] justify-between pt-[16px] pr-[220px] pb-[16px] pl-[220px] bg-[#043873] flex items-center">
        {/* icon */}
        <div className="flex items-center">
          <img className="w-[37px] h-[29px] mr-2" src="image/Logo Icon.png" alt="logo" />
          <div className="text-white font-bold font-sans text-[28px] leading-[33.89px]">
            whitepace
          </div>
        </div>
        {/* frame */}
        <div className="w-[737.5px] h-[60px] gap-[60px] flex">
          <div className="menu w-[594px] h-[23px] gap-[32px] mt-[18px] text-white flex item-center">
            <div className="w-[78px] h-[23px] gap-[10px]">Product</div>
            <div className="w-[78px] h-[23px] gap-[10px]">Solutions</div>
            <div className="w-[78px] h-[23px] gap-[10px]">Resources</div>
            <div className="w-[78px] h-[23px] gap-[10px]">Pricing</div>
          </div>
          <div className="w-[126px] h-[60px] gap-[24px]">
            <button className="pt-[16px] pr-[40px] pb-[16px] pl-[40px] rounded-[8px] bg-[#ffe492]">Login</button>
            </div>
        </div>
      </div>
      <Hero/>
      <Second/>
      <Third/>
      <Forth/>
      <Fifth/>
      <Sixth/>
      <Seventh/>
    </div>
  );
}
