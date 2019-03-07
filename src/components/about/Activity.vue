<template>
<div class="activity">
  <div class="card col-12" v-for="(item,index) in items" :key="index">
    <img class="card-img-top" :src="item.imgsrc" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">{{item.title}}</h5>
    <p class="card-text">{{item.text}}</p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Activity',
  data () {
    return {
      items:[
        {imgsrc:require('../../assets/pizza1.jpg'),title:'热门活动1',text:'三八女王节有机会抽中免单'},
        {imgsrc:require('../../assets/pizza2.jpg'),title:'热门活动2',text:'三八女王节有机会抽中免单'},
        {imgsrc:require('../../assets/pizza3.jpg'),title:'热门活动3',text:'三八女王节有机会抽中免单'}
      ]
    }
  }

}
</script>
<style scoped>

</style>
