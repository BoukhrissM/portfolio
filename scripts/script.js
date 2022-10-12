// alert($(".educationContent").height())
     
$(".line").each(function (index) { 
    var a = $(".educationContent");
    $(this).height(a[index].clientHeight-75)  
});

gsap.from(".name,.pictureArea",{duration:2,y:-300,ease:"elastic"});
// gsap.fromTo(".name,.pictureArea",{opacity:0},{opacity:1,duration:10,ease:"elastic"});
// gsap.from(".pictureArea",{duration:10,y:-50 ,ease:"bounce"});


$(".span1,.span2").hover(function () {
        // over
        $(this).css({"font-size":"75px"});
    }, function () {
        // out
        $(this).css({"font-size":"65px"});
    }
);

$("#profilePic").hover(function () {
    // over
    $(this).css({"transform":"scale(1.12)"});
}, function () {
    // out
    $(this).css({"transform":"scale(1.0)"});
}
);

$(window).on('scroll',function(){
    if(scrollY==0)
        gsap.from(".name,.pictureArea",{duration:2,y:-400,ease:"elastic"});
})

$(".span1,.span2").click(function () {
    // over
    gsap.from(".pictureArea",{duration:2,y:-400,ease:"elastic"});
})



$(window).on("scroll",function(){
    // alert(window.scrollY)
    if(window.scrollY>1455 && window.scrollY < 1700){
        $(".contact2,.btn-download").addClass("animate__animated animate__zoomInUp")
        $(".btn-download").addClass("animate__animated animate__bounceIn")
    }
    else{
        $(".contact2,.btn-download").removeClass("animate__animated animate__zoomInUp")
        $(".btn-download").removeClass("animate__animated animate__bounceIn")
    }
})
