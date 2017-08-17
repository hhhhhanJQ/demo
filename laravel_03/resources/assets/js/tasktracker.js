/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue';
require('./bootstrap');

import TaskTracker from './components/TaskTracker.vue';

new Vue({
    el: '#task-tracker',
    components: {
        'task-tracker': TaskTracker
    }
});
