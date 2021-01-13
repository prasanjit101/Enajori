<template>
	<div id="home" class="home">
	<div  class="container-fluid hero text-dark text-center">
		<div class="row">
			<div class="col-md-6 p-4">
			<div class="about-text mx-3 py-auto">
                        <div class="section-title">
                            <span>Enajori</span>
                        </div>
						<p class="f-para mt-4 text-dark " style="text-shadow: 2px 2px #fff;">We are a Start-up Company based in Nagaon, Assam.
						</p>
						<br/>
						<p class="s-para mx-5 mb-5 text-dark " style="text-shadow: 2px 2px #fff;">We focuses on providing a platform for the online booking of Paying Guests
and Rental Rooms in the State.</p>
						<a class="btn border-bottom bg-light border-info" href="https://play.google.com/store/apps/details?id=com.enajori.enajori">Get Enajori app<svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-download pl-2 ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M.5 8a.5.5 0 0 1 .5.5V12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8.5A.5.5 0 0 1 .5 8z"/>
  <path fill-rule="evenodd" d="M5 7.5a.5.5 0 0 1 .707 0L8 9.793 10.293 7.5a.5.5 0 1 1 .707.707l-2.646 2.647a.5.5 0 0 1-.708 0L5 8.207A.5.5 0 0 1 5 7.5z"/>
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0v-8A.5.5 0 0 1 8 1z"/>
</svg></a>
                    </div>
			</div>
			<div class="col-md-6 filter text-left">
			<form @submit.prevent="filterdata" class=" d-block ml-1 ">
                            <select placeholder="Select" style="position: relative; left: 10px; top: 57px;" class="option search p-2 border border-info " v-model="selected">
                                <option disabled value="">Select </option>
								<option>Paying Guest</option>
                                <option>Rent House</option>
                            </select>
	<b-form-input autocomplete="off" placeholder="Enter district name" style="left: 26px; top: 34px;" class="mt-5 py-4 border border-info search searchbox select-wrapper" v-model="dist" list="inputlist"></b-form-input>
	<b-form-datalist id="inputlist" :options="districts"></b-form-datalist>
	<div class="px-auto mt-5 pt-3">
						<b-form-group v-if="selected==='Paying Guest'">
							<b-form-radio-group
								style="position: relative; left: 30px; top: 3px;"
								v-model="seatnum"
								:options="pgseat"
								name="radio-inline">
							</b-form-radio-group>
						</b-form-group>
						</div>
							<button href="#rooms" style="position: relative; left: 30px; top: 24px;" class="  btn btn-primary">Check rooms</button>
                        </form>
			</div>
		</div>
	</div>
	<rooms v-if="d1" :servicetype="e" :f="g" :roomdata="d1"/>
	<h1>Loading....</h1>
	<div><a href="#" class="threed btn fixedbtn fbe ">Go Up</a></div>

	</div>
</template>

<script>
import rooms from '@/components/rooms.vue'
import {dataref} from '../firebase';
import {db} from '../firebase';

