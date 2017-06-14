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
            this.sendAction('sendPost', obj);
            this.sendAction('closePopup');
        }
    },
    rating: null,
    ratings: ['1-star', '2-star', '3-star', '4-star', '5-star'],
    init () {
        this._super(...arguments);
        //Ember.Logger.info('component----', Ember.get(this, 'model'));
    }
});
