<template>
    <div class="mt-0 pt-5 pb-3 footer">
<div class="container">
  <div class="row">
    <div class="col-md-6 bg-light p-5">
	<div class=" about-company">
      <h2><img class="logo"  src="..\assets\images\enajori_logo.png">Enajori</h2>
      <p class="pr-5">We are a Start-up Company based in Nagaon,Assam that focuses on providing a platform for the online booking of Paying Guests and Rental Rooms in the State. </p>
    </div>
    <div class="col-xs-12 location">
      <h4 class="mt-lg-0 mt-sm-4"><i class="fa fa-map-marker mr-3" style="font-size:20px;color:purple"></i>Location</h4>
      <p >{{contact.address}}</p>
      <p class="mb-0" ><i class="fa fa-phone mr-3" style="font-size:20px;color:purple"></i>{{contact.phone}}</p>
      <p><i class="fa fa-envelope-o mr-3" style="font-size:20px;color:purple"></i>{{contact.email}}</p>
    </div>
	</div>
  </div>
  
</div>
<div><footers style="margin-bottom:0"></footers></div>
</div>
</template>

<script>

import {contactsref} from "../firebase.js" 

export default {
    name: 'contact',
    data() {
      return{
        contact:''
      }
    },
    firebase: {
      contact: contactsref
    }
}


</script>



<style lang="scss" scoped>

.logo {
    height: 40px;
    width: 40px ;
}
.container{
height:100vh;
}
.footer{
  background-image: url("../assets/images/hero.png");
  color:#352c52;
  
  .links{
    ul {list-style-type: none;}
    li a{
      color: #352c52;
      transition: color .2s;
      &:hover{
        text-decoration:none;
        color:#4180CB;
        }
    }
  }  
  .about-company{
    i{font-size: 25px;}
    a{
      color:#352c52;
      transition: color .2s;
      &:hover{color:#4180CB}
    }
  } 
  .location{
    i{font-size: 18px;}
  }
  .copyright p{border-top:1px solid rgba(255,255,255,.1);} 
}
</style>