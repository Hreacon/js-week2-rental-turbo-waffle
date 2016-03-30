import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      cities: this.store.findAll('city')
    });
  },

  actions: {
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    update(rental, parameters) {
      Object.keys(parameters).forEach(function(key){
        if(parameters[key] !== undefined) {
          rental[key] = parameters[key];
        }
      });
      rental.save();
      this.transitionTo('index');
    }
  }
});
