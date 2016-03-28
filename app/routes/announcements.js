import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },
  actions: {
    saveAnnouncement2(params) {
      this.store.createRecord('announcement', params).save();
      this.transitionTo('announcements');
    },
    deleteAnnouncement(announcement) {
      if(confirm("Delete this announcement??")) {
        announcement.destroyRecord();
      }
    }
  }
});
