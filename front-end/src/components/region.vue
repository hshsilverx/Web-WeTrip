<template>
    <div class="card-wrapper">
      <router-link :to="{path:'/backIndex/searchList',query:{content:'四川'}}">
        <div class="container">
            <div class="lower">
                <div>四川拥有世界文化遗产1项，世界自然遗产3项，世界文化与自然双重遗产1项，世界灌溉工程遗产1项；国家5A级旅游景区12处，4A级景区185处；中国最佳旅游城市1座，中国优秀旅游城市21座，中国历史文化名城8座，全国重点文物保护单位230处。四川将实施“绿色四川”旅游行动计划，建设世界重要旅游目的地......</div>
            </div>
            <div class="upper">
                <img src="/static/place/四川.jpg" alt="Barn owl">
                <p>四川七日游</p>
            </div>
        </div>
      </router-link>

      <router-link :to="{path:'/backIndex/searchList',query:{content:'天津'}}">
        <div class="container">
            <div class="lower">
                <div>天津自古因漕运而兴起，明永乐二年十一月二十一日（1404年12月23日）正式筑城，是中国古代唯一有确切建城时间记录的城市。历经600多年，造就了天津中西合璧、古今兼容的独特城市风貌。1860年被辟为通商口岸后，天津成为中国北方开放的前沿和近代中国洋务运动的基地......</div>
            </div>
            <div class="upper">
                <img src="/static/place/天津.jpg" alt="Barn owl">
                <p>天南大二日游</p>
            </div>
        </div>
      </router-link>

      <router-link :to="{path:'/backIndex/searchList',query:{content:'北京'}}">
        <div class="container">
            <div class="lower">
                <div>北京是首批国家历史文化名城和世界上拥有世界文化遗产数最多的城市，三千多年的历史孕育了故宫、天坛、八达岭长城、颐和园等众多名胜古迹。早在七十万年前，北京周口店地区就出现了原始人群部落“北京人”。公元前1045年，北京成为蓟、燕等诸侯国的都城。公元938年以来，北京先后成为辽陪都、金中都、元大都、明、清国都。明清时期，北京成为“天下四聚”之一，中华民国时期曾是北洋政府首都，1949年10月1日成为中华人民共和国首都......</div>
            </div>
            <div class="upper">
                <img src="/static/place/北京.jpg" alt="Barn owl">
                <p>北京香山植物园二日游</p>
            </div>
        </div>
      </router-link>

    </div>
</template>

<script></script>

<style scope>
    .card-wrapper{
      position:absolute;
      margin-top: 440px;
        padding: 20px;
        display: flex;
        flex-direction: row;
        justify-content:space-between;
    }
    #text{
        color:#ffffff;
    }
    .container {
        position: relative;
        height: 362px;
        width: 350px;
        margin: 0 auto;
        top: 5px;
        -webkit-perspective: 800px;
        -moz-perspective: 800px;
    }
    .container div {
        position: absolute;
        left: 0;
        top: 0;
        width: 282px;
        height: 322px;
        padding: 15px;
        /*background: #ffffff;*/
        -ms-border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -webkit-transition: 1.0s ease-in-out;
        -moz-transition: 1.0s ease-in-out;
        -ms-transition: 1.0s ease-in-out;
        -o-transition: 1.0s ease-in-out;
        transition: 1.0s ease-in-out;
      text-align: center;
    }
    .container div.lower {
        font-family: verdana, arial, sans-serif;
        background: #ffffff;
        background: -moz-linear-gradient(-45deg, #ffffff, #ffffff 50%, #ffffff2 100%);
        background: -webkit-gradient(linear, 0 0, 100% 100%, from(#ffffff), color-stop(50%, #ffffff), color-stop(100%, #ffffff));
        -moz-transform-style: preserve-3d;
        -moz-backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        -moz-transform: rotateY(-180deg);
        -webkit-transform: rotateY(-180deg);
    }
    .container div.lower h1 {
        font-size: 20px;
        padding: 0;
        margin: 0;
        color: #fff;
        line-height: 40px;
    }
    .container div.lower p {
        font-size: 11px;
        padding: 0;
        margin: 0;
        color: #eee;
        line-height: 20px;
    }
    .container div.lower a {
        color: #ff0;
    }
    .container div.upper {
        -moz-transform-style: preserve-3d;
        -moz-backface-visibility: hidden;
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        background: -moz-linear-gradient(-45deg, #ffffff, #ffffff 50%, #ffffff 100%);
        background: -webkit-gradient(linear, 0 0, 100% 100%, from(#ffffff), color-stop(50%, #ffffff), color-stop(100%, #ffffff));
    }
    .container div.upper img {
        width: 280px;
        height: 300px;
    }
    .container:hover div.lower {
        -moz-transform: rotateY(0);
        -webkit-transform: rotateY(0);
    }
    .container:hover div.upper {
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
    }
</style>
