# Project Catwalk - Team Katara

Our team was tasking with creating a modern e-commerce website that communicated with the client's existing legacy API. Our team needed to come up with a solution that would allow us to access the data from the legacy API without exposing any of the routes publicly to protect our client's data. To tackle these challenges our team built an express server that communicated with the legacy API. In addition each member of the team was in charge of developing and integrated one of the widgets the client requested for this new e-commerce website.

## [Getting Started](https://github.com/teamkatara/Project-Catwalk/blob/main/getting-started.md)

## [Production Optimization](https://github.com/teamkatara/Project-Catwalk/blob/main/optimization.md)

## Contributors

### Kevin Gao - Product Overview Widget [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/kevinzhugao/)](https://www.linkedin.com/in/kevinzhugao/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/kevinzhugao)](https://github.com/kevinzhugao)

Provides detailed information about the current product. The Product Overview widget allows the user to explore the different styles available, see the prices of a style, and view what a particular style looks like. The Product Overview displays the current product above the fold creating a strong focal point and intuitive flow for user navigation. Navigating through the styles will show additional information, images, sizes and product availability.

### Caleb Kim - Related Products Widget [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/caleb-kim0510/)](https://www.linkedin.com/in/caleb-kim0510/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/cariboukim)](https://github.com/cariboukim)

Related product widgets consist of two parts. One is the Related products which are related to the item displayed by overview component and it changes accordingly. Having carousel of cards let users navigate between the card. And, upon clicking on a star button a modal would pop up which compares the feature between the related card and the prodcut item. Once a card clicked, it would change the overview item as well. The second part is the outfit section, which is unique to each user. It gives the user the ability to save the current product item and navigating through them.

### Ryan Rhoads - Questions & Answers Widget [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/ryangrantrhoads/)](https://www.linkedin.com/in/ryangrantrhoads/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/rgrhoads)](https://github.com/rgrhoads)

### Justin Beere - Ratings & Reviews Widget [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/justin-beere/)](https://www.linkedin.com/in/justin-beere/) [![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/LiberNovus)](https://github.com/LiberNovus)

The ratings and reviews widget displays the user with information about the product from others who have purchased the product. In this widget, the user has the option to sort through reviews based on relevance, newest and helpfulness. These sort options were implemented using the logic the client requested. In addition, a user can filter reviews by star rating and these star filters are additive, allowing the user to compare different reviews of specific ratings.\

This widget also included a breakdown section where additional information about a product's characteristics were displayed. Some examples include length, fit, quality and comfort. Users can also add reviews for a product and one of the challenges was ensuring the form only showed the correct product's characteristics and not all potential characteristics for the entire product catalog. Utilizing React Hooks ( useEffect and useState ) I was able to dynamically change the form whenever a new product was rendered in the application.

### Technologies Used

- Setup and Configuration ![git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

- Front End Development ![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

- Back End Development ![node](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)

- Testing Environment ![jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Enzyme](https://img.shields.io/badge/-Enzyme-20232A?style=for-the-badge&logo=testingLibrary&logoColor=red)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

- Team Collaboration ![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Zoom](https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
