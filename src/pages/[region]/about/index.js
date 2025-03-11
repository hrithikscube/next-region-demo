import React from 'react';
import { usePathname } from 'next/navigation';
import { getRegionSlug, isRouteValid } from '@/utils/helpers';
import PageNotFound from '@/components/common/PageNotFound';
import { useRouter } from 'next/router';

const CommonAboutPage = () => {

    const Router = useRouter()

    const pathname = usePathname()

    if (!isRouteValid(pathname)) {
        return (
            <PageNotFound />
        )
    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
            CommonAboutPage
            <button onClick={() => Router.push(`/${getRegionSlug(pathname)}/products`)}>Go to Product</button>
        </div>
    )
}

export default CommonAboutPage