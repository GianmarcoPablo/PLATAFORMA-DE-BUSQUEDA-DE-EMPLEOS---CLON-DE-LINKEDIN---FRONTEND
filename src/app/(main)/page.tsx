import GlitchBanner from '@/shared/components/Glich'
import HeroMain from '@/shared/components/HeroMain'
import Image from 'next/image'
import Navbar from '@/shared/components/Navbar'
import LogoRoll from '@/shared/components/LogoRoll'
import AboutMain from '@/shared/components/AboutMain'
import Testimonials from '@/shared/components/Testimonials'
export default function page() {
    return (
        <>
            <div className="fixed left-0 top-0 -z-10 h-full w-full">
                <HeroMain />
            </div>
            <div className='border-b-custom'>
                <Navbar />
            </div>
            <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 ">
                <div className='flex justify-center items-center'>
                    <GlitchBanner />
                    <Image
                        src="./main-image.svg"
                        alt="main-image"
                        width={450}
                        height={450}
                    />
                </div>

                <section >
                    <AboutMain />
                </section>

                <section className='flex justify-center container mx-auto'>
                    <LogoRoll />
                </section>

                <section className='flex justify-center container mx-auto'>
                    <Testimonials />
                </section>
            </div >
        </>
    )
}
