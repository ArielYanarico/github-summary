# github-summary

Web app for view all users and its repositories in git hub.

## Getting Started

These instructions are for run this project.

### Prerequisites

Before to start the frontend we need to make sure that we have internet connection

### Start Developing

##### Frontend

- `cd frontend`
- `npm install`
- `npm start`

## Contributors

Current contributors:

 * [Ariel Yanarico](https://github.com/ArielYanarico)

## License

This project is licensed under the MIT License

The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

# TODOs:
- [x] making this readme more explainable --DONE
- [x] adding a dummy card component (harcoded data until rest layer is implemented) --DONE
- [x] adding redux for shared states (integrate with dummy cards) --NOT NEEDED Since there are no shared states
- [x] adding redux-thunk for rest layer (integrate with cards) --NOT NEEDED Since redux is not used
- [x] adding an avatar component --NOT NEEDED
- [x] adding react-router-dom for navigation --DONE
- [x] adding more TODOs in this readme --DONE
- [x] adding Error component --DONE
- [x] adding underscoreJs for avoiding to ask if collections are 'undefined' --DONE
- [x] adding a grid for repositories --DONE
- [x] making repository grid paginated --DONE
- [x] displaying pagination for repositories in url (Note pages are diplayed with hash [#]. If there are no pagination in url, page 1 is displyed) --DONE

## Comments

Getting all issues for a repository is missing since Github does no support this as you can view in the link below, anyway you can get all issues using "search" endpoint, it should be done for every repository and github api only allows 60 request/hour without using a token for authentication

* https://github.com/Digipalvelutehdas/github-viewer/issues/7
