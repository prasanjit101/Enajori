<template>
  <div>
    <b-modal id="modal-xl" size="lg" hide-footer >
		<div v-if="!booked">
		<div class="slider">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
        
          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
			<div v-for="i in imgurl" :key="i['.key']">
			<b-carousel-slide>
            <template v-slot:img>
              <img
                class="d-block imgcarousel w-100"
                :src="detail.Images[i]"
                alt="image slot"
              />
            </template>
			</b-carousel-slide>
			</div>
			
        </b-carousel>
      </div>

      <b-row v-if="detail.Information">
		<b-col sm="4">
            <br>
			<div class="pricing">
				<h3> {{detail.Information.pricing}}  &#8377;</h3>
			</div>
			<div>
			<b-form-rating
              v-model="detail.Information.rating"
              readonly
              show-value
              show-value-max
              precision="1"
            ></b-form-rating>
			</div>
			<div class="mt-5 ml-4">
			<a :href="detail.Information.videoUrl" target="_blank" class="play p-3 btn"><svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-play" fill="#fff" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
			</svg>
			</a>
			<p>Watch Video</p>
			</div>
        </b-col>
        <b-col sm="8">
			<div class="hotelName"><h3 class="text-dark mt-1"><b>{{detail.Information.name}}</b></h3></div>
			<div class="hotelAddress mt-3"><h4>{{detail.Information.perfectAddress}}</h4></div>
			
			<div class="description mt-4">
				{{detail.Information.description}}
			</div>
		<div class="mt-2" v-if="detail.Information.pgSeatType!='0'"><b>{{detail.Information.pgSeatType}} Seater</b></div>
        </b-col>
        
		<div v-if="amit" class=" mt-3 mx-4">
			<img v-for="z in amit" :key="z['.key']" class="ico p-1" :src="require(`../assets/images/${amt[z]}.png`)" :title="amt[z]" />
		</div>
		</b-row>
		<br><br>
		<div class="d-flex">
		<input type="checkbox" id="checkbox" v-model="privacy">
		<label for="checkbox" class="text-dark ml-2 pb-1">I agree to privacy policy</label>
		<a class=" mr-2 ml-auto" style="text-decoration:none;" href="https://docs.google.com/document/u/1/d/1i4WjFvgmioKDMpaldTNkU-7S2PqFR8jGNMQDfc64BH0/mobilebasic" target="_blank">Privacy policy</a>
      </div>
	<b-button @click="cart()" block variant="primary" :disabled="!privacy">Book Now</b-button>
		</div>
		<div class="whatsapp " v-else>
		<div class="row"><img class="col-10 m-auto" src="../assets/images/whatsapp.jpg"></div>
		<div class="p-3 ml-5">
		<h5 class="mb-2">Steps :</h5>
		<p>Step 1: Do whatsapp us for procceding to payment</p>
		<p>Step 2: We will verify your details and update you at your profile section</p>
		</div>
		<div class="pt-2 pl-3 ml-5">
		<a @click="cart()" class="btn btn-primary text-light">Cancel</a>
		<a href="https://wa.me/message/MYEVIE3NBNTAN1" target="_blank" style="text-decoration:none;" class="ml-5 btn btn-primary">Whatsapp us</a>
		</div>
		</div>
</b-modal>
</div>
    
</template>

<script>
export default {
  name: "Description",
  props: {
	detail:Object,
  },
  data() {
    return {
    slide: 0,
    privacy:false,
	booked:false,
		sliding: null,
		imgurl:[],
		amt:["wifi","ac","tv","cctv","cupBoard","bed","refrigerator","diningTable","geysers","washingMachine"],
		amit:[],
    };
  },
  watch:{
	detail:function(){
		let a=this.detail;
		this.imgurl=Object.keys(a.Images)
		if(a.Information.amenities){
		let xz=a.Information.amenities;
		let xzl=xz.length;
		this.amit=xz.slice(1,xzl-1).split(',').map(x=>+x);
		}
		}
	},
  created(){
	
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
      this.slide = slide + 1;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    cart(){
	if(this.booked==false){
	this.booked=true;
	}
	else{
	this.booked=false;
	}
	}
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.imgcarousel{
object-fit:cover;
width:100%;
height:380px;
}
.play{
	background-color:#4c00e6;
	border-radius:50%;
	padding: 5px;
	height:5rem;
	width:5rem;
}
.whatsapp{
color: #190542;
img{
object-fit:scale-down;
height:80vh;
}
}
.ico{height:4rem; width:4rem;}
</style>
