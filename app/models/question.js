import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  message: DS.attr(),
  detail: DS.attr(),
  responses: DS.hasMany('response', {async: true})
});
