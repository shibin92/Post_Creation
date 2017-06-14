import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.get('posts');
    },
    posts:[],
    showModal:false,  
    actions: {
        openModal: function(modalName, model) {
            Ember.Logger.info('Model---------', model);
            return this.render(modalName, {
                into: 'home',
                outlet: 'modal',
                model: model
            });
        },
        closeModal: function() {
            return this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'home'
            });
        },
        addPost: function (post) {
            this.get('posts').pushObject(post);

        }
    }
});
