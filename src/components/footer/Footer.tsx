import LivLogo from '../../assets/footer/LivLogo.svg?react'
import IgIcon from '../../assets/footer/instagram.svg?react';
import FbIcon from '../../assets/footer/facebook.svg?react';
import XIcon from '../../assets/footer/x.svg?react';
import YtIcon from '../../assets/footer/youtube.svg?react';
import TtIcon from '../../assets/footer/tiktok.svg?react';

export default function Footer() {
    return (
        <footer className='bg-harmony-500 font-[Poppins] text-netrual1-500'>
            <div className='mx-auto px-80 py-53'>
                {/* ───────────────── Row 1 ───────────────── */}
                <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg-justify-between'>
                    {/* Brand / pitch / CTA */}
                    <div className='max-w-[27.9375rem]'>
                        <LivLogo className='w-40 md:w-48'/>
                        <p className='mt-6 text-xl font-bold leading-[130%]'>
                            Changing the way you age to live <br />
                            healthier, longer, better
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}