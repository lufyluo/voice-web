var vm;



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

        vm = new Vue({
            el: '#app',
            data: {
                searchInput:""
            },
            methods: {
                details: function() {
                    return  this.site + " - 学的不仅是技术，更是梦想！";
                }
            }
        })

        $(document).keydown(function (event) {
            if (event.keyCode == 13) {
                $.ajax({
                    url:"index/search?key="+vm.searchInput,
                    method:"GET",
                    success:function(e){
                        console.log(e);
                    },
                    error:function(e){
                        console.log(e);
                    }
                })
            }
        })

    });

};

