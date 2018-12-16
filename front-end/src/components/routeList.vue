<!--<template>-->
    <!--<div class="routeList main">-->
        <!--<div class="input_box">-->
            <!--<input v-model="Route.rname" class="myinput" type="text" placeholder="线路名" />-->
            <!--<input v-model="Route.rcity" class="myinput" type="text" placeholder="线路地点" />-->
            <!--<input  v-model="Route.rdate" class="myinput" type="text" placeholder="线路时间" />-->
            <!--<button v-if="!editRouteObj" class="btn" @click="addRoute()"><i class="fa fa-plus" aria-hidden="true"></i>添加</button>-->
            <!--<button v-if="editRouteObj" class="btn" @click="saveEditRoute()"><i class="fa fa-save" aria-hidden="true"></i>保存</button>-->
            <!--<button style="opacity: 0.8;" v-if="editRouteObj" class="btn" @click="cancelEditRoute()"><i class="fa fa fa-times-circle-o" aria-hidden="true"></i>取消</button>-->
            <!--<button class="btn" @click="findRoute(1)"><i class="fa fa-search" aria-hidden="false"></i>查询</button>-->
        <!--</div>-->
        <!--<grid-->
                <!--:listData="listData"-->
                <!--:theadData="theadData"-->
                <!--:ifEdit="true"-->
                <!--:ifDelete="true"-->
                <!--:ifpage="true"-->
                <!--:pageInfo="pageInfo"-->
                <!--@on-delete="deleteRoute"-->
                <!--@on-edit="editRoute"-->
                <!--@on-gopage="gopage"-->
        <!--&gt;</grid>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--var theadData = [-->
        <!--{-->
            <!--title:"线路名",-->
            <!--keyname:"rname"-->
        <!--},{-->
            <!--title:"线路地点",-->
            <!--keyname:"rcity"-->
        <!--},{-->
            <!--title:"线路时间",-->
            <!--keyname:"rdate"-->

        <!--}-->
    <!--];-->
    <!--import grid from './grid.vue'-->
    <!--export default {-->
        <!--name: 'routeList',-->
        <!--data () {-->
            <!--return {-->
                <!--listData:[],-->
                <!--theadData:theadData,-->
                <!--Route:{ //路线信息-->
                    <!--rname:"",-->
                    <!--rcity:"",-->
                    <!--rdate:"",-->
                <!--},-->
                <!--editRouteObj:null,  //用于存放正在编辑的路线-->
                <!--pageInfo:{}-->
            <!--}-->
        <!--},-->
        <!--mounted:function(){-->
            <!--this.getRouteList(1);-->
        <!--},-->
        <!--methods:{-->
            <!--getRouteList(page){-->
                <!--var _this = this;-->
                <!--this.$reqs.post('/users/RouteList',{-->
                    <!--page:page-->
                <!--}).then(function(result){-->
                    <!--//成功-->
                    <!--_this.listData = result.data.data;-->
                    <!--_this.pageInfo.allpage = Math.ceil( result.data.total/5 );-->
                <!--}).catch(function (error) {-->
                    <!--//失败-->
                    <!--console.log(error)-->
                <!--});-->
            <!--},-->

            <!--findRoute(page){-->
                <!--var _this = this;-->
                <!--this.$reqs.post('/users/findrRoute2',{-->
                    <!--page:page,-->
                    <!--rname:this.Route.rname,-->
                    <!--rcity:this.Route.rcity,-->
                    <!--rdate:this.Route.rdate-->
                <!--}).then(function(result){-->
                    <!--//成功-->
                    <!--_this.listData = result.data.data;-->
                    <!--_this.pageInfo.allpage = Math.ceil( result.data.total/5 );-->
                <!--}).catch(function (error) {-->
                    <!--//失败-->
                    <!--console.log(error)-->
                <!--});-->
            <!--},-->
            <!--addRoute(){ //添加路线-->
                <!--if(!this.Route.rname || !this.Route.rcity||!this.Route.rdate){-->
                    <!--alert("不能为空");-->
                    <!--return false;-->
                <!--}-->
                <!--this.$reqs.post('/users/addRoute',this.Route)-->
                    <!--.then((result)=>{-->
                        <!--//-->
                        <!--this.getRouteList();-->
                        <!--this.emptyRoute();-->
                    <!--}).catch(function (error) {-->
                    <!--//失败-->
                    <!--console.log(error)-->
                <!--});-->

            <!--},-->
            <!--editRoute(item){ //编辑路线-->
                <!--this.editRouteObj = item;-->
                <!--this.Route = JSON.parse(JSON.stringify(item));-->
            <!--},-->
            <!--saveEditRoute(){-->
                <!--if(!this.Route.rname || !this.Route.rcity|| !this.Route.rdate){-->
                    <!--alert("不能为空");-->
                    <!--return false;-->
                <!--}-->
                <!--this.$reqs.post('/users/updateRoute', this.Route)-->
                    <!--.then((result)=>{-->
                        <!--//成功-->
                        <!--this.gopage(this.pageInfo.current);-->

                        <!--this.editRouteObj = null;-->
                        <!--this.emptyRoute();-->
                    <!--}).catch(function (error) {-->
                    <!--//失败-->
                    <!--console.log(error)-->
                <!--});-->



            <!--},-->
            <!--cancelEditRoute(){-->
                <!--this.editRouteObj = null;-->
                <!--this.emptyRoute();-->
            <!--},-->
            <!--emptyRoute(){ //清空输入框（多次使用，所以封装到这里)-->
                <!--this.Route.rname = "";-->
                <!--this.Route.rcity = "";-->
                <!--this.Route.rdate = "";-->
            <!--},-->
            <!--deleteRoute(item){-->
                <!--this.$reqs.post('/users/deleteRoute',item)-->
                    <!--.then((result)=>{-->
                        <!--//成功-->
                        <!--this.gopage(this.pageInfo.current);-->
                        <!--this.emptyRoute();-->
                    <!--}).catch(function (error) {-->
                    <!--//失败-->
                    <!--console.log(error)-->
                <!--});-->
            <!--},-->
            <!--gopage(index){-->
                <!--this.pageInfo.current = index;-->
                <!--//查询数据-->
                <!--this.getRouteList(index)-->

            <!--}-->
        <!--},-->
        <!--components:{grid}-->
    <!--}-->
