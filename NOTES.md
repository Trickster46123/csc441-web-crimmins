
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

## Week 10, Wednesday

HTML is what I use to put content on my website, like text, images, and links. CSS controls how everything looks, including the colors and layout. JavaScript lets me make the website interactive, like having a button that changes the theme.

The defer attribute tells the browser to finish reading the HTML before running the JavaScript. Without it, the script might try to find something that hasn't loaded yet.

Dark mode worked because I already used CSS variables for my colors. Instead of changing every color separately, I could change the variables when the dark class was added.

One problem I had was getting the theme button to work. Some of my HTML had extra closing tags, and I accidentally put the button outside the navigation list. I went back through the HTML and fixed it. The page still loaded even though the code wasn't quite right, which made the problem harder to notice.

One thing I would like to learn is how to make a contact form that checks what someone enters before they submit it.

## Week 10, Friday

The event.preventDefault() stops the form from reloading the page when someone presses Submit. Without it, the page would reload and the information entered could disappear.

I got the Cannot read properties of null error because JavaScript was trying to use an element that wasn't on the page. The if statement fixed this by checking if the element existed before trying to use it.

I added a rule that requires the message to have at least 10 characters because I didn't want people submitting messages that were too short. I also added another check that requires the name to have at least two characters.

When I tested the Contact page at phone width, I noticed that my name was taking up most of the screen and the portrait was using a lot of space above the form. I reduced the heading size and made the portrait smaller for phones. This gave the page more room and made it easier to read.

I think the form would need a server or some other way to receive and process the information before it could actually send messages. Right now, the JavaScript only checks the information and displays a confirmation.

## Week 11, Wednesday

Live site: https://samcrimmins.netlify.app

GitHub is where I store my website files and keep track of the changes I make. Netlify takes those files and publishes the website so other people can access it online.

The live website will not change when I merge into development because Netlify is using the release branch. The changes have to be merged into release before they become public.

The padlock means the website uses HTTPS, which encrypts the connection between the browser and the server. It helps protect information being transferred.

I looked through my repository and did not find anything I would be uncomfortable sharing publicly. My website contains information about my projects, skills, and coursework, but no private passwords or sensitive information.S

## Week 11, Friday

1. What is a honeypot, and why would you use one instead of CAPTCHA?**

A honeypot is a hidden field used to stop bots from submitting spam through a form. Since regular users cannot see the field, they would normally leave it empty, while a bot might fill it out automatically. I think this is useful because it helps prevent spam without making someone complete a CAPTCHA every time they want to send a message.

2. What is a Deploy Preview, and when would it be useful?**

A Deploy Preview is a version of my website that Netlify creates when I make a pull request. It lets me see how my changes will look before they are published to the actual website. I think this is useful because I can check for mistakes and make sure everything works before merging my changes.

3. What two issues did you find while testing your website on your phone, and how did you fix them?**

The first issue I noticed was that clicking Home would take me to the Contact page instead of my homepage. After checking my files, I found out that my index.html had accidentally been replaced with the Contact page. I restored the original file using Git, pushed the changes, and tested it again on my phone. After that, the homepage worked correctly.

The second thing I worked on was the email field on my Contact page. I added inputmode="email" and autocomplete="email" to make it easier for someone using a phone to enter their email address. This also allows the browser to suggest saved email addresses.

4. Describe how your changes traveled from your laptop to the live website.**

I made my changes in VS Code and saved them to my W11_fri_s18 branch. I then committed and pushed everything to GitHub. From there, I created a pull request to merge the changes into development. Once that was done, I merged development into release, which allowed Netlify to automatically publish the updated version of my website.

5. Why can both your Netlify URL and your custom domain work for the same website?**

My Netlify URL is the address that Netlify provides when it hosts my website. A custom domain can also point to that same website through DNS records. This means both addresses can lead to the same site without needing to create or host two different websites.

6. What is one thing you would like to add to your website before the end of the semester?**

One thing I would like to add is more information about the projects I have worked on. I think it would be useful to include screenshots and better descriptions of my programming and cybersecurity projects. This would help people understand what I have built and what I have learned from working on them.

## Week 12, Wednesday, Lab 19

1. 

A database table stores information in rows and columns. Each row represents a record, while the columns contain details about it. For my project, the table stores information about different technology topics, including their titles, descriptions, and categories.

2. 

A table is where the information is actually stored in the database. An API endpoint gives an application a way to request that information without directly accessing the database itself.

3. 

GET is used to request information from a server. When I tested my Supabase endpoint, it returned my five records in JSON format. I also confirmed that the request returned HTTP 200, meaning it worked.

4. 

A publishable key is meant to be used by websites and applications, while a secret key is supposed to stay private. The publishable key works with the database's security rules to control what users can access. Using a secret key in a public website would create a security risk.

5. 

When I used select=*, the API returned all six columns for each record. When I changed it to select=title,category, it only returned the titles and categories. This is useful because an application can request only the information it actually needs.

## Week 12, Friday — Lab 20

1. 

The fetch() function sends a request to my Supabase API to get the information stored in my database. The response.json() function takes the JSON returned by the API and turns it into JavaScript data that my website can use to display the records.

2. 

I used textContent because the information is coming from an outside source rather than being written directly into my HTML. It displays the information as regular text instead of treating it as HTML code, which helps prevent unwanted code from being executed.

3. 

If Supabase returns an empty list, my website displays a message saying "No items yet." instead of showing any cards. This lets someone visiting the page know that there are currently no records to display.

4. 

When the network fails, my website displays a message saying that it could not load the items and tells me to check the Console. Once the connection is working again, I can click the Refresh items button to try loading the records again.

5. 

The cards are created using JavaScript after my website gets the records from Supabase. I tested this by changing a title in my database and clicking Refresh items. The updated title appeared on my website without me having to change any HTML, which shows that the cards are being generated from the API.


## AI use

I used ChatGPT to help understand Flexbox and media queries and to troubleshoot some of the more specific issues I was having with my website. One problem involved GitHub, where some of my files and changes were missing from the main branch after merging my Wednesday work. ChatGPT helped me figure out how to recover the missing files and restore my navigation and CSS. I also used it to review my HTML and CSS and help resolve problems as they came up. I made the changes in VS Code and tested the website myself.

I also used ChatGPT during Week 10 to help me understand how JavaScript interacts with HTML and CSS. I used it to troubleshoot problems with the theme button, missing HTML elements, and the contact form. ChatGPT helped me review my JavaScript, understand the if statements, and work through form validation.

I made the changes in VS Code and tested them myself.
