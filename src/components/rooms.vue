<template>
	<div id='rooms' class="mt-3 mb-3" >
		<div v-if="roomdata" class="xy container-fluid ">
				<div id="inscroll" v-if="roomdata">
					<div  id="list1" v-for="x in roomdata" :key="x['.key']" >
						<div class="card threed mr-1 mb-1 d-block wd " v-for="y in x" :key="y['.key']">
						<p style="display:none;" :details="y" ></p>
							<img class="p-1 card-img-top img img-contain" :src="y.Images['Image no 1']">
							<div class="card-body wd1 text-dark">
								<h5 class="card-title">{{y.Information.name}}</h5>
								<div class="wd2 mb-1 ">
								<p class="card-text"> {{y.Information.perfectAddress}}</p>
								</div>
								<div class="row mb-1"><p class="card-text mr-auto ml-3"> &#9733; {{y.Information["rating"]}}</p>
								<p class="card-text mr-3 ml-auto"> {{y.Information["pricing"]}} &#8377;</p></div>
							</div>
							<div class="card-footer m-0 pl-2 pb-2 pt-1 ">
								<b-button v-b-modal.modal-xl class="bg-purple" @click="getdetails(y)"> Details</b-button>
							</div>
						</div>
					</div>
				</div>
		<Description :detail="description" />
		</div>
			</div>
</template>

<script>
import Description from '@/components/Description.vue'


  export default {
    name: "rooms",
    data(){
      return {
		imgurl:'',
		details:'',
		description:{'a':'1'}
      }
	},
	props:{
		roomdata:Object,
	},
	methods:{
		getdetails:function(y){
			this.description=y;
		}
	},
	components:{Description},
  }
</script>
<style lang="scss" scoped >
#rooms{background-color:#fff;color:#fff;display:block;}
.load{margin-left:42%;padding-bottom:25px;}
.img{height: 12rem;}
.img-contain{object-fit: cover;}
.location{right:0;}
.xy{background-color:#352c52;}
.card-text{
font-size:0.90rem;
}
.card-title{
font-size:1.1rem;
}
.wd{width:32.5%;height:auto;float:left;}
.wd1{height:8.5rem;}
.wd2{height: 1.4cm; }
@media(max-width:800px){
.img{margin:0;padding:0;}
.btn{margin-bottom:5px;}
.wd{width:100%;}
.xy{margin:0px;}
#inscroll{
margin-top:24rem;
}
#box{
height:6rem;
width:100%;
}
}
</style>