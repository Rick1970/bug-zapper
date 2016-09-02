import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow(){
      this.set('addNewQuestion', true);
    },
    save() {
      var params = {
        author: this.get('author'),
        message: this.get('message'),
        detail: this.get('detail')
      };
      this.set('addNewQuestion', false);
      this.sendAction('save', params);
    }
  }
});
