import { configure } from '@contentchef/contentchef-node';

class ContentChef {
  targetDate;
  onlineChannel;
  defaultChannel = 'example-ch';

  constructor() {
    this.onlineChannel = configure({
      spaceId: 'your-space-id',
    }, this.targetDate).onlineChannel('your-online-api-key', this.defaultChannel);
  }

  setTargetDate = (targetDate) => {
    this.targetDate = targetDate;
  }

  searchContents = async (contentDefinition) => {
    try {
      return (await this.onlineChannel.search({
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

  getContent = async (publicId) => {
    try {
      const result = await this.onlineChannel
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
