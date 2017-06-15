import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({    
    addPost(data) {
        return $.ajax('http://localhost:3000/posts/', {
        method: 'POST',
        data: data
        }).then((successResponse) => {
            return successResponse;
        }).catch(() => {
            return undefined;
        });
    },
    updatePost(id, data) {
        return $.ajax('http://localhost:3000/posts/' + id, {
        method: 'PUT',
        data: data
        }).then((successResponse) => {
            return successResponse;
        }).catch(() => {
            return undefined;
        });
    },
    deletePost(id) {
        return $.ajax('http://localhost:3000/posts/' + id, {
        method: 'DELETE'
        }).then((successResponse) => {
            return successResponse;
        }).catch(() => {
            return undefined;
        });
    },
    getPosts() {
        return $.ajax('http://localhost:3000/posts/', {
        method: 'GET'
        }).then((successResponse) => {
            return successResponse;
        }).catch(() => {
            return undefined;
        });
    }
});
