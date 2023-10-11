# Contributing to Abhyas

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

## How can i contribute?

### Submitting new test data
Submit a pull request with the new test data. 
We currently don't have any feature to fetch test data from the server, so you will have to manually add the test data to the `src/store/dummydata.js` file (specifically in tests array).

The test data should be in the following format:
```js
{
    tid:string, // test id
    title:string, // test title
    duration:int, // in hour
    totalQues:int, // total number of questions
    mques:int, // number of maths questions
    pques:int, // number of physics questions
    cques:int, // number of chemistry questions
    Math:[
            {
                id: string, // question id
                q: string, // question
                choices: {
                    A: string, // choice A
                    B: string, // choice B
                    C: string, // choice C
                    D: string, // choice D
                },
                right: string, // right choice
            }
    ], // array of maths questions
    Physics:[], // array of physics questions
    Chemistry:[], // array of chemistry questions
}
```

Above will constitute a single test in particular category (like we have mock-1 for demo category). You can add multiple tests in the same format.

To add new test category in items array of intialState object, you will need to follow the given format:
```js
{
        {
            id: string, // category id
            maxQues:int, // max number of questions
            maxTime:int, // max time in hours
            maxMarks:int, // max marks
            img:string, // image url
            title:string, // category title
            description:string, // category description
            tests: [
                {
                    tid: string, // test id
                    title: string, // test title
                }
            ]
        }
}
```

### Development
We would appreciate any help in development. You can start by forking the repo and then cloning it to your local machine. After that you can hacking!