import ContentChefClient from '@contentchef/contentchef-node';

class ContentChef {
  client = undefined;
  targetDate = undefined;
  defaultChannel = 'example-ch';

  constructor() {
    this.client = ContentChefClient({
      apiKey: 'your api key',
      host: 'content chef api host',
      spaceId: 'your space id',
    }, this.targetDate);
  }

  setTargetDate = (targetDate) => {
    this.targetDate = targetDate;
  }

  searchPreviewStagingContents = async (contentDefinition) => {
    try {
      return (await this.client.previewChannel(this.defaultChannel, 'staging').search({
        skip: 0,
        take: 10,
        contentDefinition,
        sorting: '+onlineDate'
      })).data.items
    } catch (e) {
      console.log('an error occurred retrieving your contents');
      return Promise.resolve([])
    }
  }

  getPreviewStagingContent = async (publicId) => {
    try {
      const result = await this.client
        .previewChannel(this.defaultChannel, 'staging')
        .content({
          publicId
        });
      return Promise.resolve(result.data);
    } catch (e) {
      console.log(`an error occurred retrieving your content ${publicId}`);
      return Promise.resolve(null);
    }
  }
}

export default ({ app }, inject) => {
  app.contentChefClient = new ContentChef()
}
