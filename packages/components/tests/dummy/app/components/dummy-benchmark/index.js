import Component from '@glimmer/component';

const ELEMENTS = 5000;
const TOGGLES = ['text', 'more', 'user'];

const randomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomString = () => (Math.random() + 1).toString(36).substring(2);
const randomBoolean = () => Math.random() > 0.5;

export default class DummyBenchmarkIndexComponent extends Component {
  get elements() {
    let elements = [];
    for (let index = 0; index < ELEMENTS; index++) {
      let element = {
        toggle: randomFromArray(TOGGLES),
        text: randomString(),
        size: randomBoolean(),
        color: randomBoolean(),
        avatarUrl: randomBoolean() ? '/assets/images/avatar.png' : undefined,
      };
      elements.push(element);
    }
    return elements;
  }
}