<!--</script>-->

<!--&lt;!&ndash; Add "scoped" attribute to limit CSS to this component only &ndash;&gt;-->
<!--<style scoped>-->
    <!--.main{-->
        <!--border-radius: 4px;-->
        <!--background: #fff;-->
        <!--margin-top: 10px;-->
    <!--}-->


    <!--.input_box{-->
        <!--padding: 0 10px;-->
    <!--}-->
    <!--.input_box .myinput{-->
        <!--width: 25%;-->
    <!--}-->
<!--</style>-->
<template>
  <div class="routeList main">
    <div class="input_box">
      <input v-model="Route.rname" class="myinput" type="text" placeholder="线路名" />
      <input v-model="Route.rcity" class="myinput" type="text" placeholder="线路地点" />
      <input  v-model="Route.rdate" class="myinput" type="text" placeholder="线路时间" />
      <button v-if="!editRouteObj" class="btn" @click="addRoute()"><i class="fa fa-plus" aria-hidden="true"></i>添加</button>
      <button v-if="editRouteObj" class="btn" @click="saveEditRoute()"><i class="fa fa-save" aria-hidden="true"></i>保存</button>
      <button style="opacity: 0.8;" v-if="editRouteObj" class="btn" @click="cancelEditRoute()"><i class="fa fa fa-times-circle-o" aria-hidden="true"></i>取消</button>
      <button class="btn" @click="findRoute(1)"><i class="fa fa-search" aria-hidden="false"></i>查询</button>
    </div>
    <grid
      :listData="listData"
      :theadData="theadData"
      :ifEdit="true"
      :ifDelete="true"
      :ifpage="true"
      :pageInfo="pageInfo"
      @on-delete="deleteRoute"
      @on-edit="editRoute"
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
      title:"线路地点",
      keyname:"rcity"
    },{
      title:"线路时间",
      keyname:"rdate"

    }
  ];
  import grid from './grid.vue'
  export default {
    name: 'routeList',
    data () {
      return {
        listData:[],
        theadData:theadData,
        Route:{ //路线信息
          rname:"",
          rcity:"",
          rdate:"",
        },
        editRouteObj:null,  //用于存放正在编辑的路线
        pageInfo:{}
      }
    },
    mounted:function(){
      this.getRouteList(1);
    },
    methods:{
      getRouteList(page){
        var _this = this;
        this.$reqs.post('/users/RouteList',{
          page:page
        }).then(function(result){
          //成功
          _this.listData = result.data.data;
          _this.pageInfo.allpage = Math.ceil( result.data.total/5 );
        }).catch(function (error) {
          //失败
          console.log(error)
        });
      },
      findRoute(page){
        var _this = this;
        this.$reqs.post('/users/findRoute2',{
          page:page,
          rname:this.Route.rname,
          rcity:this.Route.rcity,
          rdate:this.Route.rdate
        }).then(function(result){
          //成功
          _this.listData = result.data.data;
          _this.pageInfo.allpage = Math.ceil( result.data.total/5 );
        }).catch(function (error) {
          //失败
          console.log(error)
        });
      },
      addRoute(){ //添加路线
        if(!this.Route.rname || !this.Route.rcity||!this.Route.rdate){
          alert("不能为空");
          return false;
        }
        this.$reqs.post('/users/addRoute',this.Route)
          .then((result)=>{
            //
            this.getRouteList();
            this.emptyRoute();
          }).catch(function (error) {
          //失败
          console.log(error)
        });

      },
      editRoute(item){ //编辑路线
        this.editRouteObj = item;
        this.Route = JSON.parse(JSON.stringify(item));
      },
      saveEditRoute(){
        if(!this.Route.rname || !this.Route.rcity|| !this.Route.rdate){
          alert("不能为空");
          return false;
        }
        this.$reqs.post('/users/updateRoute', this.Route)
          .then((result)=>{
            //成功
            this.gopage(this.pageInfo.current);

            this.editRouteObj = null;
            this.emptyRoute();
          }).catch(function (error) {
          //失败
          console.log(error)
        });



      },
      cancelEditRoute(){
        this.editRouteObj = null;
        this.emptyRoute();
      },
      emptyRoute(){ //清空输入框（多次使用，所以封装到这里)
        this.Route.rname = "";
        this.Route.rcity = "";
        this.Route.rdate = "";
      },
      deleteRoute(item){
        this.$reqs.post('/users/deleteRoute',item)
          .then((result)=>{
            //成功
            this.gopage(this.pageInfo.current);
            this.emptyRoute();
          }).catch(function (error) {
          //失败
          console.log(error)
        });
      },
      gopage(index){
        this.pageInfo.current = index;
        //查询数据
        this.getRouteList(index)

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
    width: 25%;
  }
</style>
