import $ from "jquery"
var app_debug = true;
const ajaxurl = "/cppc3/web/api";
if (app_debug == true) {
    var HTTP_HOST = "http://39.99.243.197:801";
} else {
    // eslint-disable-next-line no-redeclare
    var HTTP_HOST = "http://39.99.243.197:801";
}
// 获取请求完整url
var ajax_url = function(url){
    return HTTP_HOST + ajaxurl + url;
}
// 获取请求完整参数
// eslint-disable-next-line no-unused-vars
var ajax_data = function(data = {}){
    data["_client_"] = "web";
    data["_version_"] = "1.0.0";
    // 更多公共参数~
    return JSON.stringify(data);
}
// 公共请求成功（需验证业务逻辑）
var ajax_success = function(result, status, xhr){
    // 验证业务逻辑部分（如未登录跳转登录等~）
    window.console.log(status +'----'+ result+ '----' + xhr);
    return true;
}
// 公共请求失败
var ajax_error = function(xhr, status, error){
    // 公共请求失败处理逻辑
    window.console.log("请求失败:" + error);
    return true;
}
// AJAX请求默认参数
$.ajaxSetup({
	type: "POST",
	dataType: "json",
	timeout: 3000,
    beforeSend : function(request) {
        request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    }
});

export default {
    post (url, data = {}, callback, errCallback) {
        $.ajax({
            url: ajax_url(url),
            data: data,//ajax_data(data)
            type: "post",
            dataType: "jsonp",
            success (result, status, xhr){
                if (ajax_success(result, status, xhr) === true) {
                    typeof(callback) == "function" && callback(result, status, xhr);
                }
            },
            error (xhr, status, error) {
                if (ajax_error(xhr, status, error) === true) {
                    typeof(errCallback) == "function" && errCallback(xhr, status, error);
                }
            }
        });
    }
}