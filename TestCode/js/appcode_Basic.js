var app= new Vue({
    el:"#app",
    data:{
        message: "Hello Vue world..!!",
        name: "",
        pName:"Enter name",
        pbYear:"Enter year",
        website: "https://midni8coder.github.io/",
        target: "_blank",
        websiteTags:'<a href="https://midni8coder.github.io/" target="_blank">My Website</a><br>',
        bYear:'',
        a:0,
        b:0,
        age:20
    },
    methods:{
        greet: function(str){
            return this.name+", Good "+str+"..!!";
        },
        increase:function(value){
            value = value ? value:1;
            this.bYear += value
        },
        decrease:function(value){
            value = value ? value:1;
            this.bYear -= value;
        },
        eventTest: function(event){
            console.log(event);
        },
        click:function(){
            alert('Clicked me ')
        },
        logName: function(){
            console.log('Name')
        },
        // addToA:function(){
        //     console.log('addToA')
        //     return this.age + this.a;
        // },
        // addToB:function(){
        //     console.log('addToB')
        //     return this.age + this.b;
        // }
    },
    computed:{
        addToA:function(){
            console.log('addToA')
            return this.age + this.a;
        },
        addToB:function(){
            console.log('addToB')
            return this.age + this.b;
        }
    }
});

