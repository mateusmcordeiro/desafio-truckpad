import 'ant-design-vue/dist/antd.css';
import 'es6-promise/auto'
import { Vue } from './globalComponents'
import moment from 'moment'
import VueEvents from 'vue-events'
import { router } from './routes'
import store from './store'
import { sync } from 'vuex-router-sync'
import globalHelpers from './helpers/global'


Vue.config.productionTip = false

sync(store, router)
Vue.use(VueEvents)
Vue.mixin(globalHelpers)

Vue.filter('formatDate', function (value) { 
	return moment(value).format('DD/MM/YYYY');
})
Vue.filter('sortOrder', function (value) { 
	if(value === 'ascend') {
		return 'asc'
	}
	return 'desc'
})
Vue.filter('deletePhrase', function (value) { 
	return `Are you sure to delete '${value}' record?`
})

const app = new Vue({
	el: '#app',
	router,
	store
});