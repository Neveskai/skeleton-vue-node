<template>
	<section>
		<div id="bgC"></div>
		<div id="C">
			<h1 class="text-center text-white">
				<i class="fa fa-meh-o"></i>
			</h1>
			<h2 class="text-center text-white"> 
				Algo deu errado ... 
			</h2>
			<h5 class="text-center font-light">
				<router-link to="/">Retorne a página de Login</router-link>
			</h5>
		</div>
	</section>
</template>
<style scoped>
	#bgC {
		width: 100vw; 
		height: 100vh; 
		background-image: linear-gradient(180deg, #222, #000); 
		position: absolute; 
		left: 50%;
		transform:translate(-50%,0); 
		z-index: 0;
	}
	#C {
		width: 600px;
		position: absolute;
		left: 50%;
		top: 45%;
		transform:translate(-50%,-50%);
		z-index: 1;
	}
	h1 {
		font-size: 600%;
	}
	h2 {
		font-size: 200%;
	}
</style>