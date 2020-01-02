import Vue from 'vue'
import Vuex from 'vuex'
import * as serve from "@/serve/service"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        websock: null,
        eventlist: []
    },
    getters: {
        onEvent(state) {
            window.console.log(state);
            return function (method) {
                let index = state.eventlist.map((eb) => {
                    return eb.method
                }).indexOf(method);
                if (state.eventlist.length > 0 && index >= 0) {
                    let result = Object.assign({}, state.eventlist[index]);
                    state.eventlist.splice(index, 1);
                    return result.data;
                }
                return null;
            }
        }
    },
    mutations: {
        WEBSOCKET_INIT(state, url) {
            state.websock = new WebSocket(url);
            state.websock.onopen = function () {
                window.console.log("连接成功！");
            }
            state.websock.onmessage = function (callBack) {
                window.console.log("ws接收！");
                window.console.log(JSON.parse(callBack.data));
                let received_msg = JSON.parse(callBack.data);
                if (received_msg.type == "8") {
                    window.console.log(received_msg.data)
                    serve.bindsocket(received_msg.data);//发起新的请求
                }
                    
                // var receive = [];
                // var type = 0;
                // var length = 0;
                // receive = receive.concat(Array.from(new Uint8Array(callBack.data)));

                // if (receive.length < 6) {
                //     window.console.log("包头大小错误：" + receive.length)
                //     return;
                // }
                // var index = 0;
                // type = new DataView(new Uint8Array(receive).buffer).getUint16(index)
                // index += 2;
                // length = new DataView(new Uint8Array(receive).buffer).getUint32(index);
                // index += 4;
                // if (receive.length < length + 6) {
                //     window.console.log("包体大小错误：" + receive.length)
                //     return;
                // }
                // if (type == 5) {
                //     window.console.log("收到服务器心跳包！")
                //     return;
                // }
                // var bytes = receive.slice(index, length + 6);
                // //doSomething(bytes);
                // window.console.log("包体数据大小：" + bytes.length)

                // // eslint-disable-next-line no-unused-vars
                // var typeS = new DataView(new Uint8Array(receive).buffer).getUint16(index)
                // index += 2;

                // var methodLenth = new DataView(new Uint8Array(receive).buffer).getUint16(index)
                // index += 2;

                // var methodByte = receive.slice(index, index + methodLenth);
                // index += methodLenth;
                // var methodStr = byteToString(methodByte);
                // var dataByte = receive.slice(index, length + 6);
                // var dataStr = byteToString(dataByte);
                // window.console.log("methodStr:" + methodStr + " dataStr:" + dataStr)

                // state.eventlist.push({
                //     method: methodStr,
                //     data: JSON.parse(dataStr)
                // })
            }
            state.websock.οnerrοr = function (e) { //错误
                window.console.log("ws错误!");
                window.console.log(e);
            }
            state.websock.onclose = function (e) { //关闭
                window.console.log("ws关闭！");
                window.console.log(e);
            }
            state.websock.binaryType = "arraybuffer";
            //发送心跳包
            setInterval(function () {
                window.console.log("ws发送心跳！");
                var heart = {
                    type: 5,
                    data: ""
                };
                state.websock.send(makeByte(heart));
            }, 30000)
        },
        WEBSOCKET_SEND(state, p) {
            window.console.log("ws发送！");
            state.websock.send(makeByte(p));
        }
    },
    actions: {
        WEBSOCKET_INIT({
            commit
        }, url) {
            commit('WEBSOCKET_INIT', url)
        },
        WEBSOCKET_SEND({
            commit
        }, p) {
            p.type = 3;
            commit('WEBSOCKET_SEND', p)
        }
    }
})
function makeByte(p) {
    var bytesMethod = stringToByte(p.method);

    var bytes = stringToByte(JSON.stringify(p.jsonData));

    var headLenth = 6;
    var bodyLenth = bytes.length + bytesMethod.length + 2 + 2;
    var buffer = new ArrayBuffer(headLenth + bodyLenth);
    var view = new DataView(buffer);

    var count = 0;
    //包头
    view.setInt16(count, p.type); //消息类型2
    count += 2;
    view.setUint32(count, bodyLenth); //包体大小4
    count += 4;
    //包体

    view.setInt16(count, 1); //序列化类型2
    count += 2;
    view.setInt16(count, bytesMethod.length); //方法字符大小2
    count += 2;
    for (var i = 0; i < bytesMethod.length; i++) {
        view.setUint8(count, bytesMethod[i]);
        count++;
    }

    // eslint-disable-next-line no-redeclare
    for (var i = 0; i < bytes.length; i++) {
        view.setUint8(count, bytes[i]);
        count++;
    }
    window.console.log(view)
    return view;
}
function stringToByte(str) {
    var bytes = new Array();
    var len, c;
    len = str.length;
    for (var i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if (c >= 0x010000 && c <= 0x10FFFF) {
            bytes.push(((c >> 18) & 0x07) | 0xF0);
            bytes.push(((c >> 12) & 0x3F) | 0x80);
            bytes.push(((c >> 6) & 0x3F) | 0x80);
            bytes.push((c & 0x3F) | 0x80);
        } else if (c >= 0x000800 && c <= 0x00FFFF) {
            bytes.push(((c >> 12) & 0x0F) | 0xE0);
            bytes.push(((c >> 6) & 0x3F) | 0x80);
            bytes.push((c & 0x3F) | 0x80);
        } else if (c >= 0x000080 && c <= 0x0007FF) {
            bytes.push(((c >> 6) & 0x1F) | 0xC0);
            bytes.push((c & 0x3F) | 0x80);
        } else {
            bytes.push(c & 0xFF);
        }
    }
    return bytes;


}
// eslint-disable-next-line no-unused-vars
function byteToString(arr) {
    if (typeof arr === 'string') {
        return arr;
    }
    var str = '',
        _arr = arr;
    for (var i = 0; i < _arr.length; i++) {
        var one = _arr[i].toString(2),
            v = one.match(/^1+?(?=0)/);
        if (v && one.length == 8) {
            var bytesLength = v[0].length;
            var store = _arr[i].toString(2).slice(7 - bytesLength);
            for (var st = 1; st < bytesLength; st++) {
                store += _arr[st + i].toString(2).slice(2);
            }
            str += String.fromCharCode(parseInt(store, 2));
            i += bytesLength - 1;
        } else {
            str += String.fromCharCode(_arr[i]);
        }
    }
    return str;
}