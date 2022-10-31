import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hds/table/index', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the component', async function (assert) {
    await render(hbs`<Hds::Table />`);
    assert.dom(this.element).exists();
  });

  test('it should render with a CSS class that matches the component name', async function (assert) {
    await render(hbs`<Hds::Table id="data-test-table"/>`);
    assert.dom('#data-test-table').hasClass('hds-table');
  });

  test('it should support splattributes', async function (assert) {
    await render(
      hbs`<Hds::Table id="data-test-table" aria-label="data test table" />`
    );
    assert
      .dom('#data-test-table')
      .hasAttribute('aria-label', 'data test table');
  });

  test('it should render the table with manual data passed and no model defined', async function (assert) {
    await render(hbs`
      <Hds::Table id="data-test-table">
        <:head>
          <Hds::Table::Tr>
            <Hds::Table::Th>Cell Header 1</Hds::Table::Th>
            <Hds::Table::Th>Cell Header 2</Hds::Table::Th>
            <Hds::Table::Th>Cell Header 3</Hds::Table::Th>
          </Hds::Table::Tr>
        </:head>
        <:body>
          <Hds::Table::Tr>
            <td>Cell Content 1 1</td>
            <td>Cell Content 1 2</td>
            <td>Cell Content 1 3</td>
          </Hds::Table::Tr>
          <Hds::Table::Tr>
            <td>Cell Content 2 1</td>
            <td>Cell Content 2 2</td>
            <td>Cell Content 2 3</td>
          </Hds::Table::Tr>
          <Hds::Table::Tr>
            <td>Cell Content 3 1</td>
            <td>Cell Content 3 2</td>
            <td>Cell Content 3 3</td>
          </Hds::Table::Tr>
        </:body>
      </Hds::Table>
    `);

    assert.dom('#data-test-table tr th:first-of-type').hasText('Cell Header 1');
    assert
      .dom('#data-test-table tr td:first-of-type')
      .hasText('Cell Content 1 1');
  });

  test('it should render a table based on the data model passed', async function (assert) {
    this.set('model', [
      { id: 1, name: 'Test 1', description: 'Test 1 description' },
      { id: 2, name: 'Test 2', description: 'Test 2 description' },
      { id: 3, name: 'Test 3', description: 'Test 3 description' },
    ]);

    await render(hbs`
      <Hds::Table id="data-test-table" @model={{this.model}}>
        <:head>
          <Hds::Table::Tr>
            <Hds::Table::Th>Id</Hds::Table::Th>
            <Hds::Table::Th>Name</Hds::Table::Th>
            <Hds::Table::Th>Description</Hds::Table::Th>
          </Hds::Table::Tr>
        </:head>
        <:body as |row|>
          <Hds::Table::Tr>
            <td>{{row.id}}</td>
            <td>{{row.name}}</td>
            <td>{{row.description}}</td>
          </Hds::Table::Tr>
        </:body>
      </Hds::Table>
    `);

    assert
      .dom('#data-test-table tr:first-of-type td:first-of-type')
      .hasText('1');
    assert
      .dom('#data-test-table tr:last-of-type td:first-of-type')
      .hasText('3');
  });
});
