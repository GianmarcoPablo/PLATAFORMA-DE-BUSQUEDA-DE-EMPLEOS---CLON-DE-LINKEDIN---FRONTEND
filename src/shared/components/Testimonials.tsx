export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            title: "CEO",
            image: "https://ui-avatars.com/api/?name=&background=FFB3C0&color=fff",
            testimonial:
                "Chonza revolutionized our software development, streamlining workflow and enhancing product quality.",
        },
        {
            id: 2,
            name: "Jane Doe",
            title: "CTO",
            image: "https://ui-avatars.com/api/?name=&background=0D8ABC&color=fff",
            testimonial:
                "Chonza is a game-changer, boosting productivity and delivering top-notch solutions.",
        },
        {
            id: 3,
            name: "John Smith",
            title: "COO",
            image: "https://ui-avatars.com/api/?name=&background=FFA36F&color=fff",
            testimonial:
                "Chonza empowered us to build stunning interfaces with ease, gaining a competitive edge.",
        },
        {
            id: 4,
            name: "Jane Smith",
            title: "CFO",
            image: "https://ui-avatars.com/api/?name=&background=FDE047&color=fff",
            testimonial:
                "Chonza exceeded expectations, saving countless development hours and focusing on what matters.",
        },
        {
            id: 5,
            name: "John Doe",
            title: "CEO",
            image: "https://ui-avatars.com/api/?name=&background=8FC0F7&color=fff",
            testimonial:
                "Chonza is a game-changer, providing tools for remarkable user experiences.",
        },
        {
            id: 6,
            name: "Jane Doe",
            title: "CTO",
            image: "https://ui-avatars.com/api/?name=&background=C7A4FF&color=fff",
            testimonial:
                "Chonza is indispensable, simplifying projects and elevating results.",
        },
        {
            id: 7,
            name: "John Smith",
            title: "COO",
            image: "https://ui-avatars.com/api/?name=&background=0D8ABC&color=fff",
            testimonial:
                "Chonza stands out as the best, offering flexibility and reliability.",
        },
        {
            id: 8,
            name: "Jane Smith",
            title: "CFO",
            image: "https://ui-avatars.com/api/?name=&background=FFB3C0&color=fff",
            testimonial:
                "Chonza accelerated our development process with robust features and seamless integration.",
        },
        {
            id: 9,
            name: "John Doe",
            title: "CEO",
            image: "https://ui-avatars.com/api/?name=&background=FFA36F&color=fff",
            testimonial:
                "Chonza is amazing, helping deliver exceptional products consistently.",
        },
        {
            id: 10,
            name: "Jane Doe",
            title: "CTO",
            image: "https://ui-avatars.com/api/?name=&background=FDE047&color=fff",
            testimonial:
                "Chonza transformed how we approach development with intuitive design and powerful features.",
        },
    ];
    const dobleTestimonials = testimonials.concat(testimonials);

    return (
        <section
            className="relative w-max max-w-7xl h-[500px] flex flex-col justify-center select-none overflow-hidden  text-white animate-fade-in"
            style={{
                WebkitMask:
                    "linear-gradient(90deg, transparent, black 20%, black 80%, transparent)",
                mask: "linear-gradient(90deg, transparent, black 20%, black 80%, black transparent)",
            }}
        >
            {Array.from({ length: 3 }).map((_, i) => (
                <div
                    key={i}
                    className={`w-full h-fit max-w-5xl flex flex-col gap-[1rem] justify-center select-none overflow-hidden`}
                >
                    <div
                        className={`w-max flex flex-nowrap p-[0.5rem] gap-[1rem] ${i % 2 === 0 ? "animate-slide" : "animate-slide-reverse"
                            }`}
                    >
                        {dobleTestimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w-[350px] flex flex-col items-center gap-2 justify-center border bg-[#10100F] border-[#303030] rounded-[1rem] p-4"
                            >
                                <div className="w-full items-center flex gap-2">
                                    <div className="relative flex justify-center items-center h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            loading="eager"
                                            className="aspect-square h-full w-full"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-semibold">
                                            {testimonial.name} - {testimonial.title}
                                        </span>
                                        <div className="flex gap-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <svg
                                                    key={i}
                                                    fill="#ffd900"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="#ffd900"
                                                    className="w-4 h-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                                    />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="h-full flex justify-start">
                                    <p className="text-sm font-medium">
                                        {testimonial.testimonial}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}