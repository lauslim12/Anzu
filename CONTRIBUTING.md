# Contributing

In order to contribute to this project, please follow these style guide and workflow.

## Coding Style Guide

Please follow this for the sake of the code to be as readable and maintainable as possible.

- **_Use your best spelling and punctuation, in English._**
- Before you submit your pull request, ensure that you run the following procedures.

```bash
npm run prettier
npm run lint
```

- It is done so that the code style remains consistent throughout the whole repository. For your information, my ESLint configuration uses Airbnb style.

## Commit Style Guide

Please use [Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages), but with past tense and first letter capitalized. For further details, please check [this gist](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) and this [website](https://www.conventionalcommits.org/en/v1.0.0/). Using these kinds of commit messages will make contributors into better programmers because of its rigid style. Another reason of using it is because its rigid style actually forces contributors to **not commit lots of files in one setting.**

## Note About Anzu Replying

If you want to add a feature that makes Anzu reply to the users, please insert the output message (in the file format of `functionName.txt`) in the `responses` folder. **Make sure that the function name is the same as the file output name.**

If you need to insert dynamic messages, use the provided `transformResponse` function in `utils/responseHelper.js` and prepare a template in the file like I did with `<%MESSAGE(NUMBER_STARTS_FROM_ZERO)%>`. Note that you should insert an empty array if you do not need to insert dynamic messages.

```javascript
// Static message example.
const message = transformResponse('functionName', []);
const response = createResponse(message);
await client.replyMessage(event.replyToken, response);

// Dynamic message example.
const message = transformResponse('functionName', ['string1', variableOne]);
const response = createResponse(message);
await client.replyMessage(event.replyToken, response);
```

Note that the items in the array are processed (replaced) **sequentially**.

## Workflow

In order to contribute to this project, please create an issue about the problem that you are going to fix / add. After that, follow these instructions below.

- Fork the repository.
- Create a new branch based on the issue number that you created beforehand. Example: `git checkout -b 10`.
- Commit and push your features / changes.
- Create a new pull request.
