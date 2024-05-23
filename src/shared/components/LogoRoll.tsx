
export default function LogoRoll() {
    const logos = [
        { src: "/logos/aws.svg", alt: "AWS logo" },
        { src: "/logos/coursera.svg", alt: "Coursera logo" },
        { src: "/logos/nextjs_logo_dark.svg", alt: "NextJS logo" },
        { src: "/logos/prime-video.svg", alt: "Prime video logo" },
        { src: "/logos/sanity.svg", alt: "Sanity logo" },
        { src: "/logos/webflow.svg", alt: "Webflow logo" },
    ];

    const dobleLogos = logos.concat(logos);

    return (
        <section
            className="w-max max-w-5xl overflow-hidden select-none "
            style={{
                WebkitMask:
                    "linear-gradient(90deg, transparent, black 20%, black 80%, transparent)",
                mask: "linear-gradient(90deg, transparent, black 20%, black 80%, black transparent)",
            }}
        >
            <div className="w-full h-fit max-w-5xl flex flex-col justify-center select-none overflow-hidden">
                <div className="w-max flex justify-center items-center flex-nowrap gap-[4rem] animate-slide-logos">
                    {dobleLogos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.src}
                            alt={logo.alt}
                            loading="eager"
                            className="size-28 object-contain"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}