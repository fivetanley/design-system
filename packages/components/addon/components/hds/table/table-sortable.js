import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';

export default class HdsTableTableSortableComponent extends Component {
  a11yMessageId = 'table-a11y-message-' + guidFor(this);

  get sort() {
    return `${this.args.sortBy}:${this.args.sortOrder}`;
  }

  @action
  setSortBy(column) {
    if (this.args.sortBy === column) {
      //invert the sort order
      this.args.setSortOrder(this.args.sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      this.args.setSortBy(column);
      this.args.setSortOrder('asc');
    }

    const currentColHeading = event.target;
    const currColHeadingText = currentColHeading.textContent;

    const liveRegion = document.querySelector('#a11y-notification');
    liveRegion.textContent = `Sorted by ${currColHeadingText} ${this.args.sortOrder}ending`;
    setTimeout(function () {
      liveRegion.textContent = '';
    }, 2000);
  }
}
