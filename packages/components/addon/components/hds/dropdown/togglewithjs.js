import Component from '@glimmer/component';

export const BUTTON_DEFAULT_COLOR = 'primary';
export const BUTTON_COLORS = ['primary', 'secondary'];
export const MORE_DEFAULT_SIZE = 'medium';
export const MORE_SIZES = ['medium', 'small'];

export default class HdsDropdownTogglewithjsComponent extends Component {
  get text() {
    let { text } = this.args;
    return text;
  }

  get size() {
    if (this.args.size) {
      return 'small';
    } else {
      return 'medium';
    }
  }

  get color() {
    if (this.args.color) {
      return 'secondary';
    } else {
      return 'primary';
    }
  }

  get iconSize() {
    if (this.args.size) {
      return '16';
    } else {
      return '24';
    }
  }
  get isDisabled() {
    return this.args.isDisabled ?? null;
  }

  get classNames() {
    let classes = ['hds-dropdown-toggle'];
    classes.push(`hds-dropdown-toggle--with-js`);
    classes.push(`hds-dropdown-toggle__${this.args.toggle}`);
    classes.push(`hds-dropdown-toggle__more--${this.size}`);
    classes.push(`hds-dropdown-toggle__text--${this.color}`);

    return classes.join(' ');
  }
}
