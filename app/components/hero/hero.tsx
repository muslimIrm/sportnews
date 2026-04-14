
import NewsCard from "./newsCard";
import Image from "next/image";
export default function Hero() {
    return (
        <section className="w-full h-screen overflow-hidden pt-22">
            <div className=" flex max-md:flex-col justify-between md:gap-30 gap-2 items-start relative py-16">

                {/* العمود الأول: النص الرئيسي */}
                <div className="flex flex-col items-start gap-4 relative w-full h-full">
                    <h1 className="text-7xl max-md:text-6xl  uppercase font-bold from-[#262626] to-[#B8C2CE] font-inter bg-linear-to-b bg-clip-text text-transparent ">
                        Top<br></br>
                        Scorer to<br></br>
                        the final<br></br>
                        match
                    </h1>
                    <Image src={"/basketball.png"} width={200} height={200} alt="bg hero" className=" absolute left-0 top-0 scale-125" />
                </div>


                <div className="flex flex-col h-full gap-6 items-center">
                    <div className="w-full">
                        <div className=" flex items-start">

                            <span className="px-3 py-2 bg-[#E1E8F0]  rounded">Today</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 max-md:grid-cols-2 w-full z-50 gap-3  ">
                        <NewsCard
                            category="INDYCAR"
                            date="03 June 2023"
                            title="IndyCar Detroit: Dixon quickest in second practice"
                            image="/cars.png"
                        />
                        <NewsCard
                            category="NBA"
                            date="05 June 2023"
                            title="LeBron James leads Lakers to stunning comeback victory"
                            image="/basketball-image-news.jpg"
                        />
                    </div>

                </div>


                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="relative w-full h-full max-w-300 min-w-150">
                        <Image
                            priority
                            src="/basketball-player.png"
                            fill
                            className="object-contain object-center scale-110"
                            alt="hero-player"
                            quality={75}
                        />

                        {/* نص وصفي يظهر في الشاشات الكبيرة فقط */}
                        <div className="hidden md:flex flex-col gap-3 absolute bottom-20 left-1/2 -translate-x-1/2 w-[330px] p-4 pointer-events-auto">
                            <p className="text-sm text-neutral-700">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt fuga minima placeat quidem.
                            </p>
                            <button className="w-fit bg-black hover:bg-neutral-800 transition-all active:scale-95 text-white text-sm font-medium px-6 py-2.5 rounded-xl cursor-pointer">
                                Continue Reading
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
