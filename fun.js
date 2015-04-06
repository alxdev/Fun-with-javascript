//Nice hack to get already elements loaded in the DOM

function moveElementsInDom() {
    $(".search-box").find('.search-form').css('background-color','white');
    //Getting elements that match the first id name with "main_search_button_"
    $("[id^=main_search_button_]").hide();
    $("[id^=id_category_select_]").hide();
    $("#text-autocomplete").css('width','400px');
    $(".region-box").css('margin-left','100px');
    //The magic is here!
    $("#adv_search_elements_header").appendTo("#adv_search_header_target");
}
    
//Adding more elements to a serialized form
function addElementsToSubmit() {
    var data = $('#'+_self.properties.sFromId).serializeArray();
		
    if ($("#text-autocomplete").val()) {
            data.push({name: "filters[id_country]", value: $("#country_hidden").val()});
            data.push({name: "filters[id_region]", value: $("#region_hidden").val()});
            data.push({name: "filters[id_city]", value: $("#city_hidden").val()});
            data.push({name: "textfield-location", value: $("#text-autocomplete").val()});
    }	
}

//A nice code to find elements after an ajax call
function findElementsAjax() {
    if (data.success == 1) {
            _self.properties.errorObj.show_error_block(data.message, 'success');
            $('#'+_self.properties.saveBtn).find('.i-favorite').addClass('g');
            $('#add-fav-label-'+_self.properties.listingId).html('Remove from favorites');
    }else{
            _self.properties.errorObj.show_error_block(data.message, 'success');
            $('#'+_self.properties.saveBtn).find('.i-favorite').removeClass('g');
            $('#add-fav-label-'+_self.properties.listingId).html('Add to favorites');
    }
}

//Submit a form after an ajax execution
function waitForAjax() {
    //.keyup(function(e) {
	
    if ( e.keyCode == 13) { // 13 is enter key
	
	if ($("#country_geo").val()!='') {
		
		if ($("#enable_submit").val() == 1) {		
			setTimeout($("#enable_submit").closest("form").submit(),500);
		}else{
			var check = function(){
			
			if($("#enable_submit").val() == 1){
				$("#enable_submit").closest("form").submit();
			}
			else {
			    setTimeout(check, 1000); // check again in a second
			}
			}
			check();
		}
		 }else{
			$("#enable_submit").val(0);
			$("#country_geo").val('');
			
		 }	
		
	}else{
		$("#enable_submit").val(0);
		$("#country_geo").val('');
		
	}
}
