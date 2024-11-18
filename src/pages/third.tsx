    //  third div

export default function Third() {
    return (
        <div className="main w-[1921px] h-[759px] top-[2509px] left-[1px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] gap-[98px] bg-[#043873] flex">
            {/* First Div - Main Content */}
            <div className="first w-[697px] h-[294px] gap-[60px] mt-32">
                {/* Section with Title and Paragraph */}
                <div className="w-[697px] h-[171px] gap-[24px]">
                    {/* Title */}
                    <div className="w-[697px] h-[87px]">
                        <h1 className="text-white font-bold text-7xl">Use as Extension</h1>
                    </div>
                    {/* Paragraph */}
                    <div className="paragraph w-[697px] h-[60px] mt-2">
                        <p className="text-white text-lg tracking-wide">
                            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                        </p>
                    </div>
                </div>

                {/* Button Section */}
                <div className="w-[171px] h-[63px] mt-14 rounded-[6px] bg-[#4f9cf9] pt-[20px] pr-[40px] pb-[20px] pl-[40px] gap-[10px] flex">
                    <button className="text-white">Let's Go</button>
                    <div>
                        <img className="size-3 mt-1.5" src="Image/Group 212.png" alt="arrow" />
                    </div>
                </div>
            </div>

            {/* Second Div (Next to the first one) */}
            <div className="second w-[686px] h-[479px] gap-[4px] bg-[#c4defd]">
                </div>
            </div>
    );
}

        //    fourth div

   export function Forth(){
    return(
        <div className="w-[1921px] h-[812.09px] top-[3268px] left-[1px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] gap-[98px] border-2 border-blue-600 flex">
             <div className="second w-[714px] h-[532.09px] gap-[4px] bg-[#c4defd]">
             </div>

         {/* First Div - Main Content */}
         <div className="first w-[697px] h-[294px] gap-[60px] mt-16">
                {/* Section with Title and Paragraph */}
                <div className="w-[669px] h-[411px] gap-[60px]">
                    {/* Title */}
                    <div className="w-[669px] h-[174px]">
                        <h1 className="text-[#212529] font-bold text-7xl">Customise it to your needs</h1>
                    </div>
                    {/* Paragraph */}
                    <div className="paragraph w-[669px] h-[90px] mt-2">
                        <p className="text-[#212529] text-lg tracking-wide">
                        Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                        </p>
                    </div>
                     {/* Button Section */}
                <div className="w-[171px] h-[63px] mt-[11%] rounded-[8px] bg-[#4f9cf9] pt-[20px] pr-[40px] pb-[20px] pl-[40px] gap-[10px] flex">
                    <button className="text-white">Let's Go</button>
                    <div>
                        <img className="size-3 mt-1.5" src="Image/Group 212.png" alt="arrow" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};

        ///// Fifth div

export function Fifth() {
    return (
        <div className="w-[1921px] h-[574px] top-[4080px] left-[1px] bg-[#043873] flex justify-center items-center">
            <div className="w-[1481px] h-[294px] gap-[60px]">
                <div className="w-[1064px] h-[171px] gap-[24px] ml-[13%]">
                    <div className="w-[1064px] h-[87px]">
                        <h1 className="text-7xl text-white font-bold">Your work, everywhere you are</h1>
                    </div>
                    <div className="w-[1064] h-[60px] mt-6">
                        <p className="text-white text-center ">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                    </div>
                </div>
            <div className="w-[195px] h-[63px] rounded-[8px] pt-[20px] pr-[40px] pb-[20px] pl-[40px] gap-[10px] bg-[#4f9cf9] flex ml-[40%] mt-14">
                <button className="text-white">Try Taskey</button>
                <div>
                    <img className="size-3 mt-1.5" src="Image/Group 212.png" alt="arrow" />
                    </div>
                
                </div>
            </div>
        </div>
    );
};

 /////////sponsor div
export function Sixth(){
    return(
         <div className="w-[1922px] h-[538px] top-[4654px] pt-[140px] pr-[220px] pb-[140px] pl-[220px] gap-[100px]">
            <div className="w-[1482px] h-[87px]">
                <h1 className="font-bold text-center text-7xl text-[#212529]">Our sponsors</h1>
            </div>
        <div className="w-[1482px] h-[71px] mt-24">
            <img src="Image/sponsors.png" alt="sponsors" /></div>
         </div>
    )
}

    //////// Footer
export function Seventh(){
    return(
        <div className="w-[1920px] h-[461px] top-[5195px] left-[1px] pt-[140px] pr-[220px] pb-[32px] pl-[220px] gap-[200px] bg-[#043873]">
            <div className="w-[1480px] h-[289px] gap-[100px]"><img src="Image/Content.png" alt="footer" /> </div>
        </div>
    )
}

