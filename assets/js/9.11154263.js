(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{370:function(t,e,s){"use strict";s.r(e);var a=s(42),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"contributing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[t._v("#")]),t._v(" Contributing")]),t._v(" "),s("p",[t._v("Anzu is completely open source and contribution to this tool is highly encouraged for everyone! If you have found any issues during your usage of this program, please submit an issue and I'll go back to you right away.")]),t._v(" "),s("p",[t._v("In order to contribute to this project as a programmer, please follow these style guide and workflow.")]),t._v(" "),s("h2",{attrs:{id:"project-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-structure"}},[t._v("#")]),t._v(" Project Structure")]),t._v(" "),s("p",[t._v("The project is structured as follows (top-level only):")]),t._v(" "),s("ul",[s("li",[s("code",[t._v(".circleci")]),t._v(" for CircleCI pipeline integration.")]),t._v(" "),s("li",[s("code",[t._v(".github")]),t._v(" for repository related files.")]),t._v(" "),s("li",[s("code",[t._v("auto")]),t._v(" for the automatic ping script (CRON).")]),t._v(" "),s("li",[s("code",[t._v("constants")]),t._v(" for Anzu configuration variables.")]),t._v(" "),s("li",[s("code",[t._v("functions")]),t._v(" to store the essential functions.")]),t._v(" "),s("li",[s("code",[t._v("models")]),t._v(" to store NoSQL data models.")]),t._v(" "),s("li",[s("code",[t._v("responses")]),t._v(" to store Anzu's responses.")]),t._v(" "),s("li",[s("code",[t._v("routes")]),t._v(" to process Anzu's commands.")]),t._v(" "),s("li",[s("code",[t._v("types")]),t._v(" for custom types.")]),t._v(" "),s("li",[s("code",[t._v("utils")]),t._v(" for utility functions.")])]),t._v(" "),s("h2",{attrs:{id:"coding-style-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coding-style-guide"}},[t._v("#")]),t._v(" Coding Style Guide")]),t._v(" "),s("p",[t._v("Please follow this for the sake of the code to be as readable and maintainable as possible.")]),t._v(" "),s("ul",[s("li",[s("strong",[s("em",[t._v("Use your best spelling and punctuation, in English.")])])]),t._v(" "),s("li",[t._v("Before you submit your pull request, ensure that you run the following procedures.")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run lint\n")])])]),s("ul",[s("li",[t._v("It is done so that the code style remains consistent throughout the whole repository. For your information, my ESLint configuration uses Airbnb style.")])]),t._v(" "),s("h2",{attrs:{id:"commit-style-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commit-style-guide"}},[t._v("#")]),t._v(" Commit Style Guide")]),t._v(" "),s("p",[t._v("Please use "),s("a",{attrs:{href:"https://seesparkbox.com/foundry/semantic_commit_messages",target:"_blank",rel:"noopener noreferrer"}},[t._v("Semantic Commit Messages"),s("OutboundLink")],1),t._v(", but with past tense and first letter capitalized. For further details, please check "),s("a",{attrs:{href:"https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716",target:"_blank",rel:"noopener noreferrer"}},[t._v("this gist"),s("OutboundLink")],1),t._v(" and this "),s("a",{attrs:{href:"https://www.conventionalcommits.org/en/v1.0.0/",target:"_blank",rel:"noopener noreferrer"}},[t._v("website"),s("OutboundLink")],1),t._v(". Using these kinds of commit messages will make contributors into better programmers because of its rigid style. Another reason of using it is because its rigid style actually forces contributors to "),s("strong",[t._v("not commit lots of files in one setting.")])]),t._v(" "),s("h2",{attrs:{id:"note-about-anzu-replying"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note-about-anzu-replying"}},[t._v("#")]),t._v(" Note About Anzu Replying")]),t._v(" "),s("p",[t._v("If you want to add a feature that makes Anzu reply to the users, please insert the output message (in the file format of "),s("code",[t._v("functionName.txt")]),t._v(") in the "),s("code",[t._v("responses/functionsFileName")]),t._v(" folder ("),s("code",[t._v("taskFunctions")]),t._v(" will be named as "),s("code",[t._v("tasks")]),t._v(", plural). "),s("strong",[t._v("Make sure that the function name is the same as the file output name.")])]),t._v(" "),s("p",[t._v("If you need to insert dynamic messages, use the provided "),s("code",[t._v("transformResponse")]),t._v(" function in "),s("code",[t._v("utils/responseHelper.ts")]),t._v(" and prepare a template in the file like I did with "),s("code",[t._v("<%MESSAGE(NUMBER_STARTS_FROM_ZERO)%>")]),t._v(". Note that you should insert an empty array if you do not need to insert dynamic messages.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Static message example.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transformResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'functionName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replyMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("replyToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Dynamic message example.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transformResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'functionName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" variableOne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replyMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("replyToken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Note that the items in the array are processed (replaced) "),s("strong",[t._v("sequentially")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"workflow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workflow"}},[t._v("#")]),t._v(" Workflow")]),t._v(" "),s("p",[t._v("In order to contribute to this project, please create an issue about the problem that you are going to fix / add. After that, follow these instructions below.")]),t._v(" "),s("ul",[s("li",[t._v("Fork the repository.")]),t._v(" "),s("li",[t._v("Create a new branch based on the issue number that you created beforehand. Example: "),s("code",[t._v("git checkout -b 10")]),t._v(".")]),t._v(" "),s("li",[t._v("Make sure to update the "),s("code",[t._v("CHANGELOG.md")]),t._v(", the version number in "),s("code",[t._v("package.json")]),t._v(", and version number in the badge in the "),s("code",[t._v("README.md")]),t._v(" file.")]),t._v(" "),s("li",[t._v("Make sure to update the documentation (if possible) if you add or edit any responses and/or functions.")]),t._v(" "),s("li",[t._v("Commit and push your features / changes.")]),t._v(" "),s("li",[t._v("Create a new pull request.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);