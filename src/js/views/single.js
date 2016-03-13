import GalleryView from './gallery';

import { OperatorCollection } from '../models/operator';

import { OPS } from '../mockdata/operators';

export default Backbone.View.extend({
  className: 'container-fluid',
  template: Handlebars.compile($('#single-view').html()),

  render: function() {
    this.$el.append(this.template(this.model.toJSON()));

    return this;
  },

  events: {
    'click .btn-back': 'goBack'
  },

  goBack: function() {
    $('#app').empty().append(
      new GalleryView({
        collection: new OperatorCollection(OPS)
      }).render().el
    );
  }
});
