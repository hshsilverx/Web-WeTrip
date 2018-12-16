// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
// module.exports = router;

//////////////////////////////////////////////////////////////////
// var express = require('express');
// var router = express.Router();
// var handler = require('./dbhandler.js');
// var crypto = require('crypto');
//
// /* POST users listing. */
// //登录
// router.post('/login', function(req, res, next) {
//     var md5 = crypto.createHash('md5');
//     var password = md5.update(req.body.password).digest('base64');
//
//     handler(req, res, "user", {name: req.body.username},function(data){
//         if(data.length===0){
//             res.end('{"err":"抱歉，系统中并无该用户，如有需要，请向管理员申请"}');
//         }else if(data[0].password !== password){
//             res.end('{"err":"密码不正确"}');
//         }else if(data.length!==0&&data[0].password===password){
//
//             req.session.username = req.body.username; //存session
//             req.session.password = password;
//
//             res.end('{"success":"true"}');
//         }
//
//     });
//
// });
//
// //退出
// router.post('/logout', function(req, res, next) {
//
//     req.session.username = ""; //清除session
//     req.session.password = "";
//     res.end('{"success":"true"}');
// });
//
// module.exports = router;




var express = require('express');
var router = express.Router();
var handler = require('./dbhandler.js');
var crypto = require('crypto');
var ObjectId = require('mongodb').ObjectId;

var QcloudSms = require("qcloudsms_js");

// 短信应用SDK AppID
var appid = 1400141381;  // SDK AppID是1400开头

// 短信应用SDK AppKey
var appkey = "56a4d5df56d2f8e07c9ef20024996710";

// 需要发送短信的手机号码
var phoneNumbers = [""];

// 短信模板ID，需要在短信应用中申请
var templateId = 248398;  // NOTE: 这里的模板ID`7839`只是一个示例，真实的模板ID需要在短信控制台中申请
//templateId 7839 对应的内容是"您的验证码是: {1}"
// 签名
var smsSign = "何书豪好好学习";  // NOTE: 这里的签名只是示例，请使用真实的已申请的签名, 签名参数使用的是`签名内容`，而不是`签名ID`

// 实例化QcloudSms
var qcloudsms = QcloudSms(appid, appkey);

// 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
function callback(err, res, resData) {
    if (err) {
        console.log("err: ", err);
    } else {
        console.log("request data: ", res.req);
        console.log("response data: ", resData);
    }
}

// var QcloudSms = require("qcloudsms_js");
//
// // 短信应用SDK AppID
// var appid = 1400141381;  // SDK AppID是1400开头
//
// // 短信应用SDK AppKey
// var appkey = "56a4d5df56d2f8e07c9ef20024996710";
//
// // 需要发送短信的手机号码
// var phoneNumbers = ["13890880019"];
//
// // 短信模板ID，需要在短信应用中申请
// var templateId = 248398;  // NOTE: 这里的模板ID`7839`只是一个示例，真实的模板ID需要在短信控制台中申请
// //templateId 7839 对应的内容是"您的验证码是: {1}"
// // 签名
// var smsSign = "何书豪好好学习";  // NOTE: 这里的签名只是示例，请使用真实的已申请的签名, 签名参数使用的是`签名内容`，而不是`签名ID`
//
// // 实例化QcloudSms
// var qcloudsms = QcloudSms(appid, appkey);
//
// // 设置请求回调处理, 这里只是演示，用户需要自定义相应处理回调
// // function callback(err, res, resData) {
// //     if (err) {
// //         console.log("err: ", err);
// //     } else {
// //         console.log("request data: ", res.req);
// //         console.log("response data: ", resData);
// //     }
// // }
//
// var ssender = qcloudsms.SmsSingleSender();
// var params = ["one","two","three"];//数组具体的元素个数和模板中变量个数必须一致，例如事例中templateId:5678对应一个变量，参数数组中元素个数也必须是一个
//






// router.post('/smsnode', function (req, res) {
//     handler(req, res, "user", {},function(data){
//     });
//     res.end('{"success":"true"}')
// });

/* POST users listing. */
//登录
router.post('/login', function(req, res, next) {
    var md5 = crypto.createHash('md5');
    var password = md5.update(req.body.password).digest('base64');

    handler(req, res, "user", {name: req.body.username},function(data){
        if(data.length===0){
            res.end('{"err":"抱歉，系统中并无该用户，如有需要，请向管理员申请"}');
        }else if(data[0].password !== password){
            res.end('{"err":"密码不正确"}');
        }else if(data.length!==0&&data[0].password===password){

            req.session.username = req.body.username; //存session
            req.session.password = password;

            res.end('{"success":"true"}');
        }

    });

});

