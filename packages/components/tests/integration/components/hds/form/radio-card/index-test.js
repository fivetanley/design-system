import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hds/form/radio-card/index', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the component', async function (assert) {
    await render(hbs`<Hds::Form::RadioCard />`);
    assert.dom(this.element).exists();
  });
  test('it should render with a CSS class that matches the component name', async function (assert) {
    await render(hbs`<Hds::Form::RadioCard/>`);
    assert.dom('label').hasClass('hds-form-radio-card');
  });
  test('it should render the input with a specific CSS class', async function (assert) {
    await render(hbs`<Hds::Form::RadioCard />`);
    assert.dom('input').hasClass('hds-form-radio-card__control');
  });

  // NAME, VALUE

  test('it should render the input with the arguments provided', async function (assert) {
    await render(hbs`<Hds::Form::RadioCard @name="name" @value="value" />`);
    assert.dom('input').hasValue('value');
    assert.dom('input').hasAttribute('name', 'name');
  });

  // CHECKED, DISABLED

  test('it should render the component with CSS classes that reflect the arguments provided', async function (assert) {
    await render(
      hbs`<Hds::Form::RadioCard @checked="checked" @disabled="disabled" />`
    );
    assert.dom('label').hasClass('hds-form-radio-card--checked');
    assert.dom('label').hasClass('hds-form-radio-card--disabled');
  });

  // CONTEXTUAL COMPONENTS

  test('it renders the contextual components', async function (assert) {
    await render(
      hbs`<Hds::Form::RadioCard as |R|>
            <R.Icon @name="hexagon"/>
            <R.Label>This is the label</R.Label>
            <R.Badge @text="badge"/>
            <R.Description>This is the description</R.Description>
            <R.Generic><div class="custom">This is the custom content</div></R.Generic>
          </Hds::Form::RadioCard>`
    );
    assert.dom('.flight-icon-hexagon').exists();
    assert.dom('.hds-form-radio-card__label').exists();
    assert.dom('.hds-badge').exists();
    assert.dom('.hds-form-radio-card__description').exists();
    assert.dom('.custom').exists();
  });
  test('it does not render the contextual components if not provided', async function (assert) {
    await render(hbs`<Hds::Form::RadioCard />`);
    assert.dom('.flight-icon').doesNotExist();
    assert.dom('.hds-form-radio-card__label').doesNotExist();
    assert.dom('.hds-badge').doesNotExist();
    assert.dom('.hds-form-radio-card__description').doesNotExist();
    assert.dom('.custom').doesNotExist();
  });

  // ATTRIBUTES

  test('it should spread all the attributes passed to the component on the input', async function (assert) {
    await render(
      hbs`<Hds::Form::RadioCard id="my-id" name="my-name" class="my-class" data-test1 data-test2="test" />`
    );
    assert.dom('input').hasAttribute('id', 'my-id');
    assert.dom('input').hasAttribute('name', 'my-name');
    assert.dom('input').hasClass('my-class');
    assert.dom('input').hasAttribute('data-test1');
    assert.dom('input').hasAttribute('data-test2', 'test');
  });

  // ASSERTIONS: ALIGNMENT, CONTROL POSITION, LAYOUT

  test('it should throw an assertion if an incorrect value for @alignment is provided', async function (assert) {
    const errorMessage =
      '@alignment for "Hds::Form::RadioCard" must be one of the following: left, center; received: foo';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(hbs`<Hds::Form::RadioCard @alignment="foo" />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });

  test('it should throw an assertion if an incorrect value for @controlPosition is provided', async function (assert) {
    const errorMessage =
      '@controlPosition for "Hds::Form::RadioCard" must be one of the following: bottom, left; received: foo';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(hbs`<Hds::Form::RadioCard @controlPosition="foo" />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });

  test('it should throw an assertion if an incorrect value for @layout is provided', async function (assert) {
    const errorMessage =
      '@layout for "Hds::Form::RadioCard" must be one of the following: fluid, fixed; received: foo';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(hbs`<Hds::Form::RadioCard @layout="foo" />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });

  test('it should throw an assertion if @layout is fixed and no @maxWidth value is provided', async function (assert) {
    const errorMessage =
      '@maxWidth for "Hds::Form::RadioCard" with @layout "fixed" is required';
    assert.expect(2);
    setupOnerror(function (error) {
      assert.strictEqual(error.message, `Assertion Failed: ${errorMessage}`);
    });
    await render(hbs`<Hds::Form::RadioCard @layout="fixed" />`);
    assert.throws(function () {
      throw new Error(errorMessage);
    });
  });
});
