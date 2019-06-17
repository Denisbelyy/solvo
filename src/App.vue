<template>
  <div id="app">
    <h1>Тестовое задание для Solvo</h1>
    <table class="mainTable">
      <thead>
        <tr>
          <td>caption</td>
          <td>latitude</td>
          <td>longitude</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listData" v-bind:key="item.id">
          <td>{{item.caption}}</td>
          <td>{{item.latitude}}</td>
          <td>{{item.longitude}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      listData: []
    }
  },
  methods: {
    ...mapActions({
      getJson: 'getJson'
    })
  },
  created(){
    this.getJson().then(res => {
      this.listData = res.data.map(el => {
        let data = {
          caption: `${el.capital} is the capital of ${el.name}`,
          ...el.location
        }
        return data
      })
    }).catch(error => {
      alert(error)
    })
  }

}
</script>

<style>
  h1{
    text-align: center;
  }
  .mainTable{
    width: 50%;
    border-spacing: 0px;
    margin:0 auto
  }
  .mainTable thead td{
    font-size:16px;
    font-weight: bold;
    text-align: center;
    border:1px solid black;
  }
  .mainTable td{
    font-size:14px;
    text-align: center;
    padding:5px;
  }
  .mainTable tr:nth-child(even){
    background:#e9e9e9;
  }
</style>
