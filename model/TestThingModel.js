import { BaseModel } from 'startupjs/orm'

export default class TestThingModel extends BaseModel {
  async addSelf() {
    console.log('asd', this.getId());
    await this.root.add(this.getCollection(), {
      id: this.getId(),
      counter: 0
    })
  }

  async reset() {
    await this.set('counter', 0)
  }
}