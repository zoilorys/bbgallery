import GalleryView from './views/gallery';

import { OperatorCollection } from './models/operator';

import { OPS } from './mockdata/operators';

$('#app').append(new GalleryView({
  collection: new OperatorCollection(OPS)
}).render().el);
