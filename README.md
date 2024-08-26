
# ReachInbox Assignment

The aim of this Assignment is to design Frontend part with feature-rich User Interfaces while integrating third-party APIs.

# Deployed Link
[text](https://reachinbox-assignment-two.vercel.app/)

## Technologies

 - ReactJs
 - Javascript
 - CSS

## API Reference

#### Get all items

```http
  GET /onebox/list
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Google Auth Token |

#### Get item

```http
  GET /onebox/${threadId}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Google Auth Token |

#### Post item 
```http
POST/reply/${threadId}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Google Auth Token |

#### Delete item

```http
DELETE/reply/${threadId}
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Google Auth Token |




## Installation
-Clone this repository

-Navigate to the folder: cd ReachInbox

-Install necessary pacakges: npm install 

-start the server: npm run start


## Authors

- [@octokatherine](https://www.github.com/octokatherine)


## Features

- Light/dark mode toggle
- Google Authentication


