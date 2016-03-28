import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', !this.isImageShowing);
    },
    update(rental, parameters) {
      this.sendAction('update', rental, parameters);
    },
    delete(rental) {
      if(confirm("...............\n\n\nARE YOU SURE?")) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
