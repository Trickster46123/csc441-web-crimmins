
## Week 8, Friday

I tested my webpage using Chrome's mobile device view at an iPhone screen size. The page fits properly, and I did not notice any horizontal scrolling.

I used flex-wrap: wrap in my header so the image and text can move onto another line on smaller screens. This helps prevent the header from becoming too wide and keeps the layout readable on a phone.

## Week 9, Wednesday

My three pages are Home, Projects, and Skills. I chose Home to introduce myself, Projects to show some of the work I have done, and Skills to show what I have learned in programming and cybersecurity.

If each page had its own CSS file, I would have to make the same changes to each file separately. Using one CSS file makes it easier to update all three pages and keep the design consistent.

One thing I still don't know how to do is add interactive features using JavaScript. I would like to learn how to make my website more interactive in the future.

## Week 9, Friday

I used 40rem as my breakpoint because it gives the navigation and cards enough room to display next to each other on wider screens. On smaller screens, they stack vertically so the page is easier to read. I also added another breakpoint at 64rem to make better use of space on larger screens.

One issue I worked on was the navigation not adjusting properly for smaller screens. I used flex-direction: column so the links would stack vertically, and the media query changes them back into a row on wider screens. Another issue was the footer layout, which needed to adjust to smaller screens. I changed it so the footer stacks vertically on phones instead of keeping everything in one row.

The difference between justify-content and align-items is how they position items in a Flexbox layout. Justify-content controls how items are spaced along the main direction, while align-items controls how they line up in the other direction. If the flex direction changes, the directions they control also change.

I used the narrow layout as the default because it is easier to start with everything stacked vertically. The media query changes the layout when there is enough room to display the navigation and cards next to each other. This keeps the website readable on both phones and computers.

## AI use

I used ChatGPT to help understand Flexbox and media queries and to troubleshoot some of the more specific issues I was having with my website. One problem involved GitHub, where some of my files and changes were missing from the main branch after merging my Wednesday work. ChatGPT helped me figure out how to recover the missing files and restore my navigation and CSS. I also used it to review my HTML and CSS and help resolve problems as they came up. I made the changes in VS Code and tested the website myself.