<template>
  <div class="adminList main">
    <!--<div class="input_box">-->
      <!--<i class="fa fa-user fa-fw"></i>&nbsp;<input v-model="Admin.name" class="myinput" type="text" placeholder="用户名" />-->
      <!--<i class="fa fa-phone fa-fw"></i>&nbsp;<input v-model="Admin.phone" class="myinput" type="text" placeholder="手机号" />-->
      <!--<i class="fa fa-key fa-fw"></i>&nbsp;<input v-if="!editAdminObj" v-model="Admin.password" class="myinput" type="password" placeholder="密码" />-->
      <!--<i class="fa fa-id-card fa-fw"></i>&nbsp;<input  v-model="Admin.idnumber" class="myinput" type="text" placeholder="身份证号" />-->
      <!--<button v-if="!editAdminObj" class="btn" @click="addAdmin()"><i class="fa fa-plus" aria-hidden="true"></i>添加</button>-->
      <!--<button v-if="editAdminObj" class="btn" @click="saveEditAdmin()"><i class="fa fa-save" aria-hidden="true"></i>保存</button>-->
      <!--<button style="opacity: 0.8;" v-if="editAdminObj" class="btn" @click="cancelEditAdmin()"><i class="fa fa fa-times-circle-o" aria-hidden="true"></i>取消</button>-->
    <!--</div>-->
    <grid
      :listData="listData"
      :theadData="theadData"
      :ifEdit="false"
      :ifDelete="false"
      :ifpage="true"
      :pageInfo="pageInfo"
      @on-delete="deleteAdmin"
      @on-edit="editAdmin"
      @on-gopage="gopage"
    ></grid>
  </div>
</template>

<script>
  var theadData = [
    {
      title:"线路名",
      keyname:"rname"
    },{
      title:"时间",
      keyname:"rdate"
    },{
      title:"地点",
      keyname:"rcity"
    }
  ];

  // var reflag=0;
  import grid from './grid2.vue'
  export default {
    name: 'adminList',
    data () {
      return {
        listData:[],
        theadData:theadData,
        Admin:{ //用户信息
          rname:"",
          rdate:"",
          rcity:"",
        },
        editAdminObj:null,  //用于存放正在编辑的用户
        pageInfo:{},
        citynow:""
      }
    },
    mounted:function(){
      // if(localStorage.refresh!==Admin.find){
      //
      //   window.location.reload();刷新
      //
      // }
      this.setCity();
      this.getAdminList(1);

    },
    methods:{
      setCity(){
        if(this.$route.query.content){
          this.citynow=this.$route.query.content;

        }else{
          this.citynow=localStorage.cnamenum;
        }
      },
      getAdminList(page){
        var _this = this;
        this.$reqs.post('/users/findRoute',{
          page:page,
          rcity:this.citynow,
          rdate:this.$route.query.content
        }).then(function(result){
          //成功
          _this.listData = result.data.data;
          _this.pageInfo.allpage = Math.ceil( result.data.total/5 );
        }).catch(function (error) {
          //失败
          console.log(error)
        });
      },
      addAdmin(){ //添加用户
        if(!this.Admin.name || !this.Admin.phone || !this.Admin.password || !this.Admin.idnumber){
          alert("不能为空");
          return false;
        }
        this.$reqs.post('/users/add',this.Admin)
          .then((result)=>{
            //成功
            this.getAdminList();
            this.emptyAdmin();
          }).catch(function (error) {
          //失败
          console.log(error)
        });

      },
      editAdmin(item){ //编辑用户
        this.editAdminObj = item;
        this.Admin = JSON.parse(JSON.stringify(item));
      },
      saveEditAdmin(){
        if(!this.Admin.name || !this.Admin.phone||!this.Admin.idnumber){
          alert("不能为空");
          return false;
        }
        this.$reqs.post('/users/update', this.Admin)
          .then((result)=>{
            //成功
            this.gopage(this.pageInfo.current);

            this.editAdminObj = null;
            this.emptyAdmin();
          }).catch(function (error) {
          //失败
          console.log(error)
        });



      },
      cancelEditAdmin(){
        this.editAdminObj = null;
        this.emptyAdmin();
      },
      emptyAdmin(){ //清空输入框（多次使用，所以封装到这里）
        this.Admin.name = "";
        this.Admin.phone = "";
        this.Admin.password = "";
        this.Admin.idnumber="";
      },
      deleteAdmin(item){
        this.$reqs.post('/users/delete',item)
          .then((result)=>{
            //成功
            this.gopage(this.pageInfo.current);
            this.emptyAdmin();
          }).catch(function (error) {
          //失败
          console.log(error)
        });
      },
      gopage(index){
        this.pageInfo.current = index;
        //查询数据
        this.getAdminList(index)

      }
    },
    components:{grid}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    border-radius: 4px;
    background: #fff;
    margin-top: 10px;
  }


  .input_box{
    padding: 0 10px;
  }
  .input_box .myinput{
    width: 20%;
  }
</style>
