<!--Pseudo-classes-->
    - a keyword attached to selector which specifies a special state of the element
    - e.g. hover, focused (think of focus as selected but not yet executed), active, etc.
    
<!-- Transform -->
    - let you move (translate), rotate, skew, change size(scale) elements
    - transform-origin lets you transform based on the origin position. (0,0) returns to its origin

<!-- Vendor prefixes  -->
    -webkit
    -o
    -ms
    -moz
    -use autoprefixer to avoid the pain :(
    
<!-- Fancy CSS animation (https://codepen.io/anon/pen/GOKQZO?editors=1100) -->
        <!--when anything is hovered, change opacity of img. the grayscale puts focus on the icon-->
        div.item:hover img {
          opacity: .3;
          filter: grayscale(100%);
        }
        
            <!-- give all item a transition of easing in/out -->
        div.item * {
          transition: all .35s ease-in-out
        }
        
            <!-- relocate the icon to center with translate and hide it with scale -->
            <!-- transition here plays when hover is out -->
        div.item i {
          transform: translate(-50%, -50%) scale(0);
          transition: transform 1s 0ms cubic-bezier(.6,-.28,.735,.045);
        }
        
            <!-- when anything is hovered, show icon with scale -->
            <!-- transition give 300ms for transform and 100ms is delay -->
            <!-- there's psychology behind 100ms delay.. -->
        div.item:hover i{
          transform: translate(-50%, -50%) scale(1);
          transition: transform 300ms 100ms cubic-bezier(.175,.885,.32,1.275);
        }
