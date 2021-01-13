<template>
<div class="about img ">
<div class="container">
    <div class="row">
        <iframe :src="contact.form+`?embedded=true`"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
</div>
<div><footers style="margin-bottom:0"></footers></div>
</div>
</template>

<script>

import {contactsref} from '../firebase'

export default {
  name: "Partner",
 components: {

  },
  data() {
      return{
           contact:''
      }
     
  },

  props: {
    msg: String,
  },
  created() {
      this.$rtdbBind('contact', contactsref);
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped css>
p {
    color: black;
}

.row iframe{
width:100%;
height: 80vh;
border:none;

}
.img {
  background-image: url("../assets/images/hero.png");  
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1cm;
  margin: 0px 0px;
}


</style>