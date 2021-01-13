<template>
  <div id="app">
    <navbar style="margin-bottom:50px;"></navbar>
	<router-view></router-view>
  </div>
</template>

<script>

export default{name:"app",
components:{

},
mounted:function(){
}
}
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  margin:0px;
  padding:0px;
}
</style>
