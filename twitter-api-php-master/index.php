<html>
<head>
    
    <title>Twitter Frame</title>
    <link href='http://fonts.googleapis.com/css?family=Old+Standard+TT' rel='stylesheet' type='text/css'>
    <link rel= "stylesheet" href="css/twitter-css.css">
        <!--Bootstrap-->
        <link rel= "stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
        <!--Link Tweets-->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="tweetLinkIt-master/tweetLinkIt/tweetLinkIt.js"></script>
    <script>
    $('.tweet').tweetLinkify();
    function pageComplete(){
        $('.tweet').tweetLinkify();
    }
    
    </script>
        
    
</head>
<body>
    
        <div class='twitter-head'><img class='t-l' src='../images/twitter-logo2.png'/></div>
    
<?php
require_once('TwitterAPIExchange.php');
$settings = array(
    'oauth_access_token' => "911647676-7fx6fdP5MFgFAADK1iI762INvfelViqpoQdkcS58",
    'oauth_access_token_secret' => "owHJg4aPJx83Q4CoTy2jNvKWp3dE1OOZwT21d5EfT8Clb",
    'consumer_key' => "vt9boB6YY65Bdao3IfWYGVDcr",
    'consumer_secret' => "PT3KmEvrDj0JeGuTubISpvkK2P75J4fmdwTjiRtqXNLyBEsSri"
);
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$requestMethod = 'GET';
$getfield = '?q=%23gameofthrones';
$twitter = new TwitterAPIExchange($settings);
/**echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
**/
$string = json_decode($twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest(),$assoc = TRUE);
    
foreach($string['statuses'] as $items)
    {
        $user = $items['user'];
        $entities = $items['entities'];
        $media = $entities['media'];
        $tweetMedia = $media[0];
        
        $date = new DateTime( $items->created_at );
        
        
        
        
        echo  "<div class='row tweet-box'>
                    <div class='col-xs-3 col-md-3'>
                        <img class='profile-image' src='" . $items['user']['profile_image_url_https'] . "'/> <br />
                    </div>";
        
        
        echo "<div class='col-xs-6 col-md-7'>
                <span class='name'>" . $user['name'] . "</span><span class='screen-name'> @" . $items['user']['screen_name'] . "</span></div>";
        
        echo  "<div class='tweet'>" . $items['text'] . "</div><br />
        
                </div>";
        
        
        
        
       
                
        
        echo        "<div class='col-xs-3 col-md-2'>
                        <div class='twitter-date'>" . $date->format( 'M jS') . "</div><br />
                    </div>
                </div>";
                
        
         echo "<div class='row'>
                    <div class='col-xs-12 col-md-12'>
                        <img class='tweet-image' src='" . $tweetMedia['media_url'] . "'/> <br />
                    </div>
                </div>
                </div>";
        
        
        
        
        
        
        
        echo "<hr>";
    }
echo "<pre>";
  //  print_r($string);
echo "</pre>";

    echo "<script>pageComplete();</script>";


?>




</body>
</html>