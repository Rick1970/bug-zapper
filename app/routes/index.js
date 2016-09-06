import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      responses: this.store.findAll('response')
    });
  },

  actions: {
    save(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save()
      .catch(e => {console.log(e.errors);});
      this.transitionTo('index');
    }
  }
});
