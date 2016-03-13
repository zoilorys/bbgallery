import GalleryItem from './gallery-item';
import SingleView from './single';

export default Backbone.View.extend({
  className: 'container-fluid',
  template: Handlebars.compile($('#gallery').html()),

  render: function() {
    this.$el.append(this.template());

    this.$el.find('.row').eq(1)
    .append(
      this.collection.map(model => new GalleryItem({ model: model }).render().el)
    );

    return this;
  },

  events: {
    'click .gallery-item a': 'viewItem'
  },

  viewItem: function(e) {
    let id = parseInt($(e.target).attr('data-id'));

    $('#app').empty().append(
      new SingleView({
        model: this.collection.get(id)
      }).render().el
    );
  }
});
