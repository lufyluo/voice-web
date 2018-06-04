$(function () {
    var vm = new Vue({
        el: '#app',
        data: {
            searchInput: "",
            voiceItems: []
        },
        methods: {
            details: function () {
                return this.site + " - 学的不仅是技术，更是梦想！";
            }
        }
    })

    layui.use(['jquery', 'layer', 'form'], function () {
        var form = layui.form;
        $(document).keydown(function (event) {
            if (event.keyCode == 13) {
                $.ajax({
                    url: "index/search",
                    data: vm.data.searchInput,
                    success: function (data) {
                        if (data.Success) {
                            vm.data.voiceItems = data.items;
                        }
                    },
                    dataType: "json"
                });
            }
        });
    });

})

