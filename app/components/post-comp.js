import Ember from 'ember';

export default Ember.Component.extend({
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
            this.sendAction('editAct', 'post-create-modal');
            this.sendAction('sendAct', Ember.get(this, 'post'));
        },
        deletePost: function (){
            this.sendAction('delAct', Ember.get(this, 'post'));
        }
    }
});
