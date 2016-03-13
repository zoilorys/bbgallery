export const Operator = Backbone.Model.extend({
  defaults: {
    id: 0,
    name: 'Joe'
  }
});

export const OperatorCollection = Backbone.Collection.extend({
  model: Operator
});
