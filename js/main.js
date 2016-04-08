var pepsi_seen = false;
document.getElementById('inquiry_btn').style.visibility="hidden";
document.getElementById('brand_button_row').style.visibility="hidden";

function showBtn(){
	document.getElementById('inquiry_btn').style.visibility="visible";
	$('#inquiry_btn').addClass('animated fadeIn');

	switch(document.getElementById('inquiry_select').selectedIndex) {
	 case 1:
	  subject="Business%20Inquiry";
	  break;
	 case 2:
	  subject="Driver%20Inquiry";
	  break;
	 default:
	 subject = "General";
	}
	document.getElementById('inquiry_btn_link').href="mailto:mrfix84@gmail.com?subject=" +
													subject +
													"&amp;body=Hi%20Chassis%2C%0A%3C%3CINSERT%20YOUR%20MESSAGE%20HERE%3E%3E%20";
}

$('.bran_button_img').click(function(){
	var van = document.getElementById("van");	
	var brandSrc = this.getAttribute('src');
	if (brandSrc == "img/brand_buttons/pepsi.png" && !pepsi_seen){
		van.src = "img/cars/coke.png";
		pepsi_seen = true;
		setTimeout(function () {
			van.src = "img/cars/" + brandSrc.substring(brandSrc.lastIndexOf('/')+1);
    	}, 500);
			
	}
	else{
		van.src = "img/cars/" + brandSrc.substring(brandSrc.lastIndexOf('/')+1);
	}
		
});

$(document).scroll(function(){
	var st = $(document).scrollTop();
    document.getElementById('debug').innerHTML = st;

    if (st > 360){
    	document.getElementById('brand_button_row').style.visibility="visible";
    	$('#brand_button_row').addClass('animated fadeInUp')
    }
});