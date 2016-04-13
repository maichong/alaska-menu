/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-04-12
 * @author Liang <liang@maichong.it>
 */

export default class Menu extends service.Model {
  static label = 'Menu';
  static title = 'title';
  static defaultColumns = 'title,createdAt';
  static defaultSort = '-sort';

  static fields = {
    title: {
      label: 'Title',
      type: String,
      required: true
    },
    key: {
      label: 'KEY',
      type: String,
      index: true,
      unique: true
    },
    items: {
      label: 'Menu Items',
      type: Object,
      default: []
    },
    createdAt: {
      label: 'Created At',
      type: Date
    }
  };

  preSave() {
    if (!this.createdAt) {
      this.createdAt = new Date;
    }
  }
}