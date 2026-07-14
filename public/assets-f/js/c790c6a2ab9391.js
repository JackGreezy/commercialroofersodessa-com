(function($){
  $(document).ready(function(){
  	$(".dropdown-list").find("label").on('click', function(){
  	  var valueDropdown = $(this).find('.dropdown-li-value').text();
  	  if($(this).closest(".dropdown-list").hasClass("multiple")){
  	  	var comma = false;
  	  	var txtValue = "";
  	  	$(this).closest(".dropdown-box").find("input[type=checkbox]").each(function(){
  	  	  if($(this).is(":checked")){
  	  	  	if(comma == true){
	  	  	  txtValue += ", ";
	  	  	}
	  	  	txtValue += $(this).closest("label").find(".dropdown-li-value").text();
	  	  	comma = true;
  	  	  }
  	  	});
  	  	$(this).closest(".dropdown-box").find(".dropdown-value").find("h6").text(txtValue);
  	  }else{
	    $(this).closest(".dropdown-box").find(".dropdown-value").find("h6").text(valueDropdown);
	  }
  	});
  });
}(jQuery));