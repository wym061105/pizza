<template>
  <div class="delivery row">
    <div class="card col-4" v-for="(item,index) in items" :key="index">
    <img class="card-img-top" :src="item.imgsrc" alt="Card image cap">
      <div class="card-body">
      <h4 class="card-title">{{item.title}}</h4>
      <p class="card-text text-success">{{item.text}}</p>
      <button @click="alert">快递查询</button>
      </div>
    </div> 
  </div>
</template>
<script>
export default {
  name: 'Delivery',
  data () {
    return {
      items:[
        {imgsrc:require('../../assets/del-sf.png'),title:'顺丰速运',text:'您的快递已发送至河北张家口'},
        {imgsrc:require('../../assets/del-yt.jpg'),title:'圆通快递',text:'您的快递已发送至山东青岛'},
        {imgsrc:require('../../assets/del-zt.jpg'),title:'中通快递',text:'您的快递已发送至河南洛阳'}
      ]
    }
  },
  methods:{
    alert(){
      alert('当前快递小哥正在快马加鞭为您派送。')
    } 
  }

}
</script>
<style scoped>
img{width:100%;height:50%;}
</style>
