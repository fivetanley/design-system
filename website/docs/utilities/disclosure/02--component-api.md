---
title: Disclosure
category: utilities
component: disclosure
section: component-api
---

Here is the API for the component:

<dl class="dummy-component-props" aria-labelledby="component-api-disclosure"><dt>&lt;:toggle&gt; <code>named block</code></dt><dd><p>This is a named block where to pass the interactive element that works as "toggle" for the disclosure.</p></dd><dt>[:toggle].onClickToggle <code>event handler</code></dt><dd><p>Function that needs to be called by the interactive element to toggle the visibility of the content.</p></dd><dt>[:toggle].isOpen <code>tracked property</code></dt><dd><p>Hook into this tracked property if you need to access the state of `isOpen`.</p></dd><dt>&lt;:content&gt; <code>named block</code></dt><dd><p>This is a named block where to pass the actual content that is shown/hidden upon toggling.</p></dd><dt>[:content].close <code>function</code></dt><dd><p>Function that can be called to programmatically close the dropdown.</p></dd><dt>onClose <code>function</code></dt><dd><p>Callback function invoked when the dropdown is closed (if provided).</p></dd><dt>...attributes</dt><dd><p><code class="dummy-code">...attributes</code> spreading is supported on this component.</p></dd></dl>