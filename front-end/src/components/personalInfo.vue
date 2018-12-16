<template>
    <div class="all">
        <div class="person">
            <div class="left">
                <img src="../assets/images/noavatar_big.gif" alt="" id="photo"/>
            </div>
            <div class="right">
                <div class="uname"><i class="fa fa-user "></i>
                    {{qusername}}
                </div>
                <input v-if="editAdminObj" v-model="Admin2.phone" class="myinput" type="text"  id="inp"/>
                <div class="phone">
                  <i class="fa fa-phone fa-fw"></i>&nbsp;
                    {{qphone}}
                </div>
                <input v-if="editAdminObj" v-model="Admin2.idnumber" class="myinput" type="text" id="ini"/>
                <div class="idnumber">
                  <i class="fa fa-id-card fa-fw"></i>&nbsp;
                    {{qidnumber}}
                </div>
                <button v-if="editAdminObj" class="btn" @click="saveEditAdmin()"aria-hidden="true" id="save">保存</button>
                <button v-if="editAdminObj" class="btn" @click="quitEditAdmin()"aria-hidden="true" id="no">取消</button>
                <button v-if="!editAdminObj" class="btn" @click="editAdmin('1')" id="modify">修改信息</button>
            </div>
        </div>

        <div class="order">
            <div class="title">
                我的订单
            </div>
            <div class="show">
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
        </div>

        <recommend></recommend>
    </div>
</template>

<script>

    import Recommend from "./recommend";
    var theadData = [
        {
            title:"用户名",
            keyname:"pname"
        },{
            title:"线路名",
            keyname:"rname"
        },{
            title:"时间",
            keyname:"time"

        }
    ];
    var theadData2 = [
        {
            title:"用户名",
            keyname:"name"
        },{
            title:"电话",
            keyname:"phone"
        },{
            title:"身份证",
            keyname:"idnumber"

        }
    ];
    import grid from './grid.vue'
    export default {
        name: "personal",
        data () {
            return {
                qidnumber:"",
                qphone:"",
                qusername:"",
                listData:[],
                listData2:[],
                theadData2:theadData2,
                theadData:theadData,
                Admin:{ //订单信息
                    pname:"",
                    rname:"",
                    time:"",
                },
                Admin2:{//用户信息
                    name:"ttt",
                    phone:"",
                    idnumber:"",
                    // password:"",
                    // _id:"",
                },
                editAdminObj:null,  //用于存放正在编辑的用户
                pageInfo:{}
            }
        },
        mounted:function(){
            var storage=window.localStorage;
            this.qusername=storage.getItem("c");
            var storage2=window.localStorage;
            this.qphone=storage2.getItem("bb");
            this.qidnumber=storage2.getItem("aa");
            this.findOrder(1);
            var _this = this;
            this.$reqs.post('/users/findUser',{
                name:this.qusername,
            }).then(function(result){
                _this.listData2 = result.data.data;
                var storage=window.localStorage;
                storage.setItem("bb",_this.listData2[0].phone);
                var storage3=window.localStorage;
                storage3.setItem("aa",_this.listData2[0].idnumber);
                console.log(_this.listData2[0].phone);
                _this.pageInfo.allpage = Math.ceil( result.data.total/5 );
            }).catch(function (error) {
                //失败
                console.log(error)
            });
        },
        methods:{
            findOrder(page){
                var _this = this;
                this.$reqs.post('/users/findOrder',{
                    page:page,
                    pname:this.qusername,
                }).then(function(result){
                    //成功
                    _this.listData = result.data.data;
                    _this.pageInfo.allpage = Math.ceil( result.data.total/5 );
                }).catch(function (error) {
                    //失败
                    console.log(error)
                });
            },
            gopage(index){
                this.pageInfo.current = index;
                //查询数据
                this.findOrder(index);

            },
            editAdmin(item){ //编辑用户
                this.editAdminObj = item;
                this.Admin = JSON.parse(JSON.stringify(item));
            },
            modify(){

            },
            saveEditAdmin(){
                this.Admin2.name = this.qusername;
                console.log(this.Admin2.phone);
                console.log(this.Admin2.idnumber);
                if(!this.Admin2.name ||!this.Admin2.phone||!this.Admin2.idnumber){
                    alert("不能为空");
                    return false;
                }
                console.log(this.Admin2);
                this.$reqs.post('/users/update', this.Admin2)
                    .then((result)=>{
                        //成功
                        // this.gopage(this.pageInfo.current);

                        this.editAdminObj = null;
                    }).catch(function (error) {
                    //失败
                    console.log(error)
                });
            },
            quitEditAdmin(){
                this.editAdminObj = null;
            }
        },
        components:{Recommend, grid}
    }


</script>

<style scoped>

    .person {
        margin: 20px 0px 0px 0px;
        border-radius: 4px;
        padding: 20px 15px;
        height: 260px;
        widht: 700px;
        background: #fff;
    }
    .left {
        float: left;
        width: 300px;
        height: 100%;
        background: #fff;
    }

    .right{
        margin-left: 300px;
        background: #fff;
        height: 90%;
    }

    #photo {
        margin: 40px 0px 0px 70px;
        height: 70%;
        border-radius: 5%;
    }

    .person .uname {
        color: #333;
        font-size: 30px;
        margin: 30px 0px 0px 30px;

    }

    .person .phone{
        color: #333;
        font-size: 15px;
        margin: 20px 0px 0px 30px;
    }

    .person .idnumber{
        color: #333;
        font-size: 15px;
        margin: 20px 0px 0px 30px;
    }

    #modify{
        margin: 36px 0px 0px 30px;
    }

    .order{
        margin: 20px 0px 20px 0px;
        border-radius: 4px;
        padding: 20px 15px;
        height: 360px;
        widht: 700px;
        background: #fff;
    }
    .order .title{
        color: #333;
        font-size: 20px;
        margin: 10px 0px 0px 30px;
    }
    .order .show{
        margin: 30px 10px 0px 30px;
    }

    .myinput{
        margin: 13px 10px 0px 18px;
        position: absolute;
        font-size: 15px;
        color: #333;
        width: 250px;
    }

    #save{
        position: absolute;
        margin: 36px 10px 0px 30px;
    }
    #no{
        position: absolute;
        margin: 36px 10px 0px 130px;
    }

    /*.fa-user{*/
      /*font-size: 17px;*/
    /*}*/
</style>
