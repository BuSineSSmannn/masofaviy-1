$(function(){

    $('.input-cart-number').numeric();
	$('#card-ccv').numeric();

    $('.input-cart-number').on('keyup change',function(){

        let index = $(this).index();
        let value = "" +$(this).val() +"";
        $('.number span:eq('+index+')').text(value);
        if(value.length > 3){
            $(this).next().focus();
        }
        if(value.length < 1){
            $(this).prev().focus();
        }
        if(value.length > 3 && index == 4){
            $('#card-holder').focus();
        }

    });


    $('#card-holder').on('keyup change',function(){
        let val = $(this).val();
        let golova = $('.class_v_golove'); 
        if(val.length > 12){
            if(golova.text().length){
               
            }else{
                golova.append( `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                Больше 12 не возможно!
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>` );
            }
        }else{
            golova.text('');
            $('.card-holder-text').text(val);
           
        }
       

    });

    $('#card-expiration-month').change(function() {
		$('.month').text($(this).val()+'/');
    });
    $('#card-expiration-year').change(function() {
		$('.year').text($(this).val());
    });
    
    $('#card-ccv').on('focus',function(){
        $('.credit-card-box').addClass('hover');
    }).on('blur',function(){
        $('.credit-card-box').removeClass('hover');
    }).on('keyup change',function(){
        $('.ccv-text').text($(this).val());
    });
});