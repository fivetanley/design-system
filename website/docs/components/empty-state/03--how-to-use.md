---
title: Card
category: components
component: empty-state
section: how-to-use
---

The EmptyState component is a block-yielding component that contains three child components: a header, body and footer. Each child component is also a block yield. While none of the child components are explicitly required, use of at least the header or body components are recommended.

#### Basic use

Invocation of the component would look something like this:

```handlebars
<Hds::EmptyState as |E|>
  <E.Header>Meaningful Header Text</E.Header>
  <E.Body>Body text content that provides a meaningful message to the end user.</E.Body>
  <E.Footer>Footer Content - text, or a link or maybe even a (secondary) button.</E.Footer>
</Hds::EmptyState>
```

Renders to:

Meaningful Header Text Body text content that provides a meaningful message to the end user Footer Content - text, or a link or maybe even a (secondary) button.

#### Header and Body

Invocation of the component would look something like this:

```handlebars
<Hds::EmptyState as |E|>
  <E.Header>Header Text</E.Header>
  <E.Body>Body Text</E.Body>
</Hds::EmptyState>
```

Renders to:

Header Text Body Text