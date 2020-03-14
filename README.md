# Calculator App

As a new programmer I have been thinking about doing small projects, so I put my eye on building a calculator (maybe its the worst thing to start with but it's worth trying it).

The project has been created by :
Me :see_no_evil: :see_no_evil: @karmelyoei

# The achievement of this project

The calculator can make these operations:
as a user he can press any number he wants then press the operand after that he can press the = to get the result, if he wants to make another operation with the result he can click any operand he wants after the result appear without retyping the result again (simple calculator)

- (+) adding tow numbers or more
- (-) subtracting two numbers or more
- (/) dividing two numbers or more
- (%) percentage of two numbers
- (Clear) it's clear the history and the results.

This Calculator's not the best practice and in the future, I might add more features like(decimals) :v:

# Technology Used :

simply created by :

- HTML
- CSS
- JavaScript

# Steps to run this calculator:

1. clone this Repo.
2. run it in the browser.

# TroubelShoting : :anger::anger:

The hardest part was with how to repeating the operation without needing to clear the history, therefore I added the result as the first number of the operation.

Example:

```js
1+2 = 3+5 = 8

it's like doing this
1+2 = (3 result)

(3 result as a first number) + 5 = 8

```

I have solved it here

```js
if (displayedNumber != 0) {
  finalResult += calculate(n1, operator, n2);
  result.textContent = finalResult;
  displayedNumber = result.textContent;
} else {
  finalResult = calculate(n1, operator, n2);
  result.textContent = finalResult;
  displayedNumber = result.textContent;
}
```

# Contributions

If you wanna add more features on my calculator app feel free to download it and you can push your edits here as well but before any changing, PLEASE assign me as a reviewer to be able to learn from you and to give you the approval to merge it.

_Best of luck_ :wink:
