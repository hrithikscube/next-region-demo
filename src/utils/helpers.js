
export const checkPathname = (pathname) => {
    return (!(typeof pathname === 'undefined') && !pathname?.includes('ca') && !pathname?.includes('in') && !pathname?.includes('za') && !pathname?.includes('us'))
}

export const getRegionSlug = (pathname) => {
    if (pathname?.includes('in')) {
        return 'in'
    }
    if (pathname?.includes('us')) {
        return 'us'
    }
    if (pathname?.includes('ca')) {
        return 'ca'
    }
    if (pathname?.includes('za')) {
        return 'za'
    }
}