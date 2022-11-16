CSS Grid Layout - CSS Grid Layout excels at dividing a page into major regions or defining the relationship 
                  in terms of size, position, and layer, between parts of a control built from 
				  HTML primitives.
				  
				  The CSS Grid Layout has been used in "Songs" page of the website for the Audio and Video
				  for the sections "StarBoy" and "Take My Breath Away".(File - _av.scss)

FlexBox - Flexbox is a one-dimensional layout method for arranging items in rows or columns. 
          Items flex (expand) to fill additional space or shrink to fit into smaller spaces.
		  
		  The FlexBox has been used in "Songs" page of the website for the Audio and Video
		  for the sections "Blinding Lights" and "Moth To A Flame".(File - _av.scss)

Variables -  Variables are a way to store information that you can re-use later.
        
             This has been used for different colors.(File - _config.scss)

Custom Properties - Custom properties are entities defined by CSS authors that contain specific 
                    values to be reused throughout a document.
					
					This is used in a class in the "Songs" page for "center".(File - _songs.scss)

Nesting - Sass lets you nest CSS selectors in the same way as HTML.

          This is used for the navbar and all the list items under it.(File - style.scss)

Interpolation - Interpolation is basically an insertion. Interpolation allows us to interpolate 
                sass expressions into a simple SASS or CSS code.
				
				This is used for 'height' and 'width' which were repeated several times.(File - _songs.scss)

Placeholder Selectors - Placeholder is a special kind of selector. It is used when you are 
                        writing your own SASS library. Its work is very similar to mixin without arguments.
                        Placeholder selector starts with a % sign.
						
						This is used for width and margin-left(@wmj) with the same values which had been used
						in more than one class.(file - style.css)

Mixins - A mixin is a interface in which some or all of its methods and/or properties are 
         unimplemented, requiring that another class or interface provide the missing implementations.
		 
		 This is used to set background and text color.This has been added to a class in style.css using 
		 @include(File - _config.scss)

Functions - Functions allow you to define complex operations on SassScript values that you can 
            re-use throughout your stylesheet.
			
			This is used to set text color based on background.(File - _config.scss)