export default {name:'Home',
	data(){
		return{
			selected:'',
			dist:"",
			d1:null,
			e:'',
			g:'',
			ghh:[],
			rhh:[],
			districts:[],
			seatnum:'Single',
			pgseat:[{ text: 'Single', value: 'Single' },{ text: 'Double', value: 'Double' },{ text: 'Triple', value: 'Triple' },{ text: 'Other', value: 'Other' }]
		}
	},
    components: {
    rooms,
 },
watch:{
	selected:function() {
	this.dist=''
	if(this.selected =="Rent House"){
	this.districts=this.rhh
    }
	if(this.selected =="Paying Guest"){
	this.districts=this.ghh;
    }
	}
	
},
methods:{
	filterdata: function(){
		this.e=this.selected;
		this.g=this.dist;
		var a=this.dist;
		var sel=this.selected;
		var c=this.seatnum;
		if(this.selected==="Rent House"){
			this.$rtdbBind('d1', dataref.child(sel).child(a))
			}
		if(this.selected==="Paying Guest"){
			this.$rtdbBind('d1', dataref.child(sel).child(a).child(c))
			}
	}
},
created:function(){
	var rhUrl = 'https://enajori-45094.firebaseio.com/Admin/Data%20Collection/Rent%20House.json?shallow=true&print=pretty';
	var pgUrl = 'https://enajori-45094.firebaseio.com/Admin/Data%20Collection/Paying%20Guest.json?shallow=true&print=pretty';
	fetch(rhUrl).then(response => {
      return response.json();
    }).then(data => {
      this.rhh=Object.keys(data);
    }).catch(err => {
		console.log(err);
    });
	fetch(pgUrl).then(response => {
      return response.json();
    }).then(data => {
      this.ghh=Object.keys(data);
    }).catch(err => {
		console.log(err);
    });
},
firebase(){
	return{
		d1:db.ref('Admin/Data Collection/Paying Guest/Kamrup Metropolitan/Single'),
	}
},
}
</script>

<style lang="scss" scoped >


.section-title span {
    font-size: 3rem;
    color: $purple2;
    font-weight: 700;
    text-transform: uppercase;
	line-height: 58px;
		color: $purple2 ;
		letter-spacing: 5px;
		text-shadow: -1px -1px 0px $purple2 ,3px 3px 0px $purple2 , 6px 6px 0px $purple2 900;
	}
.spad {
    padding-top: 100px;
    padding-bottom: 100px;
	.about-text p.f-para {
    margin-bottom: 10px;
}
.about-text p {
    color: #595960;
    font-weight: 700;
}
.about-text {
    text-align: center;
    padding: 0 35px;

}
.about-text p.s-para {
    margin-bottom: 35px;
}
.about-text p {
    color: #595960;
    font-weight: 500;
}
p{
    font-size: 16px;
    font-family: "Cabin", sans-serif;
    color: #6b6b6b;
    font-weight: 400;
    line-height: 26px;
    margin: 0 0 15px 0;
}
.about-text .about-btn {
font-size:1.3rem;
}
.primary-btn {
    display: inline-block;
    font-size: 13px;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    position: relative;
}
.about-text p.s-para {
    margin-bottom: 35px;
}
a{
    text-decoration: none;
    background-color: transparent;
}
.section-title {
    text-align: center;
    margin-bottom: 22px;
}
*, ::after, ::before {
    box-sizing: border-box;
}
.about-pic img {
    min-width: 100%;
}
img {
    max-width: 100%;
	height:361px;
}
img {
    vertical-align: middle;
    border-style: none;
}
.primary-btn:after {
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: $purple2;
    content: "";
}
}


#home .home{
	color:#fff;
}
.hero{
	background-image: url("../assets/images/hero.png");
	background-attachment: fixed;
	height:60vh;
	.col-md-6{
	background-color: rgba(255,255,255,0.6);
	}
	.row{
	height:60vh;
	}
}
.fixedbtn{
	position:fixed;z-index:2000;bottom:4rem;right:4rem;
	padding:23px 5px;
	width:5rem;
	height:5rem;
	border-radius:50%;
	color:#fff;
	background-color:$purple2;
	border-color: $purple2;
	}
.d-block{vertical-align:center;}
.select-wrapper {
  position: relative;
}
.search{
width:9cm;
}
.select-wrapper::after {
  content: "▼";
  font-size: 1rem;
  top: 6px;
  right: 10px;
  position: absolute;
}
.option{
margin-left:1rem;
}
@media(max-width:800px){
.col-md-10{padding:0px;margin:0px;
.search{width:75%;}
}
.d-block{
margin-left:-3rem;
}
.search{
margin-left:-25px;
}
.col-sm-6{
display:flex;
}

.option{
margin-left:-0.7rem;
}
.fbe{display:none;
}
}

</style>
