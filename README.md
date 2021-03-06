﻿<!-- # Ramen Analytics

## Project Description

Implement a JSON REST-style API that processes and exposes data about
delicious cup ramen.

## Requirements

* Create a [Github](https://github.com/) account if you don’t have
  one. Fork the [Ramen Analytics](https://github.com/SumAll/ramen-analytics)
  repo and share your fork with `mhova`. Please also add `mhova` as an
  admin so he can add more team members as reviewers as necessary.

* Tools are up to you. Use whatever language/framework you’re most
  familiar with.

* Ingest the accompanying [ramen.csv](ramen.csv) file.

* Expose four REST-style `GET` routes returning the following data:

   * All people, the total number of ramen cups they’ve each consumed,
     and their favorite kind(s) of ramen.

   * All ramen cup consumptions.

   * All streaks of days when more and more ramen cups were eaten than
     the day before (you can ignore days with no consumption).
     e.g. People ate 2 cups on 03/02, 3 cups on 03/05 and 6 cups on
     03/06. That’s a streak.

   * For each month, which day of the month saw the most cups
     consumed.

* The actual schema of the returned JSON doesn’t really matter as long
  as it’s something you believe would be comfortably usable by a REST
  client.

* There are no requirements around persistence. Feel free to save this
  data in some in-memory data structure, in an in-memory database, in
  a real database, or just re-read the file for each request!

* Write a couple unit test cases for the logic in the last two
  routes. Don’t bother with integration tests unless you really feel
  like it.

* Please leave comments in places where you weren’t quite sure if you
  were solving the problem right or well to let us know that you
  thought about it and made a conscious decision.

* Please make sure that the application will actually run on someone
  else’s machine without complicated setup steps.

* We will be reviewing your solution commit-by-commit so that we can
  follow along with your thought process. Please make frequent
  cohesive commits so we can see what your work progression looks like
  vs. giant single blob. -->

# Ramen-Analytics

## Projet Description

JSON REST-style API that processes and exposes data about
delicious cup ramen.

## To get the project started

```
git clone https://github.com/NoorulainKhaliq/ramen-analytics.git
npm install
npm start
http://localhost:3000
```

## To access backend endpoints

```
Route 1: http://localhost:3000/api/customers
Route 2: http://localhost:3000/api/sales/by-type
Route 3: http://localhost:3000/api/sales/by-day/most-active
Route 4: http://localhost:3000/api/sales/streaks
```

## To access frontend

```
Home view: http://localhost:3000
Route 1: http://localhost:3000/customers
Route 2: http://localhost:3000/sales/by-type
Route 3: http://localhost:3000/ramen/seafood
```

## To run test

```
npm run test
```
