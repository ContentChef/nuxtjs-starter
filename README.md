# nuxtjs-starter

> ContenChef + NuxtJs starter

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Inside the pages you can find two pages:
    - `pages/index.vue` in this page you will find an example of list of published contents
    - `pages/top-site/_publicId.vue` in this page you will find an example of a published content

## Before to start
Before to start with this starter project you will need:

    - an active ContentChef subscription and an active space 
    - your spaceId, spaceApiKey and the ContentChef api url (you can get those information in your space home inside the ContentChef dashboard app) 

## STEP

    1) publish to stage your all your contents inside the ***Starter Repository***
    2) install @contentchef/contentchef-node (needed to retrieve contents from ContentChef) npm install --save @contentchef/contentchef-node
    3) create a plugin inside the plugins folder to injext contentchef support class in app context and add it in nuxt.config.js 
    4) install cloudinary-vue (since we work with cloudinary to handle media you will need of it to retrieve your media publicId) npm install cloudinary-vue and npm install current-script-polyfill (needed to use cloudinary-vue package)
    5) create a component a card that will handle your contentchef search data
    5) inside the page ***pages/index.vue*** implement the next method ***asyncData*** (used to retrieve ContentChef data) and your card component and logic to handle search contents data
    6) create a new folder inside the pages folder and call it ***top-sites*** inside the folder create a file named ***_publicId.vue***
    7) inside the file ***_publicId.vue*** implement the next method ***asyncData*** (used to retrieve ContentChef data) and add logic inside component to show your ContentChef get data

## Learn More

To learn more about ContentChef and Next.js, take a look at the following resources:

- [ContentChef Site](https://contentchef.io) - to know more about ContentChef
- [ContentChef Documentation](https://docs.contentchef.io/) - learn about ContentChef features
- [Nuxt.js docs](https://nuxtjs.org/) - learn about Nuxt.js features and API.