//退出
router.post('/logout', function(req, res, next) {

    req.session.username = ""; //清除session中的用户信息
    req.session.password = "";
    res.end('{"success":"true"}');
});


//管理员列表
router.post('/AdminList', function(req, res, next) {
    //console.log(req.body);
    req.route.path = "/page"; //修改path来设定 对 数据库的操作
    var page = req.body.page || 1;
    var rows = req.body.rows || 5;
    handler(req, res, "user", [{},{limit: rows, skip:(page-1)*rows}] ,function(data,count){
        var obj = {
            data:data,
            total:count,
            success:"成功"
        };
        var str = JSON.stringify(obj);
        res.end(str);
    });
});

//管理员列表new订单列表
router.post('/OrderList', function(req, res, next) {
    //console.log(req.body);
    req.route.path = "/page"; //修改path来设定 对 数据库的操作
    var page = req.body.page || 1;
    var rows = req.body.rows || 5;
    handler(req, res, "order", [{},{limit: rows, skip:(page-1)*rows}] ,function(data,count){
        var obj = {
            data:data,
            total:count,
            success:"成功"
        };
        var str = JSON.stringify(obj);
        res.end(str);
    });
});

//new查询订单
router.post('/findOrder', function(req, res, next) {
    console.log(req.body);
    req.route.path = "/page"; //修改path来设定 对 数据库的操作
    var page = req.body.page || 1;
    var rows = req.body.rows || 5;
    handler(req, res, "order", [{'$or':[{"pname":req.body.pname},{"rname":req.body.rname},{"time":req.body.time}]},{limit: rows, skip:(page-1)*rows}] ,function(data,count){
        var obj = {
            data:data,
            total:count,
            success:"成功"
        };
        var str = JSON.stringify(obj);
        res.end(str);
    });
});

//new查询路线 单
router.post('/findRoute', function(req, res, next) {
    //console.log(req.body);
    var page = req.body.page || 1;
    var rows = req.body.rows || 5;
    req.route.path = "/page"; //修改path来设定 对 数据库的操作
    handler(req, res, "route", [{"rcity":req.body.rcity},{limit: rows, skip:(page-1)*rows}] ,function(data){
        var obj = {
            data:data,
            success:"成功"
        };
        var str = JSON.stringify(obj);
        console.log(data);
        res.end(str);
        // res.end(data)
    });
});



//添加管理员
router.post('/add', function(req, res, next) {
    //console.log(req.body);
    var md5 = crypto.createHash('md5');
    req.body.password = md5.update(req.body.password).digest('base64');
    handler(req, res, "user", req.body,function(data){

        //console.log(data);
        if(data.length==0){
            res.end('{"err":"抱歉，添加失败"}');
        }else{
            res.end('{"success":"添加成功"}');
        }
    });
});

//添加管理员new添加订单
router.post('/addOrder', function(req, res, next) {



    console.log("???")
    // console.log(req.body);

    // var md5 = crypto.createHash('md5');
    // req.body.password = md5.update(req.body.password).digest('base64');
    handler(req, res, "order", req.body,function(data){
        // console.log(req.body);
        //console.log(data);
        if(data.length==0){
            res.end('{"err":"抱歉，添加失败"}');
            console.log("!!!")
        }else{
            res.end('{"success":"添加成功"}');
            console.log("??????")


        }
    });
    console.log(req.body);
    phoneNumbers[0]=req.body.phonenumsend;
    var ssender = qcloudsms.SmsSingleSender();
    var params = ["one","今天","three"];//数组具体的元素个数和模板中变量个数必须一致，例如事例中templateId:5678对应一个变量，参数数组中元素个数也必须是一个
    params[0]=req.body.pname;
    // params[1]=req.body.time;
    params[2]=req.body.rname;
    ssender.sendWithParam(86, phoneNumbers[0], templateId,
        params, smsSign, "", "", callback);  // 签名参数未提供或者为空时，会使用默认签名发送短信
});




//删除用户
router.post('/delete', function(req, res, next) {

    handler(req, res, "user", {"_id" : ObjectId(req.body._id)},function(data){

        console.log(data);
        if(data.length==0){
            res.end('{"err":"抱歉，删除失败"}');
        }else{
            var obj = {
                success:"删除成功"
            };
            var str = JSON.stringify(obj);
            res.end(str);
        }

    });
});

