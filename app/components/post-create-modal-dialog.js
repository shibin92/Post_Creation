import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('servlet'),
    modalObj: {},
    actions: {
        close: function() {            
            this.sendAction('closePopup');
        },
        selectRating: function(rating) {
            this.set('rating', rating);
        },
        save: function () {
            let obj = {};
            let store       = this.get('store');
            obj.name        = this.get('name');
            obj.rating      = this.get('rating');
            obj.comments    = this.get('comments');
            if (this.get('isEdit')) {
                obj.id = this.get('modalObj').postObject.id;
                store.updatePost(obj.id, obj).then((response) => {                    
                    this.sendAction('sendPost', response, this.get('isEdit'));
                    this.sendAction('closePopup');
                });
            } else {
                store.addPost(obj).then((response) => {                    
                    this.sendAction('sendPost', response, this.get('isEdit'));
                    this.sendAction('closePopup');
                });
            }
        }
    },
    rating: null,
    isEdit: false,
    ratings: ['1-star', '2-star', '3-star', '4-star', '5-star'],
    didRender () {
        this._super(...arguments);
        this.setProperties({
            modalObj: Ember.get(this, 'modelObj').postObj
        })
        var obj = this.get('modalObj');
        if (obj.postObject) {
            this.set('rating', obj.postObject.rating);
            this.set('name', obj.postObject.name);
            this.set('comments', obj.postObject.comments);
            this.toggleProperty('isEdit');
        } 
    }

});
