<template>
  <div v-if="!!topSite" class="site-wrapper">
    <div>
      <h1 class="title">
        Welcome to <a href="https://contentchef.io">ContentChef!</a> + <a href="https://nuxtjs.org">Nuxt.js</a> tutorial
      </h1>
      <p class="subtitle">
        One of the best site
      </p>
    </div>
    <div class="site-wrapper">
      <img
        v-bind:src="getImageUrl(topSite.image)"
        v-bind:alt="topSite.title + ' image'"
      />
      <div class="site-content-wrapper">
        <div class="site-title">{{topSite.title}}</div>
        <div class="site-description">{{topSite.description}}</div>
        <div>{{topSite.url}}</div>
      </div>
    </div>
  </div>
  <div v-else>
    No Content Found
  </div>
</template>
<script>
import { createUrl } from '@contentchef/contentchef-media';

export default {
  async asyncData({ app, params }) {
    const result = await app.contentChefClient.getContent(params.publicId);
    return {
      topSite: result.payload,
    }
  },
  methods: {
    getImageUrl: (publicId) => createUrl(publicId)
  }
}

</script>
<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3em;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 1.5em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.site-wrapper {
  text-align: center;
}
.site-content-wrapper {
  padding-top: 20px;
  text-align: center;
}
.site-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 2em;
}
.site-description {
  margin-bottom: 1.5em;
}
</style>
