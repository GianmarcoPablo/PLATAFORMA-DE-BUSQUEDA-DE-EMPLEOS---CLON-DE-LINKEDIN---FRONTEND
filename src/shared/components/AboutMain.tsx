import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function AboutMain() {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-2 gap-8'>
                <div className='col-span-1'>
                    <div className='p-5 text-muted-foreground transition-colors hover:text-foreground hover:bg-popover-foreground hover:rounded-lg'>
                        <span className='text-gray-500 text-sm border-l border-l-gray-500 pl-2'>September 5, 2022</span>
                        <h2 className=' text-white my-2'>Crafting a desing system for a multyplanetary future</h2>
                        <p className='text-gray-400 text-[0.980rem] my-3'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique molestias officiis veritatis iusto quod sit, dolorem voluptates vitae harum ea beatae obcaecati perspiciatis amet commodi consectetur repudiandae
                        </p>
                        <Link className='text-rose-500 text-[0.900rem] font-semibold' href={"/"}>
                            Read article →
                        </Link>
                    </div>
                    <div className='p-5 text-muted-foreground transition-colors hover:text-foreground hover:bg-popover-foreground hover:rounded-lg'>
                        <span className='text-gray-500 text-sm border-l border-l-gray-500 pl-2'>September 5, 2022</span>
                        <h2 className=' text-white my-2'>Crafting a desing system for a multyplanetary future</h2>
                        <p className='text-gray-400 text-[0.980rem] my-3'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique molestias officiis veritatis iusto quod sit, dolorem voluptates vitae harum ea beatae obcaecati perspiciatis amet commodi consectetur repudiandae
                        </p>
                        <Link className='text-rose-500 text-[0.900rem] font-semibold' href={"/"}>
                            Read article →
                        </Link>
                    </div>
                    <div className='p-5 text-muted-foreground transition-colors hover:text-foreground hover:bg-popover-foreground hover:rounded-lg'>
                        <span className='text-gray-500 text-sm border-l border-l-gray-500 pl-2'>September 5, 2022</span>
                        <h2 className=' text-white my-2'>Crafting a desing system for a multyplanetary future</h2>
                        <p className='text-gray-400 text-[0.980rem] my-3'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique molestias officiis veritatis iusto quod sit, dolorem voluptates vitae harum ea beatae obcaecati perspiciatis amet commodi consectetur repudiandae
                        </p>
                        <Link className='text-rose-500 text-[0.900rem] font-semibold' href={"/"}>
                            Read article →
                        </Link>
                    </div>
                    
                </div>
                <aside className='col-span-1'>
                    <div className='border-all-custom p-5'>
                        <div className='flex gap-2 items-center'>
                            <Mail size={18} className='text-gray-400' />
                            <p className='text-white text-sm'>Contactanos</p>
                        </div>
                        <p className='my-3 text-gray-400 text-sm'>Get notified when I publish something new, and unsubscribe at any time.</p>
                        <div className='flex gap-3 items-center'>
                            <input
                                className='bg-zinc-900 p-3 text-gray-400 border-all-custom text-sm w-full'
                                placeholder='Email Address'
                            />
                            <Button>Contactar</Button>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
