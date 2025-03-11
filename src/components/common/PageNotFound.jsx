import React, { useEffect, useState } from 'react'

const PageNotFound = () => {

    const [showLoader, setShowLoader] = useState(true)

    useEffect(() => {

        let loaderInterval = setTimeout(() => {
            setShowLoader(false)
        }, 500)

        return () => clearTimeout(loaderInterval)

    }, [])

    if (showLoader) {
        return (
            <div className='flex flex-col items-center justify-center h-screen w-full'>
                Loading...
            </div>
        )
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen w-full'>
            Page Not Found!
        </div>
    )
}

export default PageNotFound