
document.ready(function(){
    if (document.addEventListener){
        document.addEventListener("keyup",fnKeyup,true);
    }else{
        document.attachEvent("onkeyup",fnKeyup);
    }
    function fnKeyup(e){
        if(e.keyCode==32)
        {
            //do something
        }
    }

    layui.use('form', function(){
        var form = layui.form;

        //监听提交
        form.on('submit(formDemo)', function(data){
            layer.msg(JSON.stringify(data.field));
            return false;
        });
    });
});

