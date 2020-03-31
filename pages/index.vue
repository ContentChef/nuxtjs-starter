<template>
  <div>
    <h1 class="title">
      ContenChef + NuxtJs starter
    </h1>
    <h2 class="subtitle">
      Top Sites
    </h2>
    <div v-if="topSites.length" class="top-sites-wrapper">
      <div v-for="item in topSites">
        <card
          v-bind:title="item.payload.title"
          v-bind:description="item.payload.description"
          v-bind:url="item.payload.url"
          v-bind:img-public-id="item.payload.image"
          v-bind:cloud-name="item.requestContext.cloudName"
        />
      </div>
    </div>
    <div v-else>No Contents Found.</div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Card from '~/components/Card.vue'

export default {
  async asyncData (context) {
    const result = await context.app.contentChefClient.searchPreviewStagingContents('top-site');
    return { topSites: result }
  },
  components: {
    Logo,
    Card
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

.top-sites-wrapper {
  width: 80%;
  margin: 0 auto;
}
</style>
