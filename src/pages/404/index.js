import React from 'react';
import PageNotFound from '@/components/common/PageNotFound';

const NotFound = () => {
    return (
        <PageNotFound />
    )
}

export default NotFound

export async function getStaticProps() {

    return {
        props: {
            data: {}
        }
    }

}