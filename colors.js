var links = {
  setcolor: function linkssetcolor(color){
    // var alist = document.querySelectorAll('a')
    // var i=0;
    // while(i< alist.length){
    // alist[i].style.color = color;
    // i=i+1;
    // }
     $('a').css('color', color);
  }
}

var body = {
setcolor:  function bodysetcolor(color){
  // document.querySelector('body').style.color = color;
  $('body').css('color', color);
},
setbackgroundcolor:function bodysetbackgroundcolor(color){
  // document.querySelector('body').style.backgroundColor = color;
  $('body').css('backgroundColor', color);
  }
}


function nightdayhandler(self){
var hong=document.querySelector('body');
if (self.value === 'night') {
   body.setbackgroundcolor('dimgray');
   body.setcolor('powderblue');
    self.value = 'day';

    links.setcolor('powderblue');
  }
  else {
   body.setbackgroundcolor('white');
   body.setcolor('coral');
   self.value = 'night';

   links.setcolor('coral');
    }
}
