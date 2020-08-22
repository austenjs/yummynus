# yummynus <img src="./yummyNUS/static/yummyNUS/images/logo3.png" width="30" height = "25"/>
## Created by Amelia Regina and Austen Jeremy

<p align="center">
     <img src="./Orbital Final Poster(1).jpg" height="600" width="500" />
</p>
     
## Motivation

As a hectic student in NUS, sometimes we don’t have the time and energy to think and come up with an excellent place to have lunch or dinner. Additionally, first-year students are not accustomed to dining outlets located near their faculty or living place (if they stay on-campus).

There are a lot of dining outlets in NUS, and each of them has various types of cuisine. However, there has not been a platform to read or write reviews of them, and recommendations can only be spread by word of mouth. Furthermore, the menus offered by them sometimes only can be seen when we arrive at the restaurant. One menu (such as fried rice or mala) can be available in various restaurants with different tastes and prices. Is there any record tracking the menus and reviews of the restaurant as well as how to get there? Moreover, is there any record that helps first-year students familiarise themselves with the dining outlets in NUS?


## Aim

We aim to build a website that lists all dining outlets in NUS alongside their menus with a feature to search by type of cuisine, location, price, etc. Moreover, we are going to provide a platform to give reviews to the dining outlets, recommendations of affordable or popular outlets, and ways to get to the nearest dining outlet.


## User Stories

1. As a student who is tired after lectures or lecturer/teaching assistant who is exhausted after teaching a module, I want to get a recommendation of food and get an insight on where to buy it, so that I don’t waste too much time to look for a food
2. As a student or staff who is craving for a particular cuisine, I want to know which dining outlet sells it and has the best reviews among other dining outlets, so that I am able to satisfy my craving
3. As a freshman or a visitor to NUS, I want to know what are stalls available in NUS, so that I am not missing any opportunity


## Scope of Project

The website provides a comprehensive list and intuitive interface for users to get the location of an outlet or a recommendation of popular foods.

The map inside the website will be connected with google map API, so it is able to show all the dining outlets located in NUS. 

Features to be completed by the end of June:
- Website
- Allow users to get a list of all dining outlets in NUS with their menus and prices
- Login + sign-up for administrators and members
- Search tool to find an outlet
- Google Map inside the website
- Review section for each dining outlet

Features to be completed by the end of July:
- Sort the dining outlets based on prices,locations, and type of cuisines
- Providing daily recommendations 


## Frontend and Backend
For our UI/UX design, we use pure HTML, CSS and JavaScript. We use the Bootstrap library in our CSS. For our backend, we use Django. Using Django helped us to instantly have a page for the admin site. For our database, we use MySQL.
We made several models on our Django models. There are menu, cuisine, location, review, and foodstall models. Cuisine and location model only have names designated for them in it. The menu model has a cuisine and location model inside of them. The food stall model has properties (class and address) as well as models (menus, location, and reviews). Lastly, the review model has properties (name of the reviewer, comment, and date) as well as models (rating).



## How are we different from similar platforms?

- Zomato    
  Not all NUS’ food stalls are displayed on the website
- Yelp
  NUS stalls are not available.
- Opentable
  NUS stalls are not available.


## Testing
https://drive.google.com/file/d/1tp4LnsntMmS6epy3DAlEDn5bO_tBH9Vq/view?usp=sharing

### - Registration & Login
On our home page, in the navigation bar, there will be a section where we are able to log in. When we press ‘login’ in the navigation bar, we will be redirected to the login page. We need to enter your login credentials (username & password). If the users haven’t made an account, they need to make an account by pressing ‘register’ either at the bottom part of the login page or the bottom part of the home page. There will be some form which asks username, email, password, and password confirmation. 

### - Search Tool
On our home page, in the navigation bar, there will be a section where we are able to search stalls. When we press ‘stalls’ in the navigation bar, we will be redirected to the stalls page. There will be a list of stalls that have been saved in our database. If the user wants to search a name, he can type in the search tool. The search tool will filter the list based on the value typed on it. There are also tick boxes to filter the stalls based on cuisine and location. 

### - Review Section
On each stall page, there will be a dedicated space for reviews and review section. For public users, they need to log in before submitting a review. For member users, there will be a button that leads to a modal form. In the modal, there will be a name, comment, and rating.

## Future Developments

Our website is not fully done yet. There are many more features that may be implemented or upgrade on some feature. They are:
- More stalls listed on our database
- Permission for stall owners to modify menus of their stalls
- Better algorithm for daily recommendation
- The map page shows icons for all food stalls in NUS
- Sort feature for menu prices
- Implementing React to our frontend to increase website’s performance
- Typo-tolerance search bar
- Connect the deployed website with the database

You can check our website at yummynus.herokuapp.com
