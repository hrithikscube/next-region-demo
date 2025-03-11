import dynamic from 'next/dynamic';
import React, { Fragment } from 'react';
import { useParams } from 'next/navigation';
import { validRegions } from '@/utils/helpers';
import PageNotFound from '@/components/common/PageNotFound';


const RegionRootComponent = () => {
    const slug = useParams();
    const region = slug?.region;

    if (!region || !validRegions.includes(region)) {
        return <PageNotFound />;
    }

    // Dynamically import only if region is valid
    const DynamicLandingPage = dynamic(() => import(`@/components/landing/${region}`));

    return (
        <Fragment>
            <DynamicLandingPage />
        </Fragment>
    );
};

export default RegionRootComponent;

export async function getServerSideProps() {
    return {
        props: {}, // Ensure props are returned to avoid Next.js errors
    };
}
