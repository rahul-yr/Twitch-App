function ajax(keyword){  
  var url='https://wind-bow.gomix.me/twitch-api/streams/' + keyword +'?callback=?';
  $.getJSON(url, function(response){
   // console.log(response.stream); 
    
     // var status,content,channel_name,host,vrl,lang;
          
      if (response.stream === null) {
        status = "Offline";
        vrl="https://www.twitch.tv/"+keyword;
        d='<div class="container-fluid panel panel-default panel-success col-xs-12 col-md-12 col-sm-12" id="pAdj"><div class="panel-heading">'+keyword+'  <strong> : '+status+'</strong></div><div class="panel-footer"><a href='+vrl+' target="_blank">View Channel</a></div></div>';
         $("#fdata").append(d);
        
      } else if (response.stream === undefined) {
        status = "Channel not found";
         d='<div class="container-fluid panel panel-default panel-success col-xs-12 col-md-12 col-sm-12" id="pAdj"><div class="panel-heading">'+keyword+'  <strong> : '+status+'</strong></div></div>';
         $("#fdata").append(d);
       
      } else {
       // response = JSON.parse(response);   
        content = response.stream.game;
        status = response.stream.stream_type;  
        channel_name=response.stream.channel.display_name; 
       
        host=response.stream.channel.status; 
        vrl=response.stream.channel.url; 
        //  console.log(status+"------------------"+vrl);
       
        lang=response.stream.channel.broadcaster_language;
        d='<div class="container-fluid panel panel-default panel-success col-xs-12 col-md-12 col-sm-12" id="pAdj"><div class="panel-heading">'+channel_name+' : <strong>'+status+'</strong></div><div class="panel-body"><strong>'+content+'</strong> : '+host+'-'+lang+'<hr>Viewers : '+response.stream.viewers+'</div><div class="panel-footer"><a href='+vrl+' target="_blank">View Channel</a></div></div>';
        $("#fdata").append(d);
      }
         
    
  });

}
function search(){
  name=$(ic).val();
 // console.log(name);
  ajax(name);
  
}
$(document).ready(function(){
 // $("#fdata").css("background-color")
  var channels=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","Rahul Reddy"];
  //ajax("ESL_SC2");
  channels.forEach(function(chan){
    ajax(chan);
  });
});



 /* $.ajax({  
    url:'https://wind-bow.gomix.me/twitch-api/streams/' + keyword +'?callback=?',
    //datatype:"json",
    success:function(response){ 
      console.log("RR");
      console.log(response+"-----------------------");
    }
  });            */