Welcome to Diego Frontend automation using Playwright.

To Set up your VSCode, please execute on terminal:
1-npm install
2-npm init playwright@latest
3-Navigate to Extensions view, search for "Cucumbe" and install the extension named "Cucumber (Gherkin) Full Support" (often the top result, by Alexander Krechik).

To execute all tests, please run
4-npm run test
or
5-npm cucumber.js featuresTests/"name of each scenario".feature

//Have fun\\

The idea of this project is to execute all 7 scenarios below following the BDD Methodology

Scenario 1 - Setting US address
Step 1-Open the Firefox browser
2-Navigate to 'Amazon URL' saved on environments.js file
3-Validade if a pop up with the title "Visiting from Canada?" appears
4-If yes, click on the Stay button on Amazon.com
5-If no, validate if the button Change address displays
6-click on change address button
7-click on or enter a US zip code search field
8-Insert the postal code of 20212
9-click on Apply button
10-Validate if the button Continue displays
11-click on Continue button
12-click on the field Search on amazon on the center top of the page

Scenario 2 - Adding Ring Doorbell
Total steps 13-Click on Search on amazon field
14-Inset the name Ring doorbell pro 2
15-Click on Search button
16-Validate if the field Video Doorbell Pro 2 result displays
17-click on Video Doorbell Pro 2 result
18-Validate if the button Add to Cart displays
19-click on Add to Cart button
20-Validate if a pop up Enhance your purchase displays
21-If yes, click on No thanks button, If no proceed to the next step
22-Validate if the text Added to cart displays

Scenario 3 - Adding Ring Chimes
Total steps 23-Click on Search on amazon field
24-Inset the name Ring chime Pro
25-Click on Search button
26-Validate if the field Ring chime pro result displays
27-click on Ring Chime Pro result
28-Validate if the list box quantity displays
29-click on quantity and selects the option 2
30-Validate if the button Add to Cart displays
31-click on Add to Cart button
32-Validate if a pop up Enhance your purchase displays
33-If yes, click on No thanks button, If no proceed to the next step 
34-Validate if the text Added to cart displays

Scenario 4 - Checking both items in the Cart
Total steps 35-Validate if the button Go to Cart displays
36-Click on Go to Cart button
37-Validate if the text Shopping Cart displays
38-Validate if the button Save for later displays
39-Validate if the text Subtotal displays

Scenario 5 - Searching Ring subscriptions plans
Total steps 40-Navigate to 'Ring URL' saved on environments.js file
41-Validate if the text Compare Plans displays
42-Validate if the text Basic displays
43-Get the value of the /yr price that it's listed for the Basic plan and Save it in a First variable named 'Ring basic yearly price'

Scenario 6 - Searching Blink subscriptions plans
Total steps 44-Navigate to 'Blink URL'
45-Validate if the text Plan: Blink Basic displays
46-Validate if the text Yearly displays
47-Get the value of the /year price that it's listed for the Blink Basic plan and Save it in a Second variable named 'Blink basic yearly price'

Scenario 7 - Comparing Ring vs Blink subscriptions from both pages
Total steps 48-Create a method that print on the console what is the value that was saved inside the First variable from Scenario 5 and what is the value that was saved inside the Second variable from Scenario 6

49-Create a method that compares if the value saved inside the First variable from Scenario 5 is equal to the value saved inside the Second variable from Scenario 6

50-IF both values are different, print the message on console "Subscription plans of Ring vs Blink are different"

51-IF both values are the same, print the message on console "Subscription plans of Ring vs Blink are equal"