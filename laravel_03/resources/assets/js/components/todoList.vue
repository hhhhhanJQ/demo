<template>
    <div class="container">
        <div class="row">
            <p>
                <label for="iptTodo">Do you have anything to do?</label>
                <input type="text" id="iptTodo" v-model="todo" @keyup.enter="addThing" class="form-control">
            </p>
            <ul>
                <li v-for="item in items">
                    <input type="checkbox" class="itemTodo">
                    {{item}}
                </li>
            </ul>

            <button @click="doFinished">Done</button>
            <hr>
            <h2>things have been done:</h2>
            <ul v-if="itemsDone[0]">
                <li v-for="item in itemsDone">{{item}}</li>
            </ul>
            <p v-else>Nothing has been finished</p>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery';
    export default ({
       data(){
           return{
               todo:'',
               items:[],
               itemsDone:[],
           }
       },
        methods:{
           addThing:function () {
               this.items.push(this.todo);
               this.todo='';

           },
            doFinished:function () {
                var chks=document.getElementsByClassName('itemTodo');
                for (var i=0;i<chks.length;i++){
                    if(chks[i].checked){
                        this.itemsDone.push(this.items[i]);
                        this.items.splice(i,1);
                        chks[i].checked=false;
                    }
                }
            }
        }
    });
</script>
<style>

</style>