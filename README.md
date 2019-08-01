# challengeTime

#Top Ten Best Coding Challenge Website For 2018
</br>
https://medium.com/coderbyte/the-10-best-coding-challenge-websites-for-2018-12b57645b654


### Jest Testing

To Run test app.test.js in a single folder
Example:
```
$ jest ../12-integer-to-roma/ --watch
```


### Mocha Testing

Mocha runs in the root directory and find a folder called Test and run test files in there

```js
//package.json

"scripts": {
    "mocha": "mocha"
```

If test files are in a desired folder add the directory after the cmd
Mocha will look for any files that contains the name test (I.G. app.test.js, test.js) 
Or even in a directory called test/test.js

```bash
$ npm run mocha
# or
$ npm run mocha ./<Folder>/
```