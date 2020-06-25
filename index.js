$(document).ready(function(){
    $(function(){

        SetInterval(function(){

            var images = ["graphic1.jpg" , "graphic2.jpg" , "graphic3.jpg" , "graphic4.jpg" , "graphic5.jpg"];

            for(i=0;i<images.length;i++){
                $("#slide").attr("src", images[i]);
            } 
        } , 1000);
    });
});