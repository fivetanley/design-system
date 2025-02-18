import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hds/empty-state/footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Template block usage:
    await render(hbs`
      <Hds::EmptyState::Footer>template block text</Hds::EmptyState::Footer>
    `);

    assert.dom(this.element).hasText('template block text');
  });
  test('it should render with a CSS class that matches the component name', async function (assert) {
    await render(hbs`
      <Hds::EmptyState::Footer id="test-empty-state-footer"><p>template block text</p></Hds::EmptyState::Footer>
    `);

    assert.dom('#test-empty-state-footer').hasClass('hds-empty-state__footer');
  });
});
