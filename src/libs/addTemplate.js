export default (url) => resolve =>  require([`@/view/${url}.vue`], resolve);