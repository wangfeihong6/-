<template>
      <div class="box">
        <div>
          <el-button @click="addClick" type="primary" size='mini' round>
  添加信息
</el-button>
        </div> 
<el-drawer
  title="添加人员"
  :visible.sync="drawer"
  direction="rtl"
  :before-close="handleClose">
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item  label="姓名" prop="name">
    <el-input  v-model="ruleForm.name" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item  label="手机号" prop="phone">
    <el-input  v-model="ruleForm.phone" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item  label="身份证后6位" prop="papers">
    <el-input  v-model="ruleForm.papers" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item  label="入住房间" prop="serial">
    <el-input  v-model="ruleForm.serial" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item  label="房间类型" prop="type">
    <el-input  v-model="ruleForm.type" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item  label="房间价格" prop="price">
    <el-input  v-model="ruleForm.price" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="入住时间" prop="Min">
    <el-input  v-model="ruleForm.Min" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="押金" prop="price">
    <el-input  v-model="ruleForm.price" autocomplete="off"></el-input>
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
      label="客户姓名"
      width="90">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="手机号"
      width="90">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.phone}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="身份证号"
      width="90">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.papers}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="入住房间"
      width="90">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.serial}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="房间类型"
      width="90">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.type}}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="房间价格"
      width="90">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.price}}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="入住时间"
      width="90">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.Min}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="押金"
      width="90">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.price}}</span>
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
      var validatepapers = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入身份证6位'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatetype = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入房间类型'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validateserial = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入入住房间'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validateprice = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入价格'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
       var validateMin = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入入住时间'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        tableData: [],
          drawer: false,
        imageUrl: '',
        ruleForm:{
        name: '',
        type:'',
        price:'',
        phone:'',
        Min:'',
        papers:'',
        serial:'',
          },
        rules: {
           name: [
            { validator: validatename, trigger: 'blur' }
          ],
           phone: [
            { validator: validatephone, trigger: 'blur' }
          ],
           price: [
            { validator: validateprice, trigger: 'blur' }
          ],
           serial: [
            { validator: validateserial, trigger: 'blur' }
          ],
           type: [
            { validator: validatetype, trigger: 'blur' }
          ],
           Min: [
            { validator: validateMin, trigger: 'blur' }
          ],
           papers: [
            { validator: validatepapers, trigger: 'blur' }
          ]
        }
      }
      
    },
    //挂载本地json
     mounted (){
       
        this.GetGoodsList()
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
       tijiao(){
          // console.log(this.tableData);
          // console.log(this.ruleForm);
          var res=this.ruleForm
          this.tableData.push(res)
      }
    },
}
</script>
 
<style scoped lang='scss'>
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
  .box{
    width: 100%;
  }
</style>