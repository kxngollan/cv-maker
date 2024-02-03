# Technologies:

React: A JavaScript library for building user interfaces.
useState Hook: Used for managing state within functional components.
useEffect Hook: used to utilised in this project to manage side effects such as data fetching, subscriptions, or manually changing the DOM

# Description:

This is a Cv builder app that I modelled the format after that of my very own cv/resume. I used useState to handle the change input to display and then use useEffect to pass the changed state from the child to the parent. If a state is empty it'll be left empty.

One of the difficulties I had, was initally at the start with the calling state and I think there is a better way I could have done after looking for at reviews from other developers but it would require a whole restructoring of the code.

# Possible improvements:

I have multiple ways I wanted to improve the project. One, I think it would be nice to be able to export the page from html to a .pdf or .doc. Another improvement I would like to do is allow for different formated types for Cv's, this could also be included in improving the CSS for the app.

One change I could make for my app is also with the code:

const handleSectionUpdate = (event)=>{
setSection({...section, event.target.name: event.target.value})
}

## How to get and run locally

Will run on http://localhost:3000/

# Clone the Repository:

git clone https://github.com/kxngollan/cv-maker.git
cd cv-maker

# Install Dependencies:

npm install

# Run the Application:

npm start
