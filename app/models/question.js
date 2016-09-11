import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  author: DS.attr(),
  message: DS.attr(),
  detail: DS.attr(),
  responses: DS.hasMany('response', {async: true}),

  fullQuestion: Ember.computed(function() {
    return this.get('author') + ' asked:  ' + this.get('message') + ('detail');
  })
});
