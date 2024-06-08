import { useState, useEffect } from "react";

export default function Carousel({
    autoSlide = false,
    autoSlideInterval = 3000,
    slides,
}) {
    const [curr, setCurr] = useState(0);

    useEffect(() => {
        const slide = () => {
            setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
        };
        const slideInterval = setInterval(slide, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlideInterval, slides]);

    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((img, index) => (
                    <img src={img} alt="" key={index} />
                ))}
            </div>

            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
