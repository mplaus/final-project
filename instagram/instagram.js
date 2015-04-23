// JavaScript Document


//Use this url below to get your access token
//https://instagram.com/oauth/authorize/?client_id=6d8b435d4a3e49d1a629ecfbedebcf6d&redirect_uri=http://	http://mplaus.webfactional.com/classproject/instagram/instagram.html&response_type=code 
//https://instagram.com/oauth/authorize/?display=touch&client_id=6d8b435d4a3e49d1a629ecfbedebcf6d&redirect_uri=	http://mplaus.webfactional.com/classproject/instagram/instagram.html&response_type=token

//b427829f39ee4347ba28e16bdc53cfba

//if you need a user id for yourself or someone else use:
//http://jelled.com/instagram/lookup-user-id
						
$(function() {
	
	var apiurl = "https://api.instagram.com/v1/tags/gameofthrones/media/recent?access_token=2098021081.6d8b435.cf96c6136a494d9d990d8ea6b2d690ff&callback=?"
	
	var access_token = location.hash.split('=')[1];
	var html = ""
	
		$.ajax({
			type: "GET",
			dataType: "json",
			cache: false,
			url: apiurl,
			success: parseData
		});
				
		
		function parseData(json){
			console.log(json);
			
			$.each(json.data,function(i,data){
				//html += '<img src ="' + data.user.profile_picture + '">'
				//html += '<p>Username: ' + data.user.username + '</p>'
				html += '<img style="margin: 2px 5px 2px 5px; width: 157px; height: 157px;" src ="' + data.images.low_resolution.url + '">'
			});
			
			console.log(html);
			$("#results").append(html);
			
		}
		
		
                
               
 });
		
		
		
		
	

		