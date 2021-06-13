<template>
  <div>
    <div class="search">
        <el-button type='primary' size='mini' @click="addClick" round>
        添加账号
        </el-button>
    </div>
<el-drawer
  title="添加人员"
  :visible.sync="drawer"
  direction="rtl"
  :before-close="handleClose">
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="头像" prop="portrait">
    <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </el-form-item>
  <el-form-item label="账号" prop="serial">
    <el-input v-model="ruleForm.serial" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item  label="序号" prop="id">
    <el-input  v-model="ruleForm.id" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="姓名" prop="name">
    <el-input  v-model="ruleForm.name" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="电话" prop="phone">
    <el-input  v-model="ruleForm.phone" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="职务" prop="job">
    <el-input  v-model="ruleForm.job" autocomplete="off"></el-input>
    <!-- <el-select v-model="ruleForm.job" placeholder="选着" v-for="item in tableData" :key="item.value" :label='item.label' :value="item.value">
    </el-select> -->
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="tijiao">提交</el-button>
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
      width="120">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.id}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="账号"
      width="120">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.serial }}</span>      
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="120">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="电话"
      width="120">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.phone}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="屌毛的样子"
      width="120">
      <template slot-scope="scope">
        
          <el-image
      style="width: 60px; height: 60px"
      :src="scope.row.portrait"
      fit="cover"></el-image>
          <!-- {{}} -->
      </template>
    </el-table-column>
    <el-table-column
      label="职务"
      width="120">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.job}}</span>
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
  <el-pagination
  background
  layout="prev, pager, next"
  :page-size="8"
  :total="50">
</el-pagination>
  </div>
</template>

<script>

import axios from  'axios'
export default {
  //数据
    data() {
      // var validateportrait = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请添加头像'));
      //   } else {
      //     if (this.ruleForm.checkPass !== '') {
      //       this.$refs.ruleForm.validateField('checkPass');
      //     }
      //     callback();
      //   }
      // };
      var validateid = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入序号'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validateserial = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatephone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatename = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatejob = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入职务'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
         imageUrl: '',
        tableData: [],
        drawer: false,
        zong:'',
        ruleForm:{
        id: '',
        serial:'',
        phone:'',
        name:'',
        job:'',
          },
        rules: {
          // portrait: [
          //   { validator: validateportrait, trigger: 'blur' }
          // ],
           id: [
            { validator: validateid, trigger: 'blur' }
          ],
           serial: [
            { validator: validateserial, trigger: 'blur' }
          ],
           phone: [
            { validator: validatephone, trigger: 'blur' }
          ],
           name: [
            { validator: validatename, trigger: 'blur' }
          ],
           job: [
            { validator: validatejob, trigger: 'blur' }
          ],
        }
      };   
    },
    //挂载本地json
     mounted (){
        this.GetGoodsList()
        //获取角色方法
        // this.getRoleList()
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(res);
      },
       beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
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
    handleClose(done){
        this.$confirm('确认关闭？')
          .then(()=> {
            done();
          })
          .catch(()=> {});
      },
      addClick(){
        this.drawer=true
      },
      tijiao(){
          // console.log(this.tableData);
          // console.log(this.ruleForm);
          var res=this.ruleForm
          this.tableData.push(res)
      }
    },
     
}
</script>

<style scoped>
 .avatar-uploader{
    width: 178px;
    height: 178px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>