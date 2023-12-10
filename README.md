## Documentation

State management => react-query because it's easy to set up. It lets you manage data with a caching system. For large applications with large volumes of data, I would suggest the use of Redux.
Forms => react-hooks-form because it's powerful, it simplifies form management and the documentation is well done and regularly updated.
Style => tailwind + DaisyUI because I use tailwind in my actual job so it's easy for me and I want to test DaisyUI which offers components and color themes.

To start the server on port 3005 run `yarn start-server` or `npm start-server`
To start the front on port 3000 run `yarn dev` or `npm dev`
Before push: `yarn prettier` or `npm prettier`

Time spent: 2 days because I won't know DaisyUI and test several things with it

As we want to reach our users anywhere, we need to make sure the app is performing well. What can you do to make it really fast ?

1 - Optimization of code

- Don't keep unused library
- Use Lazy loading component
- Use SSR to generate HTML code server side
  2 - Limit API call
  3 - Use CDN and cache navigator
  4 - Use external utils (Twicpics to optimize images for example)

Our goal is to support everybody in the country, including people with disabilities. As a good citizen and a good developer, can you make sure the app is accessible for everyone ?
not everywhere

We all love to relax after a hard day’s work. It would be a shame if we didn’t feel confident enough about the upcoming automatic deployment. Are you sure everything has been tested thoroughly ?
No because I don't write test. But I should have run end-to-end tests to check that my application is usable by a user and unit tests on the critical parts of my code, in particular the sending of new messages. 
