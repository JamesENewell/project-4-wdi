![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Project-4-wdi - Four Horsemen Development Platform
For our final project, we were given a week to build a restful app using React.js, HTML, JS, CSS and any Api's (of our choosing)

##### Visit our [Application](https://four-horsemen-platform.herokuapp.com) here

###### Overview of the Four Horsemen App
When I was first pitched the idea for the site I was instantly taken under its spell. The premise of the website is to match people who want websites building for them and the developer teams themselves. Think Etsy meets Web Development.

###### Homepage
This is our Homepage, it features a moving background image of a dark forest; the navbar is at the top and features all the relevant links to navigate our website.

<img src="https://imgur.com/WGfYaqU.jpg" width="700">

###### All developers

The All developers page is the central hub for any user wishing to find a company to build their website for them. You can search for a particular team or just sort by Alphabetic order.

<img src="https://imgur.com/Gt5xGdN.jpg" width="700">

###### Developers Show Page

After viewing all the different companies you can click on one and view everything you could want to know about them. It starts off simple with the Company Name and Size then a description followed by skills and contact information.
There's even a handy google map to show you where their office is situated. On the lower left hand side are examples of their work which will help you decide whether you want them to work for you or not.

###### Contact a Developer

On the same profile page is a contact this developer button which when clicked takes you to a new project page. You will then be greeted by a form to fill in and send off.

<img src="https://imgur.com/WSt1eLT.jpg" width="700">

This is the clever bit as when you click submit it will send an email to the email address connected to the developer themselves, and you will get a flash message stating 'Your project is on its way to the developer!'

```
function submitRoute() {
  Emailer.sendMail({
    to: 'codeshoptest@gmail.com',
    subject: 'New Project',
    text: 'Hey, have a look at this awesome project we have for you, the details are as follows......'
  });
}
```

# Final Thoughts

<b>James (Project Manager)</b> -

- I found it interesting working in a pair, other then being an important learning experience it also gave me and Josh the chance to bond and I feel we came away having learnt so much from each other.

- I found the most frustrating thing during this project to be getting the email to work initially. It took much longer then I thought it would.

- I think as project manager I underestimated how long things would take to implement, and and that at times we should of prioritised things in a different way.

<b>Josh</b> -

- I enjoyed working as a team, my initial concern was my ability compared to James. However this was alleviated from day one, when I realised the project was the goal and no one was there to put anyone else down.

- A challenge for me during the Project was tying the User Profile to the other feature in the app. I came away slightly deflated as the page took ages to work, but I know that it's just about exhausting every option when solving a problem

- I enjoyed using Trello to manage our time and I think we worked well as a team, there were no arguments and we worked through everything together, with daily group stand-ups and constant communication, especially when things went wrong.
