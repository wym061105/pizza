import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export var store = new Vuex.Store({
    state:{
        menuItems:[],

        currentUser:null,
        isLogin:''
    },
    getters:{
        getMenuItems:state=>state.menuItems,
        currentUser:state=>state.currentUser,
        isLogin:state=>state.isLogin
    },
    mutations:{
      setMenuItems(state,data){
        state.menuItems=data
      },
      pushMenuItems(state,data){
        state.menuItems.push(data)
      },
      deleteMenuItems(state,data){
        state.menuItems.forEach((item,index)=>{
            if(item==data){
                state.menuItems.splice(index,1)
            }
        })
      },
      UserStatus(state,data){
        if(data){
          state.currentUser=data
          state.isLogin=true
        }else{
          state.currentUser=null
          state.isLogin=false
        }
      }
    },
    actions:{
      setUser({commit},user){
        commit('UserStatus',user)
      }
    }
})