import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        close: function() {            
            this.sendAction('closePopup');
        },
        selectRating: function(rating) {
            this.set('rating', rating);
        },
        save: function () {
            let obj = {name: this.get('name'),
                rating: this.get('rating'),
                comments: this.get('comments')
            }
            this.sendAction('sendPost', obj, this.get('isEdit'));
            this.sendAction('closePopup');
        }
    },
    rating: null,
    isEdit: false,
    ratings: ['1-star', '2-star', '3-star', '4-star', '5-star'],
    didReceiveAttrs () {
        this._super(...arguments);
        var modalObj = Ember.get(this, 'modelObj').postObj;
        if (modalObj.postObject) {
            this.set('rating', modalObj.postObject.rating);
            this.set('name', modalObj.postObject.name);
            this.set('comments', modalObj.postObject.comments);
            this.toggleProperty('isEdit');
        } 
    }

});
