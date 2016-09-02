import Ember from 'ember';

export default Ember.Component.extend({
  isQuestionShowing: false,
  actions: {
    questionShow: function(){
      this.set('isQuestionShowing', true);
    },
    questionHide: function(){
      this.set('isQuestionShowing', false);
    },
  }
});
