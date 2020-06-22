<template>
  <div class="card-wrapper">
    <div class="card-image-wrapper">
      <img
        v-bind:src="getImageUrl(imgPublicId)"
        width="150"
        v-bind:alt="title + ' image'"
      />
    </div>
    <div class="card-info-wrapper">
      <div>{{ title }}</div>
      <div>{{ description }}</div>
      <div>{{ url }}</div>
    </div>
  </div>
</template>
<script>
  import { createUrl } from '@contentchef/contentchef-media';
  export default {
    props: {
      title: String,
      description: String,
      url: String,
      imgPublicId: String,
    },
    methods: {
      getImageUrl: (publicId) => createUrl(publicId)
    }
  }
</script>
<style>
.card-wrapper {
  display: flex;
  flex-direction: row;
  padding: 20px;
  box-shadow: 0 0 6px 6px #00000020;
  margin-bottom: 40px;
  color: initial;
}
.card-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-info-wrapper {
  flex: 1;
  display:  flex;
  flex-direction:  column;
  justify-content: space-between;
  padding-left: 20px;
}
</style>
