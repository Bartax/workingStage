loader();   
function loader(){
    var obj = document.querySelector('.preloader'),
        jumbotron = document.querySelector('.jumbotron');
        obj.classList.add('show');
        jumbotron.classList.remove('show');
        var w = 0,
        t = setInterval(function(){
            w = w + 1;
            obj.textContent = w + '%';
            if(w===100){
                obj.classList.remove('show');
                jumbotron.classList.add('show');
                clearInterval(t);
                appearingSlogan();
            }
        }, 15);  
};    

function appearingSlogan(){    
$.fn.letterDrop = function() {
  var obj = this;
  var drop = {
    arr : obj.text().split( '' ),
    range : {
      min : 1,
      max : 9
    },
    styles : function() {
      var dropDelays = '\n', addCSS;
       for ( i = this.range.min; i <= this.range.max; i++ ) {
         dropDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';  
       }
        addCSS = $( '<style>' + dropDelays + '</style>' );
        $( 'head' ).append( addCSS );
    },
    main : function() {
      var dp = 0;
      obj.text( '' );
      $.each( this.arr, function( index, value ) {
        dp = dp.randomInt( drop.range.min, drop.range.max );
        if ( value === ' ' )
          value = '&nbsp';
          obj.append( '<span class="letterDrop ld' + dp + '">' + value + '</span>' );
      });
    }
  };
  Number.prototype.randomInt = function ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
  };
  // Create styles
  drop.styles();
  // Initiate
  drop.main();
};
    $( '.main-slogan' ).letterDrop();
    $('.slogan-profession').fadeIn(3500); 
    $('.main-button').show(6500);
    $('.about-me').show();
    $('.works').show();
    $('.contact').show();
};

// below smooth scrolling between sections;
$(function(){
    
    var scrollLink = $('.scroll');
    
    scrollLink.click(function(e){
        //e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top   
        }, 1000);
    });
    
    $('.button').click(function(){
        $('body,html').animate({
            scrollTop: 500   
        }, 1000);    
    });
});

//appearing description-text with rotating effect
$(function(){
    
    var description = $('.description'),
        documentEl = $(document),
        photoContainer = $('.photo-container');
    
        documentEl.on('scroll', function(){
            if(documentEl.scrollTop() > 300 && description.hasClass('hidden')){
                description.removeClass('hidden');   
                photoContainer.removeClass('hidden');
            }; 
        }); 
});

//below appearing navbar on scroll
$(function(){
    var scrollTop = 0;
    
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
    
        if (scrollTop >= 100) {
            $('nav').removeClass('main-nav');
            $('nav').addClass('scrolled-nav');
            $('.hamburger-button').css('display', 'inline-block');
        } else if (scrollTop < 100) {
            $('nav').addClass('main-nav');
            $('nav').removeClass('scrolled-nav');
            $('.hamburger-button').css('display', 'none');
            $('.scrolled-nav').animate({
                left: 1400
            }, 100);
        } 
        
    }); 
});


//below animation of appearing navbar
$('.hamburger-button').click(function(){
    $('.scrolled-nav').animate({
        left: 0
    }, 100);   
});

//below button goToTop;
    