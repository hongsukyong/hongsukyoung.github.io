<script>
  function fetchpage (name){
    fetch(name).then(function(response){
      response.text().then(function(text){
        document.querySelector('article').innerHTML = text;
      })
    });
  }
  if(location.hash){
    fetchpage(location.hash.substr(2));
  } else {
    fetchpage('welcome')
  }
  fetch('list').then(function(response){
    response.text().then(function(text){
      var items = text.split(',');
      var i=0
      var tags = '';
      while(i<items.length){
        var item = items[i];
        item = item.trim();
        var tag = '<li><a href ="#!'+item+'" onclick="fetchpage(\''+item+'\')">'+item+'</li>';
        tags = tags + tag;
        i= i + 1;
      }
      document.querySelector('#nav').innerHTML = tags;
    })
  });
</script>
