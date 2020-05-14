var app = new Vue({
    el:"#app",
    data:{
        colorClass:true,
        bigText:true,
        description:"This is my description",
        hideClass:true,
        items:[
            {key:"item1",message:"Message 1"},
            {key:"item2",message:"Message 2"}
        ],
        error:true,
        success:true
    },
    methods:{

    },
    computed:{
        classes: function(){
            return {
                redColor:this.colorClass,
                bigText:this.bigText
            }
        },
        editMode:function(){
            return{
                disable:this.hideClass
            }
        }
    }
});