import Ember from 'ember';
var idCount = 0;
export default Ember.Route.extend({
    model(){
         return Ember.Object.create({
             postsArray:Ember.get(this, 'posts'),
             postObj: Ember.get(this, 'postObj')
         })
    },
    posts:[],
    postObj:Ember.Object.create({
        postObject:null
    }),
    showModal:false,  
    actions: {
        openModal: function(modalName) {
            return this.render(modalName, {
                into: 'home',
                outlet: 'modal'
            });
        },
        closeModal: function() {
            let obj = this.get('postObj');
            obj.postObject = null;
            return this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'home'
            });
        },
        addPost: function (post, isEdit) {
            if (isEdit) {
                let obj = this.get('posts').findBy('id',post.id);
                this.get('posts').replace(this.get('posts').indexOf(obj),1, post);
            } else {
                post.id = idCount++;
                this.get('posts').pushObject(post);
            }
        },
        deletePost:function (post) {
            this.get('posts').removeObject(post);
        },
        receiveEditObj:function (post) {
            let obj = this.get('postObj');
            obj.postObject = post;
        }
    }
});
