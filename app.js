new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        sex:1
    },
    methods:{
        ceshi:function () {
            this.sex+=1
        }
    }
});
