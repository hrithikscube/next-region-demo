export const isRouteValid = (pathname) => {
    return /^\/(us|ca|in|za)(\/.*)?$/.test(pathname);
};

export const validRegions = ['us', 'ca', 'za', 'in'];

export const getRegionSlug = (pathname) => {
    const match = pathname?.match(/^\/(us|ca|in|za)(\/.*)?$/);
    return match ? match[1] : null;
};