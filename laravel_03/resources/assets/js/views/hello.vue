<template>
    <div id="vueTest">
        <h1>Hello Vue</h1>
        <example></example>
        <todoList></todoList>
        <test :message='msg'></test>
    </div>
</template>

<style>

</style>

<script type="text/javascript">
//    import example from '../components/Example.vue';
//    import todoList from '../components/todoList.vue';
    export default {

//        mounted() {
//            console.log('Component mounted.')
//        }
        components:{
//            example:example,
//            todoList:todoList,
        },
        data(){
            return{
                msg:'Hello'
            }
        }

    }
</script>