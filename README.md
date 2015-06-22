# Javascript Bank Kata | Outside-In TDD

TLDR: Javascript Outside-in TDD/OPP Kata using MochaJS, ShouldJS and SinonJS.

After read some great articles and have some discussions with other developers, I was totally convinced of the benefits of learning and practising TDD. These reasons can be summarised in:

* Executable documentation.
* Helping me to write clean code.
* Reduce the amount of bugs.
* Automate some QA testing.
* Having a guide for baby steps.

As newbie in TDD, I decided facing the challenge combining the most basic learning techniques: the imitation by **observation and replication** with an active learning by **coding and thinking about it**.

I wanted to replicate code of the Craftsman [Sandro Mancuso](https://twitter.com/sandromancuso), founder and a reference of the London Software Craftsmanship Community. I like how that community enforces the communication between business and developers without forgetting technical excellence.

I choose his [Outside-In TDD approach with the Bank Kata](https://www.youtube.com/watch?v=XHnuMjah6ps), and the fact of being developed in Java was the perfect incentive for not only replicating but translating it to Javascript and learn what I'm going to explain in this post:

1-. **How to implement OOP with Javascript**. I’m using the [Prototype pattern](https://carldanley.com/js-prototype-pattern/).

2-. **Acceptance Test vs Unit Test**. Acceptance test is the kind of test that checks the business requirement is working as expected. In other words, it pretends to test the application from the client point of view. For instance: “When a user click on ’submit' it should be sent an email”. On the other hand, unit tests are exercising only an specific point of the application. For instance: “Email repository should save in drafts the body of the email each 5 seconds”. From a design perspective, the acceptance test is quite helpful for confronting 'the blank page’ of a new application.

3-. **Mocks vs Stubs**. When testing, you may need to use third parties to make your test work as it would work in production, however, you don’t want to call your third party for running your tests. This is the moment for creating mocks and stubs but, what is the difference between them? By “mocking" an object the test verifies if some method of that object has been called under some conditions. On the other hand, stubs replicate the behaviour of a function and return the expected value.

4-. **TDD flow**. Red, green, refactor. Failing assertion, implement production code for passing the test and redesign in case of being needed.

8-. **Test Driven Development** helps the programmer to design by only building when needed for passing the test. Not before. Not just in case.

Last but not least:

* Do not include “strings” or “magic numbers" in the middle of the code. Always define them as CONSTANTS at the beginning of the file.





