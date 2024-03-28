/* there are many way we can use tailwindcss
1. install from CDN
2. PostCSS
3. tailwind CLI (must be installed nodejs first), to check in cmd,command  node --version

***************** Here we will use tailwind CLI ************
=> npm init -y node project initialize
=> npm i -D tailwindcss
=> tailwind css intelligence extension (brad cornes)
=> npx tailwindcss init (you can see tailwind.config.js in your project)
=> make src and output folder in your project
=> tailwindcss.css in your src folder. we can use another name.css as we wish
write into this file:
@tailwind base;
@tailwind components;
@tailwind utilities;
=> in your root of project make .vscode/settings.json file
configure with: 
{
    "css.validate": false, (off css validation to overcome css validation error as it is tailwind)
    "tailwindCSS.emmetCompletions": true, (for extension)
}

=> make build script to convert tailwind to actual css in package.json file
"script": {
    "build": "tailwindcss -i ./src/tailwind.css -o ./ouput/tailwind.css -w", 
}
here,
-i ./src/tailwind.css means here we included tailwind directives
-o ./output/tailwind.css means where tailwind will convert to css.
-w means watch mode. if any modifications are found in tailwind.css it restart automatically
=> include ./output/tailwind.css into your html file in header section
=> npm run build
that's all were setup process for best practices

*/

/* ************  dark mode ************
=> in tailwind.config.js add "darkMode": "media" for system mode based dark mode. "class" for custom like user toggle. it require add dark class into <html> element.

*** ** custom class using tailwind classes ********
=> inside tailwind.css where @tailwind base; @tailwind components; and @tailwind utilities; remain
ex: now use btn class in your project
.btn {
  @apply px-4 py-1 border rounded-full  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2;
}

****** style specificity ****************
Note: styling specificity is important, more specific style has the higher properties. like padding: 10px; is less priority than padding-left: 10px; to check, open out output folder where tailwind is converted to CSS

######### components layer ##########
******** override own class style specificity ****
assume we have a custom tailwind class. we want to override a style that is remain in custom class. but tailwind cann't do this. because tailwind class first generate, then our custom own class. so override doesn't happened here.

=> generation process:
tailwind class > our custom class like button.

=> to overcome or overriding. write our custom class before @tailwind utilities;

to apply p-8 into button,
<button class="btn p-8 btn-purple">Visit now</button>
use below approach
ex:
@tailwind base;
@tailwind components;
.btn {
    @apply px-4 py-1 border rounded-full  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2;
  }

  @tailwind utilities;


or use @layer components
@layer components {
  .btn {
    @apply px-4 py-1 border rounded-full  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2;
  }
}


#########  @layer base ########
Note: tailwind reset browser default style to zero. 
that's why a h1 and p looks same when we use them in our project.
we can override these @tailwind base; style using

tailwind.css:
 @layer base{
    h1{
        @apply text-2xl;
    }
}
we can override these own and tailwind style. both overridalbe.



############  @layer utilities #########
Note: we can write our own CSS code to make own utility class using @layer utilities. both is overridable

ex:   <button class="btn rounded-lg btn-purple">Visit now</button>

tailwind.css:
@layer utilities {
    .text-g-small{
        font-size: 12px;
        color: gray;
    }
}


########### @responsive and @screen #########
make some class for all responsive breakpoints

*/
