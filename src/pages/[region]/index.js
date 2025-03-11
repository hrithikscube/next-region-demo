import dynamic from 'next/dynamic';
import React, { Fragment } from 'react';
import { useParams } from 'next/navigation';
import { checkPathname } from '@/utils/helpers';
import PageNotFound from '@/components/common/PageNotFound';

const RegionRootComponent = () => {
    const slug = useParams()

    if (checkPathname(slug?.region)) {
        return (
            <PageNotFound />
        )
    }

    // import only if region is valid
    const DynamicLandingPage = dynamic(() => import(`@/components/${slug?.region}/landing`))

    return (
        <Fragment>
            <DynamicLandingPage />
        </Fragment>
    )
}

export default RegionRootComponent

export async function getServerSideProps() {

    let data = {}

    return {
        props: data
    }

}