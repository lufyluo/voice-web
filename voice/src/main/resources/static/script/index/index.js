window.onload = function () {
    var fnKeyup = function (e) {
        if (e.keyCode == 32) {
            alert("ok");
        }
    }
    layui.use(['jquery', 'layer', 'form'], function () {
        var $ = layui.$ //重点处
            , layer = layui.layer;
        var form = layui.form;

        var vm = new Vue({
            el: '#vue_det',
            data: {
                site: "菜鸟教程",
                url: "www.runoob.com",
                alexa: "10000"
            },
            methods: {
                details: function() {
                    return  this.site + " - 学的不仅是技术，更是梦想！";
                }
            }
        })

        $(document).keydown(function (event) {
            if (event.keyCode == 13) {
                $
            }
        });
    });
    new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue.js!'
        }
    })
};

