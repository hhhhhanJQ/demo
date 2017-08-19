import Vue from 'vue'
import TaskTrackerComponent from '../../js/components/TaskTracker.vue';
import Helper from '../helper';
import Util from '../util';
import $ from 'jquery';
// function triggerEvent(elm, name, ...opts) {
//     let eventName;
//
//     if (/^mouse|click/.test(name)) {
//         eventName = 'MouseEvents';
//     } else if (/^key/.test(name)) {
//         eventName = 'KeyboardEvent';
//     } else {
//         eventName = 'HTMLEvents';
//     }
//     const evt = document.createEvent(eventName);
//
//     evt.initEvent(name, ...opts);
//     elm.dispatchEvent
//         ? elm.dispatchEvent(evt)
//         : elm.fireEvent('on' + name, evt);
//
//     return elm;
// }
// function createTest(Compo, propsData = {}, mounted = false) {
//     if (propsData === true || propsData === false) {
//         mounted = propsData;
//         propsData = {};
//     }
//     const elm = createElm();
//     const Ctor = Vue.extend(Compo);
//     return new Ctor({ propsData }).$mount(mounted === false ? null : elm);
// }

describe('TaskTrackerComponent', () => {
    let vm;
    afterEach(function () {
        Util.destroyVM(vm);
    });
    it('change color',function () {
        // const vm = Helper.injectProps(TaskTrackerComponent).$mount();
        // const vm=new Vue(TaskTrackerComponent).$mount();
        // console.log(TaskTrackerComponent);
        // console.log(vm);
        // console.log(vm.$el);
        // console.log(btn);
        vm=Util.createTest(TaskTrackerComponent,true);
        var btn=vm.$el.querySelector("#red1");
        btn.click();
        Vue.nextTick(function () {
            console.log(btn);
            console.log(btn.style.color);
            // console.log()
            expect(btn.style.color).toEqual('red');

        });
    });
    
    it('add info',function () {
        // const vm=new Vue(TaskTrackerComponent).$mount();
        vm=Util.createTest(TaskTrackerComponent,false);
        var btn=vm.$el.querySelector('#addInfo');
        btn.click();
        // console.log(vm);
        var tb=vm.$el.querySelector('#tbInfo');
        Vue.nextTick(function () {
            // console.log('www');
            expect(tb.textContent).toBe('');
        });


    });

    it('add num',function () {
        vm=Util.createTest(TaskTrackerComponent,{
            AddNum:10,
            InitNum:11,
        },false);
        var btnElm=vm.$el.querySelector('#addNum');
        btnElm.click();
        btnElm.click();


        Vue.nextTick(()=> {
            expect(vm.ResultNum).toEqual(31);
            expect(vm.$el.querySelector('.init-num').textContent).toEqual('初始值为11');
        });
    });

    it('change color by mouseover',function () {
        vm=Util.createTest(TaskTrackerComponent,true);
        console.log(vm.$el);
        var btnMouse0=vm.$el.querySelector('#red11');
        console.log(btnMouse0);
        var btnMouse1=Util.triggerEvent(btnMouse0,'mouseover');

        // Vue.nextTick(()=> {
        //     expect(btnMouse1.style.color).toEqual('red');
        // });
    })




});
