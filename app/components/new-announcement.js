import Ember from 'ember';

export default Ember.Component.extend({
  bullshit: false,
  model() {
    return this.store.findAll('announcement');
  },
  actions: {
    showAddForm() {
      console.log("show add form", this.bullshit);
      this.set('bullshit', true);
    },
    saveAnnouncement() {
      var params = {
        title: this.get('title'),
        body: this.get('body')
      };
      this.set('body', '');
      this.set('title', '');
      this.set('bullshit', false);
      this.sendAction('saveAnnouncement1', params);
    }
  }
});
