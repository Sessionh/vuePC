import inputSearch from './inputSearch';
import tabChange from './tabChange';

const components = {
    install: function(Vue) {
        Vue.component('InputSearch', inputSearch)
        Vue.component('TabChange', tabChange)
    }
}

export default components;