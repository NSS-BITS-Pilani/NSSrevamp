import sanityClient from '@sanity/client';

export default sanityClient({
    dataset: "production",
    projectId: "9gzz7muj",
    apiVersion: '2021-08-31', // use a UTC date string
    useCdn: false
});