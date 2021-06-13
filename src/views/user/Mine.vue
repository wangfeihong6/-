<template>
  <div class="flex">
     <div>
       <el-image style="width:200px; height:200px" fit='cover'>

       </el-image>
     </div>
     <div class="content">
       <p>编号: {{this.tableData.serial}}</p>
       <p>姓名：{{this.tableData.name}}</p>
       <p>电话：{{this.tableData.phone}}</p>
       <p>角色：{{this.tableData.job}}</p>
       
     </div>
  </div>
</template>
<script>
// import axios from  'axios'
export default({

  data(){
      return{
        tableData:{
          name:'你爹',
          serial:'110',
          phone:'13549812562',
          job:'总监',
        },
      }
  },
  //  mounted (){
       
  //       this.GetGoodsList()
        
  //     },
  // methods:{
  //    GetGoodsList(){
  //      axios.get('/data.json').then((res)=>{
  //        this.tableData=res.data
         
  //      })
  //     },
  // }
})
</script>


<style scoped lang='scss'>
.content{
  margin-left: 10px;
  p{
    line-height: 45px;
  }
}
</style>