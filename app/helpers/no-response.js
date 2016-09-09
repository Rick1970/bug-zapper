import Ember from 'ember';

export function noResponse(params/*, hash*/) {
  var response = params[0];
  if(response.get('responses').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-exclamation-sign"></span>');
  }
}

export default Ember.Helper.helper(noResponse);
