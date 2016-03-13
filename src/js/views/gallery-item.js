export default Backbone.View.extend({
  className: 'col-xs-2 gallery-item',
  template: Handlebars.compile($('#gallery-item').html()),

  render: function() {
    this.$el.append(this.template(this.model.toJSON()));

    return this;
  }
});
