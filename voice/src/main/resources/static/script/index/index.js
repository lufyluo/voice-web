
window.onload =function(){
    alert();
    // if (document.addEventListener){
    //     document.addEventListener("keyup",fnKeyup,true);
    // }else{
    //     document.attachEvent("onkeyup",fnKeyup);
    // }
    function fnKeyup(e){
        if(e.keyCode==32)
        {
            alert("ok");
        }
    }

    layui.use('form', function(){
        var form = layui.form;
        var $ = layui.jquery
        $(document).on("onkeyup","#search-input",fnKeyup)
    });

    new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue.js!'
        }
    })
};

