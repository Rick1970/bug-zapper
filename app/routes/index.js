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
      newQuestion.save();
      this.transitionTo('index');
    },
    saveResponse(params){
      var newResponse = this.store.createRecord('response', params);
      newResponse.save();
      this.transitionTo('index');
    },
    update(question, params) {
      Object.keys(params).forEach(function(key){
        if (params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    }
  }
});
