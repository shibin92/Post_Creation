import Ember from 'ember';

export default Ember.Component.extend({
    model() {
        Ember.Logger.info('model-----------');
    },
    showButtons:false,
    mouseEnter: function () {
        this.toggleProperty('showButtons');
    },
    mouseLeave: function () {
        this.toggleProperty('showButtons');
    },
    actions: {
        editPost: function () {
            // ember will wait for the promises , but this will no wait for the promises
            this.sendAction('editPostAct', 'post-create-modal', Ember.get(this, 'post'));
        },
        deletePost: function (){
            Ember.Logger.info('delete');
        }
    }
});
