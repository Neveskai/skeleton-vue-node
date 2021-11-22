<template>
	<section>
		<div id="bgapp"></div>
		<router-view v-if="user.id != undefined" style="z-index: 2;"></router-view>
		<user-auth v-else></user-auth>
	</section>
</template>
<script>
	import userAuth from './views/logscreen.vue'
	import { boolval } from '@/assets/self-repository/js/general.js'
	
	export default {
		components: {
			'userAuth': userAuth
		},
		computed: {
			reqs: {
				get() { return this.$store.state.reqs; },
				set(arr)	{ 
					this.$store.commit('setArray', { target:'reqs', data: arr }); 
				}
			},
			farms: {
				get() { return this.$store.state.farms; },
				set(arr)	{ 
					this.$store.commit('setArray', { target: 'farms', data: arr }); 
				}
			},
			user: {
				get()	{ return this.$store.state.user; },
				set(obj)	{ 
					this.$store.commit('setObject', { target: 'user', data: obj }); 
				}
			},
			routes: {
				get()	{ return this.$store.state.routes; },
				set(arr)	{ 
					this.$store.commit('setArray', { target: 'routes', data: arr }); 
				}
			},
			api_dir: {
				get()	{ return this.$store.state.api_dir; },
				set(val) { 
					this.$store.commit('setVal', { target: 'api_dir', data: val }); 
				}
			}
		},
		methods: {
			userAuth(login, senha) {
				var formData = new FormData();
				formData.append("login", login);
				formData.append("senha", senha);
				var f = fetch(this.api_dir+'/user/auth', {
					method: 'POST',
					body: formData
				})
				.then( resp => {
					if(resp != '') resp.json();
					console.log('auth error');
				})
				.then( token => {
					var exp_dt = new Date(); exp_dt.setMonth(exp_dt.getMonth() + 1);
					document.cookie = "token="+token+"; path=/; expires=" + exp_dt.toUTCString(); // sets a Permanent Login
					this.checkLogIn();
				});
				return f;
			},
			getCookieToken(){
				var cookies = document.cookie;
				if (cookies != "") {
					var token = '';
					cookies = cookies.split(';');
					cookies.forEach(function(cookie){
						cookie = cookie.split('=');
						if(cookie[0].includes('token')) token = cookie[1];
					});
					return token;
				} else {
					return false;
				}
			},
			checkLogIn(){
				var token = this.getCookieToken();
				if (!token) return false;
				fetch(this.api_dir+'/user/token/'+token)
				.then(resp => resp.json())
				.then( arr => {
					this.createUser(arr);
					this.getFarms();
				})
				.catch(this.logout())
			},
			logout(){
				this.user = {}; 
				this.routes = [];
			},
			createUser(arr){
				var me = this;
				me.user   = arr.user; 
				me.routes = arr.routes.farms;
			},
			goBack(){
				if(window.history.length == 0){
					this.$router.push({ path: 'home' });
				} else {
					this.$router.go(-1);
				}
			},
			getSlctFarm(_farm = null){
				var me = this;
				var p = new Promise((resolve)=>{
					me.$router.onReady(function(){
						if(_farm == undefined){
							var id = me.$route.params.id;
							if(id != undefined){
								id = parseInt(id);
								if(me.farms.length > 0){
									me.farms.forEach(function(farm){
										if(farm.id == id) resolve(farm);
									});
								}
							}
						} else {
							resolve(_farm);
						}
					});
				});
				me.reqs.farm = p;
				return p;
			},
			getFarms(){
				var me = this;
				me.reqs.farms = fetch(me.api_dir+'/db/Fazendas/0?token='+me.user.token, { method: 'GET' })
				.then(resp => resp.json())
				.then(resp => {
					me.farms.splice(0);
					resp.forEach(function(row){
						row.pagantes.forEach(function(pag){
							pag.selected = boolval(pag.selected);
						})
						me.farms.push(row);
					});
				})
			},
			put(url, object){
				var p = fetch(this.api_dir+url+'?token='+this.user.token, {
					method: 'POST',
					headers: { 
						'X-Http-Method-Override': 'PUT', 
						'Content-Type': 'application/json' 
					},
					body: JSON.stringify(object)
				})
				.then(resp => resp.json())
				.then(resp => { 
					console.log(resp); 
				})
				return p;
			}
		},
		created(){
			var me = this;
			document.addEventListener("visibilitychange", function() {
				if(document.visibilityState == 'visible'){
					var token = me.getCookieToken();
					if (me.user.token == token){
						me.checkLogIn();
					} else {
						me.logout();
					}
				}
			});
			me.reqs.login = me.checkLogIn();
		}
	}
</script>
<style scoped>
	#bgapp {
		background: linear-gradient(-15deg, #00a25b, #00d99d);
		opacity: 1; 
		position: fixed;
		width: 100vw; 
		height: 100%; 
		z-index: -1; 
		left: 0;
		top: 0;
	}
	section { padding: 0px; margin: 0; }
</style>