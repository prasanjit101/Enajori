<template>
  <div style="margin-top: -8px;" class="img container-fluid bg-color px-1 ">
    <div class=" row d-flex justify-content-center">
      <div class="col-md-6 text-center">
        <div v-if="!validated" class="color2 card">
          <form class=" form-card">
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-12 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Name<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  maxlength="25"
                  v-model="name"
                  onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==32)"
                  placeholder="Enter Full Name"
                  required
                />
              </div>
            </div>

            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >email<span class="text-danger"> *</span></label
                >
                <input
                  type="email"
                  class="form-control"
                  maxlength="40"
                  id="email"
                  v-model="email"
                  required
                />
              </div>
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Phone number<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="mobileNo"
                  id="mobileNo"
                  pattern="+91?://.{10}"
                  :placeholder="user.Profile.number"
                  disabled
                />
              </div>
            </div>
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3" for="gender"
                  >Gender</label
                >
                <select
                  id="gender"
                  v-model="gender"
                  class="form-control"
                  :disabled="validated"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
              <div class="form-group col-sm-6 flex-column d-flex">
                <!-- Date input -->
                <label class="form-control-label px-3" for="dateOfBirth"
                  >Date of Birth</label
                >
                <input
                  type="date"
                  class="form-control"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  v-model="dateOfBirth"
                  :disabled="validated"
                />
              </div>
            </div>

            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-12 flex-column d-flex">
                <label class="form-control-label px-3" for="address"
                  >Address</label
                >
                <input
                  type="text"
                  class="form-control"
                  title="Enter the address without commas"
                  id="address"
                  maxlength="80"
                  onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) || (event.charCode==32)"
                  v-model="address"
                  :disabled="validated"
                />
              </div>
            </div>

            <div class="row justify-content-end">
              <div class="form-group col-sm-6">
                <button
				type="button"
				class="btn-block btn-primary"
				@click="isDisabled"
				v-show="!validated"
				>
				Cancel
			</button>
				</div>
			<div class="form-group col-sm-6">
                <button
                  type="button"
                  @click="updateProfile()"
                  class="btn-block btn-primary"
                  v-show="!validated"
                >
                  Submit
                </button>
              </div>
				
            </div>
          </form>
        </div>
        <div v-if="validated" class="color2 card">
        <table class="table table-hover ">
            <h4 style="text-decoration:underline;">Profile</h4>
          <tbody>
            <tr>
              <th scope="row">Name: </th>
              <th scope="col">{{ user.Profile.name }}</th>
            </tr>
            <tr>
              <th scope="row">Mobile No:</th>
              <th scope="col">{{ user.Profile.number }}</th>
            </tr>
            <tr>
              <th scope="row">Email Id:</th>
              <th scope="col">{{ user.Profile.email }}</th>
            </tr>
            <tr>
              <th scope="row">Date of Birth:</th>
              <th scope="col">{{ user.Profile.dob }}</th>
            </tr>
            <tr>
              <th scope="row">Gender:</th>
              <th scope="col">{{ user.Profile.gender }}</th>
            </tr>
            <tr>
              <th scope="row">Address:</th>
              <th scope="col">{{ user.Profile.address }}</th>
            </tr>
          </tbody>
        </table>
          
          <button
            type="button"
            class="btn-block btn-primary"
            @click="isDisabled"
            v-show="validated"
          >
            Edit Your Profile
          </button>
        </div>
		<div>
				
				</div>
			</div>
          <div class="col-md-5">
              <div class="card">
                <div class="card-header">
                  Bookings
                </div>
                <div  v-if="user.Bookings" class="card-body">
                  <div style="border-radius:5px;" class="text-dark pb-5 ">
                    <h6 class="ml-3 mr-auto pt-2"><b>Latest Bookings :</b></h6>
                    <hr>
                    <h6 >{{user.Bookings.name}}</h6>
                    <p class="mb-0">{{user.Bookings.description}}</p>
                    <p>{{user.Bookings.address}}</p>
                </div >
                </div>
                <div v-else class="card-body">
                  <h5 class="card-title"></h5>
                  <p class="card-text">Your latest bookings will appear here</p>
                </div>
              </div>
          </div>
		</div>
		<div><footers style="margin-bottom:0"></footers></div>
  </div>
</template>

<script>
// import { VueEditor } from "vue2-editor";
import firebase from "firebase/app";
import { usersref } from "../firebase";
import "firebase/auth";

export default {
  name: "profile",
  data() {
    return {
      name: "",
      users: "" /*  users is an object conatining users detail */,
      user: "" /*  user is the Json from rtdb */,
      dateOfBirth: "",
      mobileNo: "",
      gender: "",
      email: "",
      address: "",
      validated: true,
      req:true,
    };
  },

  methods: {
    updateProfile() {
      this.mobileNo = this.users.phoneNumber;
      if (this.users.phoneNumber) {
        var usersProfile = usersref.child(this.mobileNo).child("Profile");
        console.log("Success");
        usersProfile.update({
          name: this.name,
          gender: this.gender,
          dob: this.dateOfBirth
            .split("-")
            .reverse()
            .join("-"),
          email: this.email,
          number: this.mobileNo,
          address: this.address,
        });
        this.validated = !this.validated;
      } else {
        console.log("No user sign in");
      }
    },
    isDisabled() {
      this.validated = !this.validated;
    },
  },
  created() {
    this.users = firebase.auth().currentUser;
    this.$rtdbBind("user", usersref.child(this.users.phoneNumber));
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
  background-image: url("../assets/images/hero.png");  
  background-repeat: no-repeat;
  background-size: cover;
  padding: 38px 0;
  margin: 0px 0px;
}

.bg-color {
  background-color: #884dff;
 
}

.card {
  padding: 20px 20px;
  margin-top: 30px;
  margin-bottom: 10px;
  border: none !important;
  color: black;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);
}

.blue-text {
  color: #00bcd4;
}

.form-control-label {
  margin-bottom: 0;
}

input,
textarea,
select,
button {
  padding: 8px 15px;
  border-radius: 5px !important;
  margin: 5px 0px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  font-size: 18px !important;
  font-weight: 300;
}

input:focus,
textarea:focus,
select:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #00bcd4;
  outline-width: 0;
  font-weight: 400;
}

.btn-block {
  text-transform: uppercase;
  font-size: 15px !important;
  font-weight: 400;
  height: 43px;
  cursor: pointer;
}

.btn-block:hover {
  color: #fff !important;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}
</style>
