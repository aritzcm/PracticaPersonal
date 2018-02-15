function reload(event){
    event.preventDefault;
    location.reload();
};
function menu1(event){
    event.preventDefault;
    elector = 1;
    if ($("#cvmenu").hasClass ("active")) {} else {
   $("#cvmenu").addClass ("active");
  };
    $("#programmenu").removeClass ("active");
    $("#ilustramenu").removeClass ("active");
    $("#soundmenu").removeClass ("active");
   if (!$("#cvText").hasClass ("hidden")) {} else {
   $("#cvText").removeClass ("hidden");
  }; 
   if ($("#programText").hasClass ("hidden")) {} else {
   $("#programText").addClass ("hidden");
  }; 
    if ($("#ilustraText").hasClass ("hidden")) {} else {
   $("#ilustraText").addClass ("hidden");
  };
    if ($("#sonoText").hasClass ("hidden")) {} else {
   $("#sonoText").addClass ("hidden");
  }; 
     if ($("#home2").hasClass ("hidden")) {} else {
   $("#home2").addClass ("hidden");
  }; 
};


function menu2(event){
    event.preventDefault;
    if ($("#programmenu").hasClass ("active")) {} else {
   $("#programmenu").addClass("active");
  };
    $("#cvmenu").removeClass ("active");
    $("#ilustramenu").removeClass ("active");
    $("#soundmenu").removeClass ("active");
   if (!$("#programText").hasClass ("hidden")) {} else {
   $("#programText").removeClass ("hidden");
  }; 
   if ($("#cvText").hasClass ("hidden")) {} else {
   $("#cvText").addClass ("hidden");
  }; 
     if ($("#ilustraText").hasClass ("hidden")) {} else {
   $("#ilustraText").addClass ("hidden");
  };
     if ($("#sonoText").hasClass ("hidden")) {} else {
   $("#sonoText").addClass ("hidden");
  }; 
     if ($("#home2").hasClass ("hidden")) {} else {
   $("#home2").addClass ("hidden");
  }; 
};

function menu3(event){
    event.preventDefault;
    if ($("#ilustramenu").hasClass ("active")) {} else {
   $("#ilustramenu").addClass("active");
  };
    $("#cvmenu").removeClass ("active");
    $("#programmenu").removeClass ("active");
    $("#soundmenu").removeClass ("active");
   if (!$("#ilustraText").hasClass ("hidden")) {} else {
   $("#ilustraText").removeClass ("hidden");
  }; 
   if ($("#cvText").hasClass ("hidden")) {} else {
   $("#cvText").addClass ("hidden");
  }; 
     if ($("#programText").hasClass ("hidden")) {} else {
   $("#programText").addClass ("hidden");
  };
     if ($("#sonoText").hasClass ("hidden")) {} else {
   $("#sonoText").addClass ("hidden");
  }; 
     if ($("#home2").hasClass ("hidden")) {} else {
   $("#home2").addClass ("hidden");
  }; 
};

function menu4(event){
    event.preventDefault;
    if ($("#soundmenu").hasClass ("active")) {} else {
   $("#soundmenu").addClass("active");
  };
    $("#cvmenu").removeClass ("active");
    $("#programmenu").removeClass ("active");
    $("#ilustramenu").removeClass ("active");
   if (!$("#sonoText").hasClass ("hidden")) {} else {
   $("#sonoText").removeClass ("hidden");
  }; 
   if ($("#cvText").hasClass ("hidden")) {} else {
   $("#cvText").addClass ("hidden");
  }; 
     if ($("#programText").hasClass ("hidden")) {} else {
   $("#programText").addClass ("hidden");
  };
     if ($("#ilustraText").hasClass ("hidden")) {} else {
   $("#ilustraText").addClass ("hidden");
  }; 
     if ($("#home2").hasClass ("hidden")) {} else {
   $("#home2").addClass ("hidden");
  };
};





function init(){
    console.log("DOM cargado");
    $("#cvmenu").click(menu1);
   $("#programmenu").click(menu2);
    $("#ilustramenu").click(menu3);
    $("#soundmenu").click(menu4);
    $('.inicio').click(reload);
}

$("document").ready(init);