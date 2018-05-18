# React starter

Well, now that we are going to build a lot more things in react, I thought it would be a good idea to have a react starter.

You might think "Don't we have `create-react-app` for creating react app?". Well we do, in fact this is actually built on top of that.

So, what more do you get from using this?

## Why use this

* Eslint config\
    I have created a pretty good eslint config (I think).
    Using this same eslint config ensures that we follow a common code style.
* Hot reloading\
    Using [react-hot-loader](https://github.com/gaearon/react-hot-loader).
    But don't worry I have not ejected from `create-react-app` but instead used [`react-app-rewire-hot-loader`](https://github.com/cdharris/react-app-rewire-hot-loader)
* Flow for types\
    This makes use of flow for adding that much needed type system for javascript.
    I have added in a config file.
    Make sure you add  a comment line `@flow` on top of each file so that flow checks that file.
    This way you can be lazy if you wan't to or even deal with external libs.
* Prettier\
    I have added in settings for [`prettier`](https://github.com/prettier/prettier).
    The God sent of code formatters.
    This will take into consideration eslint rules and do most of the hard work of formatting your code for you.
* npm scripts\
    A few really useful npm scrips so as to make sure building a deploying all goes smoothley
* A good `.gitignore`\
    Why commit useless stuff
* Some good default variables\
    - Like title change in index page.
    - `favicon.ico`

## How to set up

### Dependencies

* [git](https://git-scm.com/)
* [npm](https://www.npmjs.com/)
* [flowtype](https://flow.org/)
* [prettier](https://github.com/prettier/prettier)
* [editorconfig](http://editorconfig.org/)

## Steps

* **STEP 1** Clone the repo
* **STEP 2** `npm i`
* **STEP 3** You are good to go


## Future plans

- [ ] Add Saama colors
- [ ] Webpack dashboard
- [ ] A few git hooks
    - sanity check
    - commit message format
    - prettier format using husky
