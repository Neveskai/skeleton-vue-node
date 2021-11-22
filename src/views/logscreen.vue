<template>
	<section>
		<div id="loginBody">
			<img id="logoTop2" src="@/assets/img/vue-logo.png" />
			<div id="loginForm">
				<div class="form-group mb-2"> 
					<input type="text" placeholder="Usuario" v-model="login" class="form-control text-center" />
				</div>
				<div class="form-group mb-2">
					<input type="password" placeholder="Senha" v-model="senha" class="form-control text-center" />
				</div>
				<button type="submit" class="btn btn-primary col-12 mt-2" @click="logIn">
					Login
					<i v-show="submit_clicked" class="fa fa-spinner fa-spin"></i>
				</button>
				<span id="copyright">&copy; {{ copy }}</span>
				<span id="copyright2">v{{ version }}</span>
			</div>
			<img id="logoBottom" src="@/assets/img/vue-logo.png" alt="Grupo Rollemberg"  />
		</div>
	</section>
</template>
<script>
	export default {
		data() { return {
			login	 : '',
			senha	 : '',
			version: '0.01',
			copy	 : 'copyright text',
			submit_clicked: false
		}}, 
		methods: {
			logIn(){
				this.submit_clicked = true;
				this.$parent.userAuth(this.login, this.senha);
			},
		}
	}
</script>
<style scoped>
	section { padding: 0px; }
	.custom-select {
		font-size: 75%;
		color: #666;
		border-radius: 0px;
		padding: 0;
		text-align-last:center;
	}
	@media only screen and (min-device-width: 900px) {
		#loginBody {
			width: 30%; 
			height: 80%;
			min-width: 450px;
			margin-left: 20vw;
			z-index: 1;
		}
		#logoTop2 {
			position: absolute; 
			top: 5%;
			left: auto;
			transform:translate(-50%,0); 
			z-index: 1;
			height: 30%;
			width: 25%;
			min-width: 350px;
		}
		#loginForm {
			position: absolute; 
			top: 45%;
			transform:translate(-50%,0); 
			z-index: 1;
			height: 25%;
			width: 25%;
			min-width: 350px;
		}
		#copyright {
			position: absolute;
			bottom: -85%;
			left: 0;
			margin-left: 10px;
			color: #fff;
			font-size: 75%;
			font-style: italic;
			width: 100%;
			min-width: 350px;
		}
		#copyright2 {
			position: absolute;
			bottom: -100%;
			left: 0;
			margin-left: 10px;
			color: #fff;
			font-size: 75%;
			font-style: italic;
			width: 100%;
			min-width: 350px;
		}
		#logoBottom {
			position: absolute; 
			bottom: 10%;
			right: 0;
			z-index: 1;
			width: 14vw;
			background: #fff;
			border-radius: 45% 0 0 45% / 100% 0 0 100%;
			padding: 25px;
			padding-top: 2px;
			padding-bottom: 2px;
			padding-left: 45px;
			border-top: 6px solid #fff;
			border-bottom: 6px solid #fff;
		}
	}
	@media only screen and (max-device-width: 900px) {
		#loginBody {
			width: 30%; 
			height: 80%;
			margin-left: 50%;
			z-index: 1;
			font-size: 14px;
			min-width: 80%;
			max-width: 300px;
		}
		#logoTop2 {
			position: absolute; 
			top: 10%;
			transform:translate(-50%,0); 
			z-index: 1;
			max-width: 90%;
			max-height: 30%;
		}
		#loginForm {
			position: absolute;
			top: 42%;
			transform:translate(-50%,0);
			z-index: 1;
			height: 25%;
			width: 25%;
			font-size: 18px;
			min-width: 80%;
			max-width: 300px;
		}
		#copyright {
			position: absolute;
			bottom: -65%;
			left: 0;
			margin-left: 10px;
			color: #fff;
			font-style: italic;
			font-size: 14px;
			min-width: 80%;
			max-width: 300px;
		}
		#copyright2 {
			position: absolute;
			bottom: -80%;
			left: 0;
			margin-left: 10px;
			color: #fff;
			font-size: 75%;
			font-style: italic;
			width: 100%;
			min-width: 80%;
			max-width: 300px;
		}
		#logoBottom {
			position: absolute; 
			bottom: 3%;
			right: 0;
			z-index: 1;
			width: 150px;
			background: #fff;
			border-radius: 45% 0 0 45% / 100% 0 0 100%;
			padding: 20px;
			padding-top: 2px;
			padding-bottom: 2px;
			padding-left: 30px;
			border-top: 6px solid #fff;
			border-bottom: 6px solid #fff;
		}
	}
</style>
