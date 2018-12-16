<template>
    <div class = "wrapper">
      <router-link :to="{path:'/backIndex/searchList',query:{content:'新疆'}}">
        <div class="card">
        <img class="pic" src="../assets/images/scene.jpg"/>
        <div>
            <div id="title">新疆</div>
            <div id="peoplenum"><i class="fa fa-fire fa-fw"></i>
              月人数：49万</div>
        </div>
        <div style="color: #ff6060;" id="number">1</div>
        </div>
      </router-link>
        <hr class="line"/>
      <router-link :to="{path:'/backIndex/searchList',query:{content:'海南'}}">
        <div class="card">
            <img class="pic" src="../assets/images/scene1.png"/>
            <div>
                <div id="title">海南</div>
              <div id="peoplenum"><i class="fa fa-fire fa-fw"></i>月人数：17万</div>
            </div>
            <div style="color: #ffa360;" id="number">2</div>
        </div>
      </router-link>
        <hr class="line"/>
      <router-link :to="{path:'/backIndex/searchList',query:{content:'北京'}}">
        <div class="card">
            <img class="pic" src="../assets/images/scene2.png"/>
            <div>
                <div id="title">北京</div>
                <div id="peoplenum"><i class="fa fa-fire fa-fw"></i>月人数：10万</div>
            </div>
            <div style="color: #f4f22e;" id="number">3</div>
        </div>
      </router-link>
        <!--<hr class="line"/>-->

    </div>
</template>

<style>
    .wrapper{
        margin-top: 0px;
        background: #ffffff;
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
    }

    .pic {
        /*width: 100px;*/
        height: 100px;
        padding:5px;
        border-radius:10px;
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
    }
    .card {
        padding: 10px;
        width:250px;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
      text-decoration:none
    }

    #title{
        margin-left: 22px;
        font-size: 20px;
        font-weight: bold;
        width: 50px;
        margin-top: 20px;
      text-decoration:none
    }
    a {
      text-decoration: none;
      color:black;
    }

    #peoplenum{
        color: #777777;
        font-size: 16px;
        margin-top:13px;
        margin-left: 0px;
        width: 200px;
      text-decoration:none
    }

    #number{
        width: 20px;
        height: 20px;
        margin-right: 40px;
        margin-top:20px;
        font-size: 50px;
      text-decoration:none
    }

    .line{
        margin-top:3px;
        width:96%;
        margin:0 auto;
        border: 0;
        height: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
  /*#number,#title,#peoplenum{*/
    /*text-decoration:none*/
  /*}*/
</style>

<script></script>
