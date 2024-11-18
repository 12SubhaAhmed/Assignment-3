import Image from "next/image"

export default function Hero(){
    return(
        <div className="w-[1920px] h-[829px] top-[92px] left-[1px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] bg-[#043873]">
            <div className="w-[2651.8px] h-[547px] opacity-[90%] flex">
                <div className="head w-[656px] h-[361px] gap-[60px] justify-center mt-[60px]">
                    {/* first heading */}
                    <div className="h-[154px] w-[656px]">
                        <h1 className="font- text-6xl font-bold leading-tight tracking-tight text-white">Get More Done with whitepace</h1></div>
                        {/* second heading */}
                        <div className="w-[656px] h-[60px]">
                            <p className="text-white text-xl pt-7">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                        </div>
                    <div className="w-[219px] h-[63px] mt-20 rounded-[8px] p-[18px] gap-[10px] bg-[#4f9cf9] flex items-center">
                        <button className="text-white text-xl tracking-tight">Try Whitepace free</button>
                    <div><img className="size-3" src="Image/Group 212.png" alt="arrow"/></div>
                    </div>
                        </div>
                <div className="w-[824px] h-[549px] gap-[4px] bg-[#c4defd]"></div>
            </div>
        </div>
    )
}