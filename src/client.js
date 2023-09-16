import { createClient }  from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient ({
  projectId: '4n7wa6hb',
  dataset: 'production',
  apiVersion: '2023-09-11',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});
console.log(process.env.REACT_APP_SANITY_PROJECT_ID)

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);