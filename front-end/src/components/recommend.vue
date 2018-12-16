<template>
  <div class="back" id="back">
    <div class="head" id="head">
      <div class="title">
        您可能感兴趣的目的地
      </div>
      <div class="change">
        <p id="bchange" @click="random()"><i class="fa fa-refresh" aria-hidden="true"></i> 换一换</p>
        <!--<button id = "hyhbtn" @click="random()"><i class="fa fa-refresh" aria-hidden="true"></i> 换一换</button>-->
      </div>
    </div>
    <div id="down">

      <div class="card" id="1">
        <router-link :to="{path:'/backIndex/searchList',query:{content:'天津'}}">
          <div class="pic" v-if="choose1==1" align="center">
            <img calss="photo" id="p1" src="../assets/images/1.jpg">
          </div>
        </router-link>

        <router-link :to="{path:'/backIndex/searchList',query:{content:'黑龙江'}}">
          <div class="pic" v-if="choose1==2" align="center">
            <img calss="photo" id="p2" src="../assets/images/2.jpg">
          </div>
        </router-link>

        <router-link :to="{path:'/backIndex/searchList',query:{content:'海南'}}">
          <div class="pic" v-if="choose1==3" align="center">
            <img calss="photo" id="p3" src="../assets/images/3.jpg">
          </div>
        </router-link>

        <router-link :to="{path:'/backIndex/searchList',query:{content:'河南'}}">
          <div class="pic" v-if="choose1==4" align="center">
            <img calss="photo" id="p4" src="../assets/images/4.jpg">
          </div>
        </router-link>

        <router-link :to="{path:'/backIndex/searchList',query:{content:'吉林'}}">
          <div class="pic" v-if="choose1==5" align="center">
            <img calss="photo" id="p5" src="../assets/images/5.jpg">
          </div>
        </router-link>
      </div>

      <div class="card" id="2">
        <router-link :to="{path:'/backIndex/searchList',query:{content:'天津'}}">
          <div class="pic" v-if="choose2==1" align="center">
            <img calss="photo" id="p21" src="../assets/images/1.jpg">
          </div>
        </router-link>

        <router-link :to="{path:'/backIndex/searchList',query:{content:'黑龙江'}}">
          <div class="pic" v-if="choose2==2" align="center">
            <img calss="photo" id="p22" src="../assets/images/2.jpg">
          </div>
        </router-link>

        <router-link :to="{path:'/backIndex/searchList',query:{content:'海南'}}">
          <div class="pic" v-if="choose2==3" align="center">
            <img calss="photo" id="p23" src="../assets/images/3.jpg">
          </div>
        </router-link>

        <router-link :to="{path:'/backIndex/searchList',query:{content:'河南'}}">
          <div class="pic" v-if="choose2==4" align="center">
            <img calss="photo" id="p24" src="../assets/images/4.jpg">
          </div>
        </router-link>

        <router-link :to="{path:'/backIndex/searchList',query:{content:'吉林'}}">
          <div class="pic" v-if="choose2==5" align="center">
            <img calss="photo" id="p25" src="../assets/images/5.jpg">
          </div>
        </router-link>
      </div>
      <div class="card" id="3">
        <router-link :to="{path:'/backIndex/searchList',query:{content:'天津'}}">
          <div class="pic" v-if="choose3==1" align="center">
            <img calss="photo" id="p31" src="../assets/images/1.jpg">
          </div>
        </router-link>

        <router-link :to="{path:'/backIndex/searchList',query:{content:'黑龙江'}}">
          <div class="pic" v-if="choose3==2" align="center">
            <img calss="photo" id="p32" src="../assets/images/2.jpg">
          </div>
        </router-link>

        <router-link :to="{path:'/backIndex/searchList',query:{content:'海南'}}">
          <div class="pic" v-if="choose3==3" align="center">
            <img calss="photo" id="p33" src="../assets/images/3.jpg">
          </div>
        </router-link>

        <router-link :to="{path:'/backIndex/searchList',query:{content:'河南'}}">
          <div class="pic" v-if="choose3==4" align="center">
            <img calss="photo" id="p34" src="../assets/images/4.jpg">
          </div>
        </router-link>

        <router-link :to="{path:'/backIndex/searchList',query:{content:'吉林'}}">
          <div class="pic" v-if="choose3==5" align="center">
            <img calss="photo" id="p35" src="../assets/images/5.jpg">
          </div>
        </router-link>

      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "recommend",
    data() {
      return {
        choose1: "5",
        choose2: "1",
        choose3: "4",
      }
    },
    methods: {
      random() {
        var count = 5;
        var a = new Array();
        for (var i = 0; i < 5; i++) {
          a[i] = i + 1;

        }
        a.sort(function () {
          return 0.5 - Math.random();

        })

        for (var i = 0; i < a.length; i++) {
          // document.write(a[i] + " ");
          console.log(a[i]);
        }

        // let arr = [1,2,3,4,5], res = [], newArr;
        // newArr = Object.assign([], arr);
        // for (let item = 0; item < arr.length; item++) {
        //     res.push(newArr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
        //     // console.log(res);
        // }
        // res.length = 3;
        this.choose1 = a[0];
        // console.log(this.choose1);
        this.choose2 = a[1];
        // console.log(this.choose2);
        this.choose3 = a[2];
        // console.log(this.choose3);
      }
    }
  }

</script>

<style scoped>
  #back {
    margin: 10px 0px 0px 0px;
    border-radius: 4px;
    padding: 20px 15px;
    height: 350px;
    widht: 700px;
    background: #fff;
  }

  .card-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
  }

  #hyhbtn {
    border: none;
    outline: none;
  }

  .title {
    color: #333;
    font-size: 20px;
    float: left;
    width: 300px;
    background: #fff;
    margin: 10px 0px 0px 30px;
  }

  #head {
    margin: 0px 0px 0px 0px;
    border-radius: 4px;
    height: 45px;
    widht: 700px;
    background: #fff;
  }

  .change {
    float: right;
    background: #fff;
    margin: 14px 30px 0px 0px;
    color: #4187db;
    cursor: pointer;
  }

  #down {
    /*text-align: center;*/
    border-radius: 4px;
    height: 300px;
    widht: 700px;
    background: #fff;
  }

  .card {
    display: inline-block;
    margin: 10px 4% 0px 4%;
    width: 25%;
    height: 90%;
    min-width: 200px;
    max-width: 300px;
    border-radius: 4px;
    background: #fff;
    transition:0.5s;
  }

  .card:hover {
    box-shadow: 0px 0px 20px #759bfc;
  }

  .pic {
    display: inline-block;
    text-align: center;
    margin-left: 5%;
    width: 90%;
    height: 90%;
    overflow: hidden;
    /*background:#ff0000;*/
  }

  .pic img {
    margin: 10px 0px 0px 0px;
    width: 200px;
  }

</style>
