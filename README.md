# Test Task

This repo is the demo code for a simple Books API based on Serverless Framework and NodeJS + TypeScript.

To play with this code locally, clone this repo and do the following:

### 1. Install global serverless npm module

```shell script
npm install -g serverless
```

### 2. Install local npm modules

Navigate to the app directory, and run

```shell script
npm install
```

### 3. Bring up the DB

```shell script
serverless dynamodb install
```

### 4. Start the offline app

```shell script
serverless offline start
```

or

```shell script
npm run dev
```

The app is now available at `http://localhost:3000/dev`.

The app has few endpoints:

#### GET `/books`

Returns a list of books

```json
[
  {
    "uuid": "9b3c415f-ceaa-49e3-b5af-0e335bfd4635",
    "name": "do things!",
    "releaseDate": 1513817875660,
    "authorName": "Ivan Petrov"
  }
]
```

#### POST `/books` (alias POST `/book/add`)

Store new book.

Accepts an object in this format:

```json
{
  "name": "do things!",
  "releaseDate": 1513817875660,
  "authorName": "Ivan Petrov"
}
```

Returns a status of `201`. With the created object

#### GET `/books/{uuid}` (alias GET `/book/{uuid}`)

Returns a book with given UUID

```json
{
  "uuid": "9b3c415f-ceaa-49e3-b5af-0e335bfd4635",
  "name": "do things!",
  "releaseDate": 1513817875660,
  "authorName": "Ivan Petrov"
}
```

#### PUT `/books/{uuid}` (alias POST `/book/{uuid}/update`)

Update a book with given UUID

Accepts an object in this format:

```json
{
  "name": "do things!",
  "releaseDate": 1513817875660,
  "authorName": "Ivan Petrov"
}
```

#### DELETE `/books/{uuid}` (alias POST `/book/{uuid}/delete`)

Delete a book with given UUID

### 5. Run Tests

To run unit tests, use

```
npm test
```
