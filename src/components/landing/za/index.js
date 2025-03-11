import React from 'react';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { getRegionSlug } from '@/utils/helpers';

const ZALandingPage = () => {
    const Router = useRouter()
    const pathname = usePathname()
    return (
        <div className='flex flex-col w-full h-screen items-center justify-center'>
            ZALandingPage

            <button onClick={() => Router.push(`/${getRegionSlug(pathname)}/about`)} className='cursor-pointer'>
                Go to About
            </button>
        </div>
    )
}

export default ZALandingPage