<template>
    <div class="task-tracker">
        <div class="row m-b-10">
            <form v-on:submit.prevent="addTask">
                <div class="form-group">
                    <label for="taskname">Taskname</label>
                    <input id="taskname" class="form-control" type="text" v-model="taskName">
                </div>
                <div class="form-group">
                    <label for="author">Author</label>
                    <input id="author" class="form-control" type="text" v-model="taskAuthor"/>
                </div>
                <button type="submit" class="btn btn-default">Add a new task</button>
            </form>
            <form v-on:submit.prevent="addTask1">
                <div class="form-group">
                    <label for="taskname1">Taskname</label>
                    <input id="taskname1" class="form-control" type="text" v-model="taskName1">
                </div>
                <div class="form-group">
                    <label for="author1">Author</label>
                    <input id="author1" class="form-control" type="text" v-model="taskAuthor1"/>
                </div>
                <button type="submit" class="btn btn-default">Add a new task 1</button>
            </form>
        </div>
        <task-table :tasks="tasks" v-on:delete-task="deleteTask"></task-table>
        <hr>
        <div>
            <p v-for="color in colors">
                <button v-on:click="changeCol(color,color.color)" :id=color.color+color.id >
                {{color.color}}
                </button>
            </p>
        </div>
        <hr>
        <div>
            <table class="table table-striped">
                <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                </thead>
                <tbody id="tbInfo">
                <tr
                    v-for="info in infos"
                >
                    <td>{{info.id}}</td>
                    <td>{{info.name}}</td>
                    <td>{{info.age}}</td>
                </tr>
                </tbody>
            </table>
            <button type="button" class="btn btn-default" v-on:click="addInfo" id="addInfo">Add info</button>
        </div>
        <hr>
        <div>
            <span class="init-num">初始值为{{ InitNum }}</span><br>
            <span class="click-num">点击了{{ ClickNum }}次</span><br>
            <span class="result-num">最终结果为{{ ResultNum }}</span><br>
            <button @click="add" id="addNum">累加{{ AddNum }}</button>
        </div>
        <hr>
        <div>
            <p v-for="color in colors">
                <button v-on:mouseover="changeColMouse(color,color.color)" :id=color.color+color.id+1 >
                    {{color.color}}
                </button>
            </p>
        </div>

    </div>
</template>

<style lang="scss">
    div.task-tracker {
       .m-b-10 {
           margin-bottom: 10px;
       }
    }

</style>

<script>
    import TaskTable from './TaskTable.vue';
    import $ from 'jquery';
    export default {
        data: function() {
            const tasks = [
                {
                    id: 1,
                    taskname: 'Learning Laravel',
                    author: 'Taylor Otwell'
                },
                {
                    id: 2,
                    taskname: 'Getting started with Vue',
                    author: 'Evan You'
                },
                {
                    id: 3,
                    taskname: 'Playing around with React',
                    author: 'Mark Zuckerberg'
                }
            ];
            const colors=[
                {id:1,color:'red'},
                {id:2,color:'blue'},
                {id:3,color:'orange'},
                {id:4,color:'green'}
            ];

            return {
                taskName: '',
                taskAuthor: '',
                taskName1: '',
                taskAuthor1: '',
                tasks: tasks,
                taskIdAutoIncrementer: tasks.length,
                isChosen:[],
                makeID:'',
                makeID1:'',
                colors:colors,
                infos:[],

                ClickNum:0,
                ResultNum:0,


            };
        },
        props:{
            AddNum:{
                type:Number,
                default:1,
            },
            InitNum:{
                type:Number,
                default:1,
            }
        },
        mounted(){
            this.ResultNum=this.InitNum;
        },
        components: {
            'task-table': TaskTable
        },
        methods: {
            addTask: function() {
                const taskName = this.taskName.trim();
                const taskAuthor = this.taskAuthor.trim();
                if (taskName && taskAuthor) {
                    this.tasks.push({
                        taskname: taskName,
                        author: taskAuthor,
                        id: ++this.taskIdAutoIncrementer
                    });

                    this.taskName = '';
                    this.taskAuthor = '';
                }
            },
            addTask1:function () {

                const taskName1 = this.taskName1.trim();
                const taskAuthor1 = this.taskAuthor1.trim();
                this.tasks.push({
                    taskname: taskName1,
                    author: taskAuthor1,
                    id: ++this.taskIdAutoIncrementer
                });
                this.isChosen[this.taskName1]='hello';
                this.taskName1 = '';
                this.taskAuthor1 = '';
            },
            deleteTask: function(id) {
                this.tasks = this.tasks.filter((task) => {
                    return task.id !== id;
                });
            },
            changeCol:function (col,colT) {
                this.makeID=colT+col.id;
//                this.isChosen[colT]=colT;
                $("#"+this.makeID).css('color',colT);

            },

            addInfo:function () {
                $.ajaxSetup({async: false});
                var n;
                $.getJSON("data/info.json",function (data) {

//                    for(var i=0;i<data.length;i++){
//                        var tr=$('<tr>').appendTo("#tbInfo");
//                        $('<td>').html(data[i].id).appendTo(tr);
//                        $('<td>').html(data[i].name).appendTo(tr);
//                        $('<td>').html(data[i].age).appendTo(tr);
//                    }
                    n=data;
                });
                this.infos=n;


            },
            add:function () {
                this.ResultNum+=this.AddNum;
                this.ClickNum++;
//                this.$emit('result',{
//                    ClickNum:this.ClickNum,
//                    ResultNum:this.ResultNum
//                })
            },
            changeColMouse:function (col,colT) {
                this.makeID1=colT+col.id+1;
                $("#"+this.makeID1).css('color',colT);
            },
        }
    }
</script>
