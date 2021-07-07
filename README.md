# Recipebook README #

A productivity tool that allows users to keep track of their ingredients and provide recipe suggestions

## MVP ##

- A user can add an ingredient to their Recipebook
- A user can view all of their ingredients
- A user can delete an ingredient

## Table of Contents

1. [Requirements](#requirements)
1. [Installation](#installation)
1. [Development](#development)
1. [Technology](#technology)

## Requirements

- Node 6.13.0
- Mongo
- Webpack

## Installation
From within the root directory:

```sh
npm install
npm run initdb
```

## Development

From within the root directory, run the following commands in separate terminal windows:

```sh
npm run react-dev
npm run server-dev
```

## Technology
### Front-End
- React
- CSS
### Back-End
- Express
- MongoDB


## Future Features ##
- organize ingredients based on type
- allow sorting or filtering
- provide recipe recommendations based on ingredients
- alert a user when they need groceries

## Schema ##
![Schema](/public/assets/schema.png)


## Web Sequence Diagram ##
![Web Sequence Diagram](/public/assets/wbsd.png)