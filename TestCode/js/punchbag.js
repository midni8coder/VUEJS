var app = new Vue({
    el:"#app",
    data:{
        health:100,
        ended:false
    },
    methods:{
        punch:function(){
            this.health -= 10;
            this.ended = this.health <= 0 ? true:false;
        },
        restart:function(){
            this.health = 100;
            this.ended = false
        }
    }
});