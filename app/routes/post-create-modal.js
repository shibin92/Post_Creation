import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        close: function() {
            return this.send('closeModal');
        }
    }
});
