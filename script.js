$(document).ready(function(){
    let offset = {offset: "80%"}
    $(" #one").waypoint(
        function(){
       $(" #one").addClass(
        "animate__animated animate__fadeInLeft"
        );
    },offset);

    $(" #two").waypoint(
        function(){
       $(" #two").addClass(
        "animate__animated animate__fadeInLeft"
        );
    },offset);

    $(" #three").waypoint(
        function(){
       $(" #three").addClass(
        "animate__animated animate__fadeInRight"
        );
    },offset);

    $(" .heading").waypoint(
        function(){
       $(" .heading").addClass(
        "animate__animated animate__backInDown"
        );
    },offset);

    $(" #trim").waypoint(
        function(){
       $(" #trim").addClass(
        "animate__animated animate__fadeInLeft"
        );
    },offset);


    $(" #dom").waypoint(
        function(){
       $(" #dom").addClass(
        "animate__animated animate__fadeInRight"
        );
    },offset);

    $(" #title").waypoint(
        function(){
       $(" #title").addClass(
        "animate__animated animate__backInDown"
        );
    },offset);

    $(" #term").waypoint(
        function(){
       $(" #term").addClass(
        "animate__animated animate__fadeInLeft"
        );
    },offset);

    $(" #match").waypoint(
        function(){
       $(" #match").addClass(
        "animate__animated animate__fadeInUp"
        );
    },offset);

    $(" #batch").waypoint(
        function(){
       $(" #batch").addClass(
        "animate__animated animate__fadeInRight"
        );
    },offset);

    $(" #earn").waypoint(
        function(){
       $(" #earn").addClass(
        "animate__animated animate__fadeInTopLeft"
        );
    },offset);

    $(" #warn").waypoint(
        function(){
       $(" #warn").addClass(
        "animate__animated animate__fadeInUpBig"
        );
    },offset);

    $(" #corn").waypoint(
        function(){
       $(" #corn").addClass(
        "animate__animated animate__fadeInTopRight"
        );
    },offset);
    
});