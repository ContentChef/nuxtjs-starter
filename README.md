<div align="center">
  <img src="/contentchef_logo.svg" height="64"/>
</div>

NuxtJs Starter for [ContentChef - Headless CMS](https://www.contentchef.io/)
===========================

[ContentChef](https://www.contentchef.io/) is an Headless CMS designed to accelarete the development of modern,cross channel digital products.

This starter is a simple [NuxtJs](https://nuxtjs.org/) integrated with our Delivery API using the [ContentChef JS/Typescript SDK](https://github.com/ContentChef/contentchef-node)

In this example plain JS is used, but our SDK is primarly written for **Typescript** applications!

# Requirements

In order to use make this starter work, you will need

* An active ContentChef account (sign up for a 30-day free trial [here](https://www.contentchef.io/registration))
* Node JS >= 10.13

# nuxtjs-starter

# Clone & Installation

Clone the starter repo and install all the deps

```bash
    git https://github.com/ContentChef/nuxtjs-starter.git
    cd nuxtjs-starter
    npm install
```

Get your SpaceID, Online API Key from your dashboard home page.

![ContentChef Dashboard - Home](https://res.cloudinary.com/contentchef/image/upload/v1/chefsite-2910/I49Zi00Uf7S/spaceid)

Open `./plugins/ctx-contentchef-client.js` and copy your data in the client configuration and use "example-ch" for your channel now.

```javascript
    import ContentChefClient, { createUrl } from '@contentchef/contentchef-node';

    class ContentChef {
      targetDate;
      onlineChannel;
      defaultChannel = 'example-ch';
    
      constructor() {
        this.onlineChannel = ContentChefClient({
          spaceId: 'your-space-id',
        }, this.targetDate).onlineChannel('your-online-api-key', this.defaultChannel);
      }
    }

```

You are now ready to start the nuxtjs server

```bash

    npm run dev

```

Enjoy!

You can now visit [https://localhost:3000/](https://localhost:3000/) and see the list of content fetched from Content Chef!

To Learns More
===========================

* [ContentChef Website](https://wwww.contentchef.io)
* [ContentChef Docs](https://docs.contentchef.io)
* [ContentChef Blog](https://www.contentchef.io/blog)
* [Nuxt.js Documentation](https://nuxtjs.org/) - learn about Nuxt.js features and API.
