/* Install SASS on our machine steps by steps

-- wih npm 
command: npm i -g sass
structure: sass source_scss_file destination_css_file(where want to put converted css files)
command: sass sass/style.scss css/style.css
command: sass sass/style.scss css/style.css --watch (here --watch run this command as watch mode)
=> now this sass file will be automatically generated into the destination directory as .css file
=> now include this generated css into html file


------------ with extension (recommended way). vendor prefix will be automatically generated for browsers compatibility like -ms- or -webkit-

install extension: live sass compiler
configure extension: 
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/css",
      "savePathReplacementPairs": null
    }
  ],
  "liveSassCompile.settings.generateMap": false or true,
  set true to generate source map file which will helps in debugging
*/

/*
=> SASS is a syntactic awesome stylesheet
=> sass also css pre-processor
=> it gives us flovor of programming languages like variables, loop, function, array etc
=> why sass variables as we have custom css variables? custom css variables do not support all browsers. whether sass is more powerfull with browser support.

## some powerfull features
------- variables
$myColor: red;

div{
    background-color: $myColor;
}

------ nesting
nav{
    h1{
        color: $myColor;
        font-size: 40px;
    }
    p{
        font-size: 16px;
        font-weight: bold;
    }
    &:{
        background-color: green;
    }
}

-------- nested properties (common prefix write onces)
body{
    font:{
        family: "Helvetica Neue",
        size: 16px;
        style: italic;
        weight: bold;
    }
    text:{
        align: center;
        transform: lowercase;
        overflow: hidden;
    }
}

---------- @import and partials (DRY = Don't repeat yoursefl)
Note: @import is deprecated: @use and @forward is recommended
@forward: we can have access to all css code
@use : we can use only those properties that we need actually. need to use like 
@use "index"; or we can customize name @use "index" as util; now util.$primary-color;

div{
    background-color: index.$primary-color;
}

_variables.scss file. use underscore to avoid compiled this file into css. as we have use this into .scss file.
$font-size: 12px;
$font-weight: normal;

anotherFile.scss
@import "variables";  although we have written _variables.css, we can import with "variables".no need underscore here.
@import "colors";

by importing variables.scss file, we can use all the variables

body{
    font-size: $font-size;
    color: $primary;
}


---------- mixin (help us to write resuable code). mainly it's one kind of function
define mixin
@mixin important-text{
    color: red;
    font-size: 20px;
    text-align: center;
}

use mixin with @include 
p{
    @include important-text;
}

also we can import mixin inside a mixin
@mixin tag-style{
    @include important-text;
    color: green;
    border: 1px solid blue;
}

mixin like function
@mixin border($color, $size){
    border: $size solid $color;
}

passing parameter to mixin
div{
    @include border(red, 1px);
}

Note: we can set default value to mixin
@mixin border($color: blue, $size:1px){
    border: $size solid $color;
}

write if else inside a function or mixin
@mixin theme-switcher($theme){
    @if $theme == "light"{
        background-color: gray;
    }@else{
        background-color: black;
    }
}


----------- loop interpolation
$sizes: 32px, 48px, 72px;

@each $size in $sizes{
    .icon-#{$size}{
        font-size: $size;
    }
}

=> return 
.icon-32px{
    font-size: 32px;
}
.icon-48px{
    font-size: 48px;
}
.icon-72px{
    font-size: 72px;
}

----------- @extend feature. we can extend any css code
.button-basic{
    border: none;
    padding: 15px 30px;
    text-align: center;
    font-size: 12px;
    cursor: pointer;
}

.button-report{
    @extend .button-basic;
    background-color: red;
}

Note: @mixin and @extend give us similar job. but @extend more powerful..button-report class add is enough inside element. no need to write .button-basic .button-report
*/

/* Built-in function 
$primary: red;

.box{
    background: lighten($primary, 25%);
    color: darken($primary, 15%);
}

there are many built-in functions:
string, numeric, list, map, selector, introspection, color

*/
