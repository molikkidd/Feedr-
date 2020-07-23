# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Unit #2 Project: Feedr

### Overview

The web is an ever growing medium and it is getting more and more difficult
to filter useful information. In our journey to writing beautiful JavaScript we
have come and will come across a great many reference points that will guide our
learning. This is where personal feeds come in very useful. Online feeds are
like to-do lists in that they can be infinitely personalized and there is not
one solution that works for everybody.

For our Unit 2 project we will build __Feedr__, a personalized feed reader. Our
feed reader will pull feeds from our favorite blogs. The user will be able to
filter between publications through the dropdown on the header menu.
Clicking/tapping on one of the articles will load a pop up with more
information. The user from that point will be able to either dismiss the
additional information or go to the referenced article.

This will be our first single page app. All of our application views will be
contained in the provided [index.html](index.html) file. Our task, after we pull from the
respective feed APIs, will be to toggle the appropriate classes and content for
the provided site architecture.

---

### Technical Requirements

#### Your core application rules:

__Feed sources:__

Give the user the ability to pull from a multiple news sources. Here are a few news sources we suggest:

- [Reddit](https://www.reddit.com/dev/api)
- [The Guardian](http://open-platform.theguardian.com/access/) 
- [Hacker News](https://github.com/HackerNews/API)
- [Daily WTF](http://thedailywtf.com/articles/tdwtf-api)
- [Event Registry](https://eventregistry.org)
- [newsapi.org](https://newsapi.org) (republishes a number of news sources -- use a max of 1 source with this API)

You should also feel free to use other news APIs; however, you will find that many APIs that do not support either [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) or [JSONP](https://en.wikipedia.org/wiki/JSONP) will result in a cross-domain restriction error ("No 'Access-Control-Allow-Origin' header is present...") in the browser. To get around this, you can use the following proxy server to filter your API requests.

Let's say you wanted to use the Digg API, which has the following endpoint:

`http://digg.com/api/news/popular.json`

If you preface the request with the proxy server API as follows...

`https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json`

...you should be able to use the Digg API without encountering a cross-domain restriction error. Here's a code example of how you might use the proxy server:

```js
$.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results){
  console.log(results);
  results.data.feed.forEach(function(result){
    $("ul").append("<li>"+result.content.title+"</li>")
  })
})
```

If you use your own feeds, they must have APIs with the following minimum
requirements:

- Each article must provide an image source for the circular thumbnail at the
  left of the article.
- Must provide either a category, tag, or custom taxonomy to display below the
  title (of course title of article is also required).
- Must provide a point, ranking, or some type of total impressions for the
  respective article.
- Must provide either a full version or a summary of the article for the pop up
  screen.

__Feed rules:__

- When the application first loads display the loading container (see below on
  instructions to toggle this). When you successfully retrieve information from
  the default API hide the loader and replace the content of the `#main`
  container with that of the API. The DOM structure of each article must adhere
  to the `.article` structure.
- When the user selects an article's title show the `#popUp` overlay. The
  content of the article must be inserted in the `.container` class inside
  `#popUp`. Make sure you remove the `.loader` class when toggling the article
  information in the pop-up.
- Change the link of the "Read more from source" button to that of the
  respective article.
- When the user selects a source from the dropdown menu on the header, replace
  the content of the page with articles from the newly selected source. Display
  the loading pop up when the user first selects the new source, and hide it on
  success.
- Add an error message (either alert or a notification on the page) if the app
  cannot load from the selected feed.

__Additional UI interaction rules:__

- When the user clicks/taps the search icon, expand the input box. Best approach
  for this is to toggle the `.active` class for the `#search` container. If the
  search input box is already expanded tapping the search icon again will close
  the input. Pressing the "Enter" key should also close the opened input box.
  _See Bonus 2 for search filtering functionality._
- When the app is first loading and when the user selects to load a new feed
  from the dropdown, display the `#popUp` container with the `.loader` class.
  You can toggle the `.hidden` class from the container to display/hide the
  overlay container.
- Add functionality to hide the pop-up when user selects the "X" button on the
  pop-up.
- Clicking/tapping the "Feedr" logo will display the main/default feed.


#### Bonus

1. Merge all feeds into one main feed in chronological order for the initial
   view. When the user clicks/taps the "Feedr" logo at the top, they should be
   return to this feed. This will be the new "home view."
2. Filter feed by title according to user keyboard input on the search input
   box. This should run the filter on every keystroke. When the input box is
   cleared, all articles should display in the respective feed.
3. Add infinite scrolling. Start displaying only the first 20 articles and keep
   loading more on user scrolling.

---

### Necessary Deliverables

* A __working Feedr, built by you__, that can be run locally
* A __new git repository hosted on Github__, where your codebase is maintained.
  - Most of the your will be done on the __app.js__ file. You may update
  the index.html and style.css files if you would like to further customize your
  app.

---

### Getting Started

Begin by forking the starter code repository. You can do so by clicking the "Fork" icon on
the top right of [this page](https://github.com/generalassembly-studio/JS-Unit-2-Project-Starter-Code). Once
complete, clone the repository to your computer by running the following
commands:

```
cd ~/JSD/
git clone https://github.com/<your-username-here>/feedr.git
cd feedr
```

You can then open the `~/JSD/feedr` directory in your editor and
work on the below steps. As you accomplish a feature, be sure to commit it in
Git with the following commands:

```
git add .
git commit -m "A description of what was added"
git push origin master
```

Here are some sugestions on where to start:

- Start by adding all the DOM functionality first.
- Map out all of the needed fields/properties from each respective feed.
- Start by doing a console.log of the incoming feeds to confirm you have a
  successful transaction before you start mapping anything out.
- Make sure you have the [JSON View chrome extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
  to get a clean view of the JSON dump in your browser.
- Think about ways to best standardize all of your incoming data.
- Test small pieces of functionality frequently, to make sure everything is
  working.
- Use tools such as Stack Overflow, Google, and documentation resources to solve
  problems.

---

### Useful Resources

**Key Resources**

- [MDN JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [jQuery Event Basics](https://learn.jquery.com/events/event-basics/)
- [Understanding Event Delegation](http://learn.jquery.com/events/event-delegation/)
- [jQuery Tutorial](http://tutorials.jenkov.com/jquery/index.html#jquery-version-used-in-this-tutorial)
- [A beginner's guide to HTTP and REST](http://code.tutsplus.com/tutorials/a-beginners-guide-to-http-and-rest--net-16340)
- [Async JS Callbacks](http://sporto.github.io/blog/2012/12/09/callbacks-listeners-promises/)
- [SitePoint: Intro to jQuery Shorthand AJAX Methods](http://www.sitepoint.com/introduction-jquery-shorthand-ajax-methods/)

---

### Project Feedback + Evaluation

When your project is complete, push the final version to your fork on GitHub and send the link to Rome. You do not need to create a pull request for this project.

If you'd like to schedule a 30-minute code review, let Rome know. This is an opportunity for you to demonstrate your app and explain how you coded it, and for the instructional team to give you feedback on what you did well as well as things you might consider doing differently or adding for your future coding projects. 

A code review is optional, so if you'd like to participate in one, it is up to you to contact Rome to schedule it once your project is done.

#### Name: Rome Bell