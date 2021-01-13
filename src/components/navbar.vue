<template>
<nav class="navbar navbar-expand-lg threed mb-1" id="navigation">
<img class="logo"  src="..\assets\images\enajori_logo.png">
    <h1 class="brand mr-4"><router-link class="router-link" to='/'>Enajori</router-link></h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-justify" fill="white" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item nav-link ">
           <router-link class="router-link mr-2" to='/partnerWithUs'>Partner with us</router-link>
        </li>
        <li class="nav-item nav-link ">
            <router-link class="router-link mr-2" to='/about'>About us</router-link>
        </li>
		<li class="nav-item nav-link ">
            <router-link class="router-link mr-2" to='/contact'>Contact us</router-link>
        </li>
    </ul>
	<ul style="padding-left:0px;" class="ml-auto my-auto">
	<li v-if="userState" class="router-link nav-item dropdown nav-item nav-link">
        <a class="router-linknav-link text-light dropdown-toggle mr-2" href="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User</a>
        <div class="dropdown-menu" aria-labelledby="dropdown03">
        <li class="nav-item mb-2 ml-1 nav-link">
           <a><router-link class="text-dark router-link " to='/profile'>Profile</router-link></a>
        </li>
        <li class="mr-2">
		<a class="dropdown-item" href="#SignIn" data-toggle="modal" data-target="#SignIn">Sign out</a>
		</li>
        </div>
		</li>
		<SignIn/>
		<li v-if="!userState" class="nav-item nav-link ">
		<a class="text-light router-link m-auto" href="#SignIn" data-toggle="modal" data-target="#SignIn">Sign In</a>
		</li>
	</ul>
	
    </div>
    </nav>
</template>

<script>

import SignIn from '@/components/SignIn.vue';
import 'firebase/auth';
import firebase from 'firebase/app';

export default {
  name: 'navbar',
  components: {
    SignIn
  },
  data(){
	return{
	userState:'',
	}
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
    this.userState = user;});
  },
  
  
  
 }
</script>

<style scoped lang=scss >

.logo {
    height: 3rem;
    width: 3rem ;
}

.navbar {
    background-color: #352c52;
    padding: 0 2vw;  
}

.brand {
    font-weight: 500;
    color: white;
    letter-spacing: 3px;
	font-size: 1.4rem;
}

.nav-item {
    padding: 0 18px;
	color:#fff;
}


.router-link{
font-size: 1.2rem;
color:#fff;
text-decoration:none;
&:hover{
	color:#c8d9ea;
	}
}

</style>
