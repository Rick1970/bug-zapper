import Ember from 'ember';

export default Ember.Component.extend({
  addNewResponse: false,
  actions: {
    responseFormShow() {
      this.set('addNewResponse', true);
    },

    saveResponse() {
      var params = {
        author: this.get('author'),
        message: this.get('message'),
        question: this.get('question')
      };
      this.set('addNewResponse', false);
      this.sendAction('saveResponse', params);
    }
  }
});