//删除用户new删除订单
router.post('/deleteOrder', function(req, res, next) {

    handler(req, res, "order", {"_id" : ObjectId(req.body._id)},function(data){

        console.log(data);
        if(data.length==0){
            res.end('{"err":"抱歉，删除失败"}');
        }else{
            var obj = {
                success:"删除成功"
            };
            var str = JSON.stringify(obj);
            res.end(str);
        }

    });
});


//编辑更新用户
router.post('/update', function(req, res, next) {
    //console.log(req.body);

    var selectors = [
        {"_id":ObjectId(req.body._id)},
        {"$set":{
                name:req.body.name, //用户名称
                phone:req.body.phone, //联系电话
                idnumber: req.body.idnumber //身份证
            }
        }
    ];
    handler(req, res, "user", selectors,function(data){

        //console.log(data);
        if(data.length==0){
            res.end('{"err":"抱歉，修改失败"}');
        }else{
            res.end('{"success":"修改成功"}');
        }

    });

});


//编辑更新用户new更新订单
router.post('/updateOrder', function(req, res, next) {
    //console.log(req.body);

    var selectors = [
        {"_id":ObjectId(req.body._id)},
        {"$set":{
                pname:req.body.pname, //用户名称
                rname:req.body.rname, //联系电话
                time:req.body.time
            }
        }
    ];
    handler(req, res, "order", selectors,function(data){

        //console.log(data);
        if(data.length==0){
            res.end('{"err":"抱歉，修改失败"}');
        }else{
            res.end('{"success":"修改成功"}');
        }

    });
});

router.post('/findUser', function(req, res, next) {
    console.log(req.body);
    req.route.path = "/page"; //修改path来设定 对 数据库的操作
    handler(req, res, "user", [{"name":req.body.name}] ,function(data){
        var obj = {
            data:data,
            success:"成功"
        };
        var str = JSON.stringify(obj);
        console.log(data);
        res.end(str);
    });
});

//////////////
//管理员列表new路线列表
router.post('/RouteList', function(req, res, next) {
    //console.log(req.body);
    req.route.path = "/page"; //修改path来设定 对 数据库的操作
    var page = req.body.page || 1;
    var rows = req.body.rows || 5;
    handler(req, res, "route", [{},{limit: rows, skip:(page-1)*rows}] ,function(data,count){
        var obj = {
            data:data,
            total:count,
            success:"成功"
        };
        var str = JSON.stringify(obj);
        res.end(str);
    });
});

//new查询路线
router.post('/findRoute2', function(req, res, next) {
    //console.log(req.body);
    req.route.path = "/page"; //修改path来设定 对 数据库的操作
    var page = req.body.page || 1;
    var rows = req.body.rows || 5;
    handler(req, res, "route", [{'$or':[{"rname":req.body.rname},{"rcity":req.body.rcity},{"rdate":req.body.rdate}]},{limit: rows, skip:(page-1)*rows}] ,function(data,count){
        var obj = {
            data:data,
            total:count,
            success:"成功"
        };
        var str = JSON.stringify(obj);
        res.end(str);
    });
});

//添加管理员new添加路线
router.post('/addRoute', function(req, res, next) {
    console.log(req.body);
    // var md5 = crypto.createHash('md5');
    // req.body.password = md5.update(req.body.password).digest('base64');
    handler(req, res, "route", req.body,function(data){

        //console.log(data);
        if(data.length==0){
            res.end('{"err":"抱歉，添加失败"}');
        }else{
            res.end('{"success":"添加成功"}');
        }
    });
});

//编辑更新用户new更新路线
router.post('/updateRoute', function(req, res, next) {
    //console.log(req.body);

    var selectors = [
        {"_id":ObjectId(req.body._id)},
        {"$set":{
                rname:req.body.rname, //路线名称
                rcity:req.body.rcity, //路线地点
                rdate:req.body.rdate
            }
        }
    ];
    handler(req, res, "route", selectors,function(data){

        //console.log(data);
        if(data.length==0){
            res.end('{"err":"抱歉，修改失败"}');
        }else{
            res.end('{"success":"修改成功"}');
        }

    });

});

//删除路线
router.post('/deleteRoute', function(req, res, next) {

    handler(req, res, "route", {"_id" : ObjectId(req.body._id)},function(data){

        console.log(data);
        if(data.length==0){
            res.end('{"err":"抱歉，删除失败"}');
        }else{
            var obj = {
                success:"删除成功"
            };
            var str = JSON.stringify(obj);
            res.end(str);
        }

    });
});


module.exports = router;
