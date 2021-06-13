<template>
      <div>
        <div>
          <el-button @click="addClick" type="primary" size='mini' round>
  添加
</el-button>
        </div> 
<el-drawer
  title="添加人员"
  :visible.sync="drawer"
  direction="rtl"
  :before-close="handleClose">
  <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm" size="mini">
    <el-form-item label="添加:" prop="loginId" >
    <el-input v-model="ruleForm.foleName" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="tianjia">提交</el-button>
  </el-form-item>
</el-form>
</el-drawer>
      <el-table 
    :data="tableData"
    style="width: 99%"
    size='mini'
    >
    <el-table-column
      label="序号"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <!-- <p>住址: {{ scope.row.address }}</p> -->
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
      </div>  
   
</template>


<script>
import axios from  'axios'
export default {
template:{
  // axios
},
  //数据
    data() {
      return {
        tableData: [],
          drawer: false,
          ruleForm:{
          foleName:""
          },
      }
      
    },
    //挂载本地json
     mounted (){
        this.GetGoodsList()
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index,) {
       this.tableData.splice(index,1)

      },
    //获取本地json
      GetGoodsList(){
       axios.get('/data.json').then((res)=>{
         this.tableData=res.data
       })
      },
      addClick(){
        this.drawer=true
      },
       handleClose(done) {
        this.$confirm('确认关闭？')
          .then(()=> {
            done();
          })
          .catch(()=> {});
      },
      tianjia(){
        // console.log(this.ruleForm.foleName);
        if(this.ruleForm.foleName==''){
          alert('不能为空')
        }else{
          var res=this.ruleForm.foleName
          this.tableData.push(res)
        }
        // console.log(this.tableData[0].id);
      }
    },
}
</script>

<style scoped lang='scss'>

</style>