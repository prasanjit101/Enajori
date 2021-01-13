<template>
		<div class="color2 card">
				<h6 >LATEST BOOKING :</h6>
				<div class="container-fluid">
				<div class="col-10 ml-auto">
					<p>{{book.name}}</p>
					<p>{{book.address}}</p>
					<p>{{book.description}}</p>
					
				</div>
				</div>
		</div>
</template>
<script>
import {usersref} from '../firebase'

export default{
name:"booking",
data(){ 
	return{
	book:''
	}
},
props:{
	num:String,
},
firebase:{
	book:usersref.child(this.num).child('Bookings')
},
methods:{
	
}
}
</script>
<style lang="scss" scoped >

</style>