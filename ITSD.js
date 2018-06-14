$(document).ready(function(){

console.log($(window).width())
    if($(window).width()>=800){



        $("#sideMenu1").mouseover(function(){
            let pos=$(this).position();

            let width=$(this).outerWidth();
            $("#actionSub").css({
                top: pos.top+40+"px",
                left:(pos.left+width)+"px"
            }).show()})
            .mouseleave(()=>{

            $("#actionSub").mouseenter(function(){

                $("#actionSub").show();
            })
                .click(()=> $("#actionSub").hide())
                .mouseleave(()=> $("#actionSub").hide())
            $("#actionSub").hide();

        })

        $("#sideMenu2").mouseover(function(){
            let pos=$(this).position();

            let width=$(this).outerWidth();
            $("#otherSub").css({
                top: pos.top+40+"px",
                left:(pos.left+width)+"px"
            }).show()})
            .mouseleave(()=>{

            $("#otherSub").mouseenter(()=>{
                $("#otherSub").show();
            }).click(()=> $("#otherSub").hide())
                .mouseleave(()=> $("#otherSub").hide())
            $("#otherSub").hide();

        })

    }

})