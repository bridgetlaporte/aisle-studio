## Aisle Studio - final project for GIT 417 

## Project

Repository for the GIT 417 final project. The project is a website for a fictional wedding planning company.

## AI DISCLOSURE

I used generative AI as part of this project. I have listed the tool, the parts of the project affected, how I used it, and how I tested and revised the work myself.

### Generative AI Tool

ChatGPT

### What I Used AI For
- I used ChatGPT to help review the project requirements and rubric for details, organize my project schedule for daily workload plans, and debugging. 
- I used it to help me debug parts of my code, especially for the lucky draw game and the contact form validation to understand errors and bugs. Using my textbook sections as the intiial guide, chatGPT was able to quickly discover the issues causing the bugs.
- It also suggested small changes to my existing html and css code that better supported the js or styling issues, topical problems.  

### Parts of the Project Affected
- So far, AI has influenced my project schedule planning, workflow organization and generation of checklist for completion, and the interpretation of the assignment requirements. 
- The main parts of the assignment affected were the 
- The sections, content, colors, and font of the page were designed in figma and written by me. AI was used to debugged and review code for fixes.

### Amount of Final Code Influenced by AI
- Chat influenced a limited amount of the code but made meaningful changes. Primarily for the bugs in the lucky draw, both for layout early on and the display errors as I worked on the js. It also helped to address areas of change to existing html and css to simplify js code development. 
- The html, css, and js were of my own development, any code offered by AI was compared to class code along, textbook materials,lectures, and labs.  

### How I Tested and Verified the Work
- I tested the site in the chrome browser using the dev tools, manually tested each interactive feature and button for the game, switch, and form. W3 was used to validate the HTML and CSS. 
- Each feature was tested separately in chrome and checked for errors. 

### Changes and Revisions I Made
- After receiving suggested solutions from ChatGPT, I reviewed the code against my own, the course materials, and the rubric before adding the changes to my code. 
- I also made sure I understood the code from the class materials as well as suggestions from AI as I coded the project to make sure I understood the importance of each part of the js, explaining how I understand its importance and function in the code. 




## DEVELOPMENT LOG

### Day 1

- Implemented file setup, github, organized materials based on previously created figma wireframe/mockup.
- Created initial HTML code for the page. 
- Gathered page materials and adjusted wireframe to match assignment requirements. 

### Day 2
- Organized images folder and renamed files for page section clarity.
- Reviewed the materials for assignment clarity and adjusted html content to feel more like a real page. 
- Added services switch content to html 
- Added images to page 
- Added the from markup to the html, will be adjusted later for effectiveness. 
- Validated HTML
- Created initial structure for css and added reset 

### Day 3
- added css styles to the header navigation
- Added css styles to the home section with supporting html markup 
- Added css styles to the about section with supporting html markup
- Added css styles to the services section with html markup

### Day 4
- Started JS file for services switch
- continued css for services section 
- Added transition for hovering buttons
- Added css and updated html for the number game 'luck section' 
- Added css and html for contact section and form
- Added css and adjusted html markup for the footer 
- Completed light mode css - now onto dark mode 
- Added to css colors in root and adjusted page colors
- Added js light and dark mode 
- Validated and fixed errors 
- Refined spacing, typography, images, buttons, hover states, and the footer
- Tested the site at 1280px and checked the browser console for errors
- Added the lucky draw game to the js - adjusted the html and css accordingly 
- Added the css and html style and setup for the contact form 
- Added the js rules for validation to the form 
- Tested everything on the page with inspector open in chrome 
- Adjusted any issues in the code causing form errors
- Validated the final HTML and CSS and completed browser testing in chrome
NOTE -- I developed and tested the js features incrementally during this work session across multiple hours, I had thought I commit the changes with the description on github that said "added js for lucky draw game section" but when I commit the contact form, it was a submission for both sections. I intended to commit the js for these sections separately. However, I did not separate the completed/committed code afterward and am documenting the missed commit here. 


## Debugging Log

### Debugging Problem 1: Lucky Draw Layout
- The Lucky Draw heading, description, and form were appearing wrong despite my column setup seeming correct.

### What I tried
- I first adjusted the CSS grid layout and spacing, but the page continued to display incorrectly. 

### What fixed it
- I inspected the HTML with a W3 check and found that the lucky-content div was closed immediately after it opened and there for not processing. This left the heading and paragraphs outside of the wrapper. I deleted the extra closing div.

### What I learned  
- Sometimes a layout that appears to be a CSS problem can be caused by the HTML, it is worth checking both before playing with the css.




### Debugging Problem 2: CSS Reset Validation Errors
- When validating CSS, I got an error for the CSS reset. At first, I thought there might be a problem with one of the reset rules. I was not sure how to fix it because it was a set reset that I didnt know if I could change.

### What I tried
- I checked reset section and compared it with the rest of my stylesheet to see if there was a connected issue that was causing the validation problem. 

### What fixed it
- I found that the issue was coming from the comments for the CSS reset where I give credit to the creator. This was an error of spelling not the code itself, it could not detect what word the last name was supposed to be. This was a spelling error rather than the actual styles code issue. 

### WhaT I learned  
- I learned validation errors can sometimes point to an area of the stylesheet without the CSS rule itself being the problem. 





### Debugging Problem 3: Lucky Draw Display Errors
- While reviewing the Lucky Draw section, the result area would show before the user had actually submit the guess. 

### What I tried
- I checked the js first because it was supposed to hide the results while validating the guess. It was already adding the hidden class before validation and removing it after a valid game, so I compared it with the html.

### What fixed it
- I found that the results container did not have the hidden class when the page loaded. I then added hidden to the gameOutput element in the html file so the results start as hidden and are only display after a valid guess. 

### What I learned  
- I learned that js that hides and shows also needs the html code to begin in the correct state for it to work. 

### Did I use AI for this problem? 
- I used Chat GPT to figure out why the output was visible before the game started. I checked the HTML and js myself and could not identify the issue. I asked chat to explain what was causing it, then reviewed its answer and made the change to the starting html class which fixed the problem. 
