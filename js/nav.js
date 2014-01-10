// Toggle Nav JS

	var navTop = document.querySelector('.nav-top');
	
	document.querySelector('.nav-btn').addEventListener('click', function(e){
		e.preventDefault(); 
	
	
		if (navTop.getAttribute('data-state') == 'expanded'){
			
			navTop.setAttribute('data-state', 'collapsed');
		
		}else{
		
			navTop.setAttribute('data-state', 'expanded');
		
		}
	});
	
	$(document).ready(function(){
		$('.sched-link').click(function(){
			$('.schedule').slideUp();
			$(this).next().slideDown();
			
			return false;
		});
	});
	
	$(document).ready(function(){
		$('.price-link').click(function(){
			$('.price').slideUp();
			$(this).next().slideDown();
			
			return false;
		});
	});