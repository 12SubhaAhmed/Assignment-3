import Image from "next/image"

export default function Second(){
    return(
        <div className="w-[1920px] h-[1588px] top-[921px] left-[1px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] gap-[100px] border-2 border-red-950">
            <div className="w-[1480px] h-[547px] gap-[60px] flex">
                {/* heading */}
                <div className="w-[672px] h-[411px] gap-[60px] mt-14">
                    <div className="w-[672px] h-[174px]">
                        <h1 className="text-7xl font-bold leading-tight text-[#212529]">Project Management</h1>
                    </div>

                    {/* paragraph */}

                <div className="w-[672px] h-[90px] mt-6">
                    <p className="leading-[30px] text-lg">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>

                 {/* button */}

                    <div className="w-[201px] h-[63px] rounded-[6px] pt-[20px] pr-[40px] pb-[20px] pl-[40px] gap-[10px] bg-[#4f9cf9] mt-10 flex">
                       <button className="text-white">Get Started</button>
                    <div>
                    <img className="size-3 mt-1" src="Image/Group 212.png" alt="arrow"/></div>
                    </div>
                        </div>
                          </div>
                <div className="w-[748px] h-[547px] bg-[#c4defd]"></div>
            </div>
             {/* ////////// */}
             <div className="w-[1480px] h-[661px] gap-[100px] mt-11 flex">
                <div><img src="image/WT img.png" alt="" /></div>
                <div className="w-[670px] h-[294px] mt-[10%]">
                    <div className="w-[670px] h-[171px] gap-[24px]">
                        <div className="w-[670px] h-[87px]">
                            <h1 className="text-[#212529] text-7xl font-bold">Work together</h1></div>
                        <div className="w-[670px] h-[60px]">
                            <p className="text-[#212529] text-lg pt-2">With whitepace, share your notes with your colleagues and collaborate on them.
                               You can also publish a note to the internet and share the URL with others.</p>
                        </div>
                    </div>
                    <div className="w-[186px] h-[63px] mt-14 rounded-[6px] flex bg-[#4f9cf9] pt-[20px] pr-[40px] pb-[20px] pl-[40px] gap-[10px]">
                        <button className="text-white text-lg">Try it now</button>
                        <div><img className="size-3 mt-2" src="Image/Group 212.png" alt="arrow"/></div> </div>
                </div>
             </div>
        </div>
    )
}