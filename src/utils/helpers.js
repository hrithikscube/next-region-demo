export const isRouteValid = (pathname) => {
    return /^\/(us|ca|in|za)(\/.*)?$/.test(pathname);
};

export const validRegions = ['us', 'ca', 'za', 'in'];
