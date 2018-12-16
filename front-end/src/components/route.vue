<template>
    <div class = "wrapperall">
      <div class="wrapper">
      <img class = "content-pic" :src="url"/>
      <div class = "text-wrapper">
        <div class = "route_title" ><i class="fa fa-flag fa-fw"></i>{{rname}}</div>
         <div class = "route_destination" ><i class="fa fa-location-arrow fa-fw"></i>{{destination}}</div>
        <div class = "route_date" ><i class="fa fa-clock-o fa-fw"></i>{{date}}</div>
        <div class = "route_cost" ><i class="fa fa-rmb fa-fw"></i>{{cost}}</div>
        <div class = "description" >{{description}}</div>
      </div>
        <input v-model="phonenumber" class="myinput" type="text" placeholder="在此输入您的手机号" />
      <button id = "purchase_btn" class = "btn" @click = "purchase()">订购线路</button>
      </div>
      <div class="wrapper">
        <div class = "route_title" ><i class="fa fa-list fa-fw"></i>线路详情</div>
        <div class = "description" >&nbsp;&nbsp;&nbsp;&nbsp;这里是详情介绍。</div>
      </div>
    </div>



</template>

<script>
  export default{
    data(){
      return{
        rname:"故宫一日游",
        destination:"北京",
        date:"2018年12月22日",
        cost:"0",
        description:"远方滴客人请你留下来🎵欢迎报名！",
        url:"",
        info:{
          pname:"test",
          rname:"test",
          time:"test",
          phonenumsend:""

        },
        phonenumber:""

      }
    },
    mounted:function(){
      // if(localStorage.refresh!==Admin.find){
      //
      //   window.location.reload();刷新
      //
      // }
      this.rname=this.$route.query.username.rname;
      this.destination=this.$route.query.username.rcity;
      this.date=this.$route.query.username.rdate;
      this.url="/static/place/"+this.$route.query.username.rcity+".jpg";
      console.log(this.$route.query.username);
      console.log(this.img);

    },
    methods:{
      purchase() { //添加订单
        var myDate=new Date();
        this.info.time=""+myDate.getFullYear()+"年"+myDate.getMonth()+"月"+myDate.getDate()+"日"+myDate.getHours()+"时"+myDate.getMinutes()+"分"+myDate.getSeconds()+"秒";
        this.info.rname=this.$route.query.username.rname;
        this.info.pname=localStorage.c;
        this.info.phonenumsend=this.phonenumber;
        console.log(this.info.time);
        this.$reqs.post('/users/addOrder',this.info)
            .then((result)=>{
              //成功
              alert("恭喜您0折订购成功！请在\"我的信息\"中查看详情！");
            }).catch(function (error) {
            //失败
            console.log(error)
          });


      },
//       getRouteInfo(){
//         var _this = this;
//         this.$reqs.post('/users/RouteInfo',{
//             rname:"故宫一日游"
//         }).then(function(result){
//           //成功
// //          _this.listData = result.data.data;
// //          _this.pageInfo.allpage = Math.ceil( result.data.total/5 );
//           console.log(result)
//         }).catch(function (error) {
//           //失败
//           console.log(error)
//
//         });
//       },
//      findOrder(page){
//        var _this = this;
//
//        this.$reqs.post('/users/findOrder',{
//          page:page,
//          pname:this.Admin.pname,
//          rname:this.Admin.rname,
//          time:this.Admin.time
//        }).then(function(result){
//          //成功
//          _this.listData = result.data.data;
//          _this.pageInfo.allpage = Math.ceil( result.data.total/5 );
//        }).catch(function (error) {
//          //失败
//          console.log(error)
//        });
//      }
    }
  }

</script>

<style>
  .wrapper{
    margin:20px 0px 0px 0px;
    border-radius: 4px;
    padding: 20px 15px;
    background: #fff;
    height: 500px;
  }
  .content-pic {
    margin: 40px 40px 40px 40px;
    float: left;
    width: 330px;
    height: 330px;
    border-radius: 5%;
  }

  .text-wrapper {
    margin-left: 10px;
  }

  .route_title {
    margin-top:35px;
    font-size: 30px;
  }

  .route_destination {
    margin-top: 30px;
    font-size:20px;
    color: slategray;
  }

  .route_date {
    margin-top: 20px;
    font-size:20px;
    color: slategray;
  }

  .route_cost{
    margin-top: 45px;
    font-size:30px;
    color:darkred;
  }

  .description{
    margin-top: 50px;
    font-size:22px;
  }


  #purchase_btn {
    float:left;
    margin-left: 10px;
    margin-top: 40px;
    height:45px;
    width:150px;
    font-size:18px;
  }

  .content-pic {
    margin: 40px 140px 40px 40px;
    float: left;
    width: 330px;
    height: 330px;
    border-radius: 5%;
    position: relative;
    transform: scale(1);
    transition: all 0.7s ease 0s;
  }

  .content-pic:hover{
    transform: scale(1.05);
    transition: all 0.7s ease 0s;
  }

  .myinput {
    /*width: 20%;*/
    float:left;
    margin-top: 40px;
    height:45px;
    width:220px;
    font-size:18px;
  }
</style>
