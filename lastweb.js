var url = atob(window.location.href.match(/#(.*)/i)[1]);
var enc = window.location.href.match(/#(.*)/i)[1];
$(document).ready(function(){
    // $('.safelink_generate').hide();
    

    $('.safelink_generate').html('<div style="text-align:center;margin:10px;" onclick="show_url()" class="button_safe">Generate Link Download.</div><div class="show_url" style="display:none;color:#333"><div class="notif_kecil">Silahkan copy link download dibawah ini, dan pastekan di browser anda untuk mendownload.</div><div class="copy_link"><input type="text" value="'+url+'" id="input_safelink"/><button onclick="safelink_copy()">Copy Link</button></div></div>');
    
    var interval = 5;
 	var interval_ = setInterval(function(){
 		$('.safelink_home,.safelink_page').html('<div class="wait_safe">Silahkan Tunggu '+interval--+' detik</div>');
 		if(interval === 0){
 			clearInterval(interval_);
 			$('.safelink_page').html('<div style="text-align:center;margin:10px;" class="button_safe" onclick="go_bawah()">Klik 2x ya Gan Wkwk</div>');
 			$('.safelink_home').html('<div style="text-align:center;margin:10px;"><div onclick="verfy()" class="button_safe">Verifikasi Untuk Melihat Link!!</div></div>');
 		}
 	}, 1000);
 	
})

function verfy(){
    var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var data = this.responseXML.getElementsByTagName("link");
          var leng = Math.floor(Math.random() * (data.length-1)) + 1;
          var rand_post = data[leng].childNodes[0].nodeValue;
          window.location.href = rand_post+'#'+enc;
        }
      };
      xmlhttp.open("GET", "https://racstep.blogspot.com/feeds/posts/default?max-results=999&alt=rss&type=post", true);
      xmlhttp.send();
}

function show_url(){
    $('.show_url').show();
}

function safelink_copy(){
    var copyText = document.getElementById("input_safelink");
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");
}

function go_bawah(){
    $('html, body').animate({
            scrollTop: $(".safelink_generate").offset().top
        }, 1000);
        $('.safelink_generate').show();
}