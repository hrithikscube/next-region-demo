import React from 'react';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { getRegionSlug } from '@/utils/helpers';

const USLandingPage = () => {
    const Router = useRouter()
    const pathname = usePathname()
    return (
        <div className='flex flex-col w-full h-screen items-center justify-center'>
            USLandingPage

            <button onClick={() => Router.push(`/${getRegionSlug(pathname)}/about`)} className='cursor-pointer'>
                Go to About
            </button>
        </div>
    )
}

export default USLandingPage