<template>
	<section>
		<span id="copyright" >&copy; {{ copy }}</span>
		<span id="copyright2">v{{ version }}</span>
	</section>
</template>
<script>
	export default {
		data() { return {
			version: '1.51',
			copy: 'Grupo Rollemberg 2021, Todos os direitos reservados'
		}}
	}
</script>
<style scoped>
	section { padding: 0px; }
	@media only screen and (min-device-width: 900px) {
		.l-1{
			margin-top: -20%;
		}
		.bImg {
			width: 100%;
			cursor: pointer; 
			padding: 2px; 
			border-radius: 100%;
		}
		.btn.btn-block{
			padding: 8px; 
			border-radius: 0px;
		}
		#loginBody {
			width: 30%; 
			height: 80%;
			min-width: 450px;
			margin-left: 20vw;
			z-index: 1;
		}
		#logoTop {
			right: 2%;
			position: absolute; 
			top: 5%;
			z-index: 1;
			height: 40%;
			width: 25%;
			min-width: 400px;
		}
		#loginForm {
			position: absolute; 
			top: 32%;
			transform:translate(-50%,0); 
			z-index: 1;
			height: 25%;
			width: 25%;
			min-width: 350px;
		}
		#copyright {
			position: absolute;
			bottom: 5%;
			left: 0;
			margin-left: 25px;
			color: #fff;
			font-size: 75%;
			font-style: italic;
			min-width: 350px;
		}
		#copyright2 {
			position: absolute;
			bottom: 2%;
			left: 0;
			margin-left: 25px;
			color: #fff;
			font-size: 75%;
			font-style: italic;
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
		.l-1{
			margin-top: -60px;
		}
		.bImg {
			width: 140px;
			cursor: pointer; 
			padding: 2px; 
			border-radius: 100%;
		}
		.btn.btn-block{
			padding: 8px; 
			border-radius: 0px;
		}
		#loginBody {
			width: 30%; 
			height: 80%;
			margin-left: 50%;
			z-index: 1;
			font-size: 14px;
			min-width: 80%;
			max-width: 300px;
		}
		#logoTop {
			position: absolute; 
			left: 50%;
			margin-top: 20px;
			transform: translate(-50%,0); 
			z-index: 1;
			width: 320px;
		}
		#loginForm {
			transform:translate(-50%,0); 
			z-index: 1;
			height: 50%;
			width: 50%;
			font-size: 18px;
			min-width: 80%;
			max-width: 300px;
		}
		#copyright {
			position: absolute;
			bottom: 0%;
			margin-left: 10px;
			color: #fff;
			font-style: italic;
			font-size: 14px;
			min-width: 80%;
			max-width: 300px;
		}
		#copyright2 {
			position: absolute;
			bottom: 0%;
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