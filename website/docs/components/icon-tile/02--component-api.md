---
title: IconTile
category: components
component: icon-tile
section: component-api
---

Here is the API for the component:

<dl class="dummy-component-props" aria-labelledby="component-api-icontile"><dt>size <code>enum</code></dt><dd><p>Acceptable values:</p><ol><li>small</li><li class="default">medium</li><li>large</li></ol></dd><dt>logo <code>enum</code></dt><dd><p>Use this parameter to show a product logo. Acceptable values:</p><ol><li>hcp</li><li>boundary</li><li>consul</li><li>nomad</li><li>packer</li><li>terraform</li><li>vagrant</li><li>vault</li><li>waypoint</li></ol></dd><dt>icon <code>string</code></dt><dd><p>Use this parameter to show an icon. Acceptable value: any Flight icon name.</p></dd><dt>iconSecondary <code>string</code></dt><dd><p>Use this parameter to show an extra "badge" with icon on top of the tile. Acceptable value: any Flight icon name.</p><p><em>Notice: the color of the secondary icon is predefined and can't be changed.</em></p></dd><dt>color <code>enum</code></dt><dd><p>Acceptable values:</p><ol><li class="default">neutral</li><li>boundary</li><li>consul</li><li>nomad</li><li>packer</li><li>terraform</li><li>vagrant</li><li>vault</li><li>waypoint</li></ol><p><em>Notice: if it's a "logo" then we overwrite any @color parameter passed and just use the product "brand" color.</em></p></dd><dt>...attributes</dt><dd><p><code class="dummy-code">...attributes</code> spreading is supported on this component.</p></dd></dl>