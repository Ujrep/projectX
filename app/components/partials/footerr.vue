<style lang="scss">

  $primary: #38b48d;
  $secondary: #1a2940;

  @mixin fontView {
    font-family: 'Catamaran', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
  }

  .Footer {
    width: 100%;
    height: 70px;
    background-color: $secondary;
  }

  .page-scroll {
    & a {
      color: #fff;
      @include fontView;
    }
  }
</style>

<template>
  <div class="Footer">
    <div class="container">
        <div class="logo"></div>
        <div class="page-scroll pull-right">
          <a href="#">Back to Top</a>
        </div>
  </div>
</div>
</template>

<script>
  $(function() {
     $('.page-scroll a').bind('click', function(event) {
         var $anchor = $(this);
         $('html, body').stop().animate({
             scrollTop: $($anchor.attr('href')).offset().top
         }, 1000, 'easeInOutExpo');
         event.preventDefault();
     });
   });
</script>
