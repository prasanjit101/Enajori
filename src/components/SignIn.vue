<template>
<div>
    <div
      class="modal fade"
      id="SignIn"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
    <div class="modal-dialog">
        <div class="modal-content" id="formContent">
        <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
            <span aria-hidden="true">&times;</span>
            </button>
			</div>
			<div class="modal-body text-dark">
            <form method="post">
			<div v-if="userState">
				<button class="btn btn-success" @click="logout()" type="button">Signout</button>
			</div>
			<div v-else>
			<h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
				<input
					type="tel"
					v-model="mobileNo"
					id="mobileNo"
					class="fadeIn second"
					name="mobileNo"
					placeholder="Mobile No"
					required/>
				<div id="recaptcha-container"></div>
				<br />
				<div>
				<button
				type="button"
				@click="sendOtp()"
				class="btn btn-primary fadeIn second "
				data-toggle="modal"
				style="position: relative; left: -7px; top: -19px; padding: 8px 14px;"
				data-target="#LogIn"
				id="send getotp"
				required
				>
					Get OTP
				</button>
				<button
						type="button"
						@click="sendOtp()"
						class="btn mr-auto btn-primary fadeIn second "
						style="position: relative; left: 22px; top: -19px; padding: 8px 14px;"
						id="send">
						Resend OTP
				</button>
				</div>
				<br />
				<input
					type="number"
					v-model="otp"
					class="fadeIn second"
					name="OTP"
					style="position: relative; left: 1px; top: -34px;"
					placeholder="Enter OTP"
					required/>
					<button
						type="button"
						@click="verifyOtp()"
						class="btn btn-primary fadeIn second py-2 px-5"
						data-toggle="modal"
						style="position: relative; left: 1px; top: -9px;"
						data-target="#LogIn"
						id="send"
						required>
						Verify OTP</button><br />
				</div>
            </form>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
	name: "SignIn",
	props: {
	
  },
  data() {
    return {
		mobileNo: "",
		otp: "",
		appVerifier: "",
		userState:'',
    };
  },
  methods: {

    sendOtp: function() {
      if (this.mobileNo.length != 10) {
        alert("Invalid Phone Number Format !");
      } else {
        let countryCode = "+91";
        let mobileNumber = countryCode + this.mobileNo;
        let appVerifier = this.appVerifier;

        firebase
          .auth()
          .signInWithPhoneNumber(mobileNumber, appVerifier)
          .then(function(confirmationResult) {
            window.confirmationResult = confirmationResult;
            alert("6 digit OTP Send");
          })
          .catch(function(error) {
            alert("SMS not Sent" + error);
          });
      }
    },
	logout:function(){
	firebase.auth().signOut().then(function() {
		alert("Signed out successfully");
	}).catch(function(error) {
		alert(error);
	});
	},
    verifyOtp: function() {
      if (this.mobileNo.length != 10 || this.otp.length != 6) {
        alert("Invalid Phone Number or OTP format!");
      } else {
        let code = this.otp;
        window.confirmationResult
          .confirm(code)
          .then((result)=>{
            // User signed in successfully.
            var user = result.user;
            alert('sign in successfully'+user);
			this.user=firebase.auth().currentUser;
            // ...
          })
          .catch(function(error) {
            // User couldn't sign in (bad verification code?)
            // ...
            alert('Sign in not success!'+error)
          });
      }
    },
    initReCaptcha: function() {
      setTimeout(() => {
        //let vm = this
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "normal",
            callback: function() {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // ...
            },
            "expired-callback": function() {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
            },
          }
        );

        this.appVerifier = window.recaptchaVerifier;
      }, 1000);
    },
  },
  created() {
    this.initReCaptcha();
	firebase.auth().onAuthStateChanged(user => {
    this.userState = user;});
  }
};
</script>

<style scoped>
#hidden{display:block;}
/* BASIC */

html {
  background-color: #56baed;
}

body {
  font-family: "Poppins", sans-serif;
  height: 100vh;
}

a {
  color: #92badd;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  margin: 40px 8px 10px 8px;
  color: #cccccc;
}

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
}

#formFooter {
  background-color: #f6f6f6;
  border-top: 1px solid #dce8f1;
  padding: 25px;
  text-align: center;
  -webkit-border-radius: 0 0 10px 10px;
  border-radius: 0 0 10px 10px;
}

/* TABS */

h2.inactive {
  color: #cccccc;
}

h2.active {
  color: #0d0d0d;
  border-bottom: 2px solid #5fbae9;
}

/* FORM TYPOGRAPHY*/


input[type="number"],
input[type="tel"] {
  background-color: #c9e2dd;
  border: none;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

input[type="text"],
input[type="number"],
input[type="tel"]:focus {
  background-color: #fff;
  border-bottom: 2px solid #5fbae9;
}

input[type="number"],
input[type="tel"]:placeholder {
  color: #cccccc;
}

/* ANIMATIONS */

/* Simple CSS3 Fade-in-down Animation */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


.fadeIn.second {
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
  animation-delay: 0.6s;
}

*:focus {
  outline: none;
}

#icon {
  width: 60%;
}
</style>
