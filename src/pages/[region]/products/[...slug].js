import React from 'react';
import { usePathname } from 'next/navigation';
import { isRouteValid } from '@/utils/helpers';
import PageNotFound from '@/components/common/PageNotFound';

const ViewProductInformation = () => {
    const pathname = usePathname()

    if (!isRouteValid(pathname)) {
        return (
            <PageNotFound />
        )
    }

    return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
            ViewProductInformation
        </div>
    )
}

export default ViewProductInformation