# **Who owns our neighbourhood?**

![alt text](https://imgur.com/dlagXPw.png)

## **The Challenges** :warning:

- The End user needs a way to report potentially empty buildings in their area so that they can bring them into community ownership before they are bought by commercial buyers.
- The Product owner needs a way to connect with these communities and gather the initial data so that they can run the initial investigations with the communities.

## **The Solution** :bulb:

FAR NEARER website enables users to report about any empty buildings and the community members can access this data with provided credentials.

## **Design Sprint** :art:

![alt text](https://imgur.com/VyiQXWt.png)

#### [Our Prototype](https://www.figma.com/proto/3p0arBhByl0QwtLyjqumke/Far-Nearer?node-id=11%3A0&scaling=min-zoom)

## Installation Guide :wrench:

1. Clone this repo
2. Navigate to the cloned repo

### Project setup

1. Create a `.env` file in the project root folder.
2. Add the following in it **This step is so important!!**

```
AIRTABLE_BASE_ID
AIRTABLE_API_KEY
```

3. To install the dependecies, only for the first time:

```
 npm i && cd client && npm i --only the first time--

```

### Running the project:

1. To run the server, Open your terminal and run:

```

npm run dev

```

2. To run the React Development server, Open another terminal and run:

```

cd client
npm start

```

3. To run the tests:

```

npm test

```

## **User Journey**

The user can visit the web-app to report buildings that are believed to be empty. Also, the user can see which buildings are empty and who owns them with all details for the building. The user can subscribe in the mailing list and recive emails with updates.

## **User Stories**

- As a user, I can visit the website and read about it.
- As a user, I can report buildings that I believe to be empty.
- As a user, I can view information about the project so that I can deal with the displayed data.
- As a user, I can subscribe in the mailing list and recive emails with all updates.

## Challenges Achieved :tada:

- [x] Finding a way for the community to find empty buildings easily :100:
- [x] Gave people oportuinty to report an empty building
- [x] Reduced the time and effort spent on finding empty buildings :fire:
- [x] Made a simple and easy to understand system
- [x] Making a good user experience for our users to use the app
- [x] Developed a strong :muscle: backend and authentication system

## **Technologies** :computer:

- Front-End: **React JS**
- Back-End: **Node JS** & **Express JS**
- Styling: **CSS** & **Ant Design**
- Database: **airtable**

## **Team Members**

- [Ahmed Abdellatif](https://github.com/ahmedisam99) (Team Leader)
- [Fadi Alamassi](https://github.com/FadiAlamassi)
- [Rana Obaid](https://github.com/ranasobeid95)
- [Mai Ubeid](https://github.com/MaiUbeid)
