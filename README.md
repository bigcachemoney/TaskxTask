# What is Task x Task?

Task x Task provides a service platform for connecting users seeking assistance with a task with skilled Taskers. Taskers are skilled individuals committed to completing task postings and strive to exceed expectations. 

Task x Task is a web application based on the popular freelance marketplace company TaskRabbit. 

![](https://imgur.com/kCUOtxF.jpg)

## Technologies 
The site is hosted on heroku, a platform as a service that enables developers to build applications on the cloud. Ruby on Rails is used on the backend to manage a postgreSQL database structure, while the frontend is managed by a JavaScript framework and library (React + Redux). 

Useful ruby gems includes:

* b-crypt
* pry-rails
* annotate

Useful frontend modules includes:

* babel
* react/redux libraries

Credits to [Alexandria Wong](https://github.com/alexawhy) for the amazing logo design. 

The site offers users an insight to the website through a demostrative login user account. This account gives potential users freedom to preview what Task x Task can provide as an online platform. 

### Challenges 
The challenging part of this feature was to properly seed the database both on the application and cloud based side. 

```javascript
User.create(
    username: 'demo', 
    email: 'demouser@example.com',  
    password: '123456'
)

  demoSubmit(e) {
    e.preventDefault();
    const demo = {username: "demo", password: "123456"};
    this.props.processForm(demo);
  }

```


Another feature I'm proud of is the Task Form page that shows the user which page of the form they are currently on. By dividing the webpage into specific `<div>`'s, a light-up button effect can be achieved.

```javascript
<div className="taskform-nav-progress">
  <div className="taskform-nav-step">
    <div className="taskform-nav-step-top">
        <div className="taskform-nav-empty"></div>
        <div className="taskform-nav-num active">
            <span>1</span>
        </div>
        <div className="taskform-nav-line"></div>
    </div>
    <div className="taskform-nav-bottom active">
        <span>Describe your task</span>
    </div>
  </div>
</div>
                    
.taskform-nav-num.active {
  CSS
}

.taskform-nav-num.active span {
  CSS
}
.taskform-nav-bottom.active {
  CSS
}
```
