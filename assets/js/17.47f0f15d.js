(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{382:function(e,a,s){"use strict";s.r(a);var t=s(46),r=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"task-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#task-commands"}},[e._v("#")]),e._v(" Task Commands")]),e._v(" "),s("p",[e._v("As a scheduler bot, Anzu's 'heart' lays in these commands. Remember that the parameters are required to be in a sequence!")]),e._v(" "),s("h2",{attrs:{id:"schedule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schedule"}},[e._v("#")]),e._v(" "),s("code",[e._v("/schedule")])]),e._v(" "),s("p",[e._v("This command is used to schedule a task.")]),e._v(" "),s("h3",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("deadline")]),e._v(", the deadline of the task, in a valid "),s("code",[e._v("YYYY-MM-DD")]),e._v(" format.")]),e._v(" "),s("li",[s("code",[e._v("job_name")]),e._v(", the name of the job to be scheduled (case sensitive).")])]),e._v(" "),s("h3",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/schedule 2020-12-20 Work on CI/CD pipeline\n/schedule 1970-01-01 Linux Epoch Time\n/schedule 2020202020 Test\n")])])]),s("h3",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),s("p",[e._v("The first one will return successfully (assuming that the current date is less than "),s("code",[e._v("2020-12-20")]),e._v(").")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Thank you! Your task of 'Work on CI/CD pipeline' with the deadline being 2020-12-20 has been created successfully!\n")])])]),s("p",[e._v("The second one will fail (obviously).")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("You can only assign a task whose deadline is today or greater than today!\n")])])]),s("p",[e._v("The third one will also fail.")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Invalid date! Please enter date in YYYY-MM-DD format!\n")])])]),s("h2",{attrs:{id:"tasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tasks"}},[e._v("#")]),e._v(" "),s("code",[e._v("/tasks")])]),e._v(" "),s("p",[e._v("This command is used to get all available tasks.")]),e._v(" "),s("h3",{attrs:{id:"parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),s("p",[e._v("None")]),e._v(" "),s("h3",{attrs:{id:"example-usage-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage-2"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/tasks\n")])])]),s("h3",{attrs:{id:"response-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[e._v("#")]),e._v(" Response")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Hello everyone!\n\nAnzu is here to remind you all of your schedules. Here is it:\n\n... (your tasks here)\n\nGood luck and stay in high spirits!\n")])])]),s("h2",{attrs:{id:"delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" "),s("code",[e._v("/delete")])]),e._v(" "),s("p",[e._v("This command is used to delete available tasks in the current environment (room / group / personal chat).")]),e._v(" "),s("h3",{attrs:{id:"parameters-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("job_name")]),e._v(", the job name to be deleted (case sensitive).")])]),e._v(" "),s("h3",{attrs:{id:"example-usage-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage-3"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/delete randomJob\n")])])]),s("h3",{attrs:{id:"response-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[e._v("#")]),e._v(" Response")]),e._v(" "),s("p",[e._v("Assuming that "),s("code",[e._v("randomJob")]),e._v(" exists in the current environment.")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Task with the name 'randomJob' has been deleted!\n")])])]),s("p",[e._v("If it does not exists, then it will return the following message.")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("The task that you want to delete does not exist!\n")])])]),s("h2",{attrs:{id:"reschedule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reschedule"}},[e._v("#")]),e._v(" "),s("code",[e._v("/reschedule")])]),e._v(" "),s("p",[e._v("This command is used to reschedule a task in an environment.")]),e._v(" "),s("h3",{attrs:{id:"parameters-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("new_deadline")]),e._v(", the new deadline in "),s("code",[e._v("YYYY-MM-DD")]),e._v(" format.")]),e._v(" "),s("li",[s("code",[e._v("job_name")]),e._v(", the job name to be rescheduled (case sensitive).")])]),e._v(" "),s("h3",{attrs:{id:"example-usage-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage-4"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/reschedule 2021-01-02 Second day of 2021\n")])])]),s("h3",{attrs:{id:"response-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[e._v("#")]),e._v(" Response")]),e._v(" "),s("p",[e._v("Assuming that "),s("code",[e._v("Second day of 2021")]),e._v(" exists.")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Thank you! Your task of 'Second day of 2021' has been rescheduled to '2021-01-02'!\n")])])]),s("p",[e._v("Else will return the following.")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("The task that you want to reschedule does not exist!\n")])])]),s("h2",{attrs:{id:"finish"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finish"}},[e._v("#")]),e._v(" "),s("code",[e._v("/finish")])]),e._v(" "),s("p",[e._v("This command is used to finish a task. Identical to "),s("code",[e._v("/delete")]),e._v(", but with a more 'humane' message.")]),e._v(" "),s("h3",{attrs:{id:"parameters-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-5"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("job_name")]),e._v(", the job name to be finished (case sensitive).")])]),e._v(" "),s("h3",{attrs:{id:"example-usage-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage-5"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/finish Second day of 2021\n")])])]),s("h3",{attrs:{id:"response-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-5"}},[e._v("#")]),e._v(" Response")]),e._v(" "),s("p",[e._v("Assuming that "),s("code",[e._v("Second day of 2021")]),e._v(" exists in the current environment.")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Great work! The task 'Second day of 2021' has been finished!\n")])])]),s("p",[e._v("If it does not exists, then it will return the following message.")]),e._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("The task that you want to finish does not exist!\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);