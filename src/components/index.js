import inputSearch from './inputSearch';
import tabChange from './tabChange';
import {Timeline, DataSet, Network} from 'vue2vis';

const components = {
    install: function(Vue) {
        Vue.component('InputSearch', inputSearch);
        Vue.component('TabChange', tabChange);
        Vue.component('Timeline', Timeline);
        Vue.component('DataSet', DataSet);
        Vue.component('Network', Network);
    }
}

export default components;