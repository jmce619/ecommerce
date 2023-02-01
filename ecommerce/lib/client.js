import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


 const client = sanityClient({
    projectId: 'nhooots7',
    dataset: 'production',
    apiVersion: '2023-01-31',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
  });

  const builder = imageUrlBuilder(client);

  export const urlFor = (source) => builder.image(source);