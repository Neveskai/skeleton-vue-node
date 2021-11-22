import { createStore } from 'vuex'

export default createStore({
	state: {
		user: {},
		routes: [],
		api_dir: 'http://renovel.provisorio.ws/VueFazendasDev/src/v1',
		reqs: {
			farm: null,
			login: null,
			farms: null,
			socios: null,
			ciclos: null,
			table_regs: null,
			farm_dashb: null,
			table_parcs: null,
			table_items: null,
			table_lotes: null,
			table_dre: null,
			table_balance: null,
			table_rRFat: null
		},
		farms: []
	},
	mutations: {
		setObject(state, config){
			const target = config.target;
			const obj = config.data;
			if(Object.keys(obj).length !== 0){
				Object.entries(obj).forEach(function(key_val){
					state[target][key_val[0]] = obj[key_val[0]];
				});
			} else {
				state[target]
			}
		},
		setArray(state, config){
			const target = config.target;
			const arr = config.data;
			
			state[target] = arr;
		},
		setVal(state, config){
			const target = config.target;
			const val = config.data;
			
			state[target] = val;
		},
		updateObjAttr(state, config) {
			const target = config.target;
			const attr = config.attr;
			const val = config.data;
			
			state[target][attr] = val;
		}
	},
	modules: {
		
	}
})
