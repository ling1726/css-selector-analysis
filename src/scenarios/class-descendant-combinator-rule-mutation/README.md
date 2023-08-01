# Class attribute selector

## Bad Test case

This test renders 10 elements inside an element with the class `foo` inside an element with class `bar`. The selector targets all `.foo` elements inside `.bar` elements.

This test also renders n `.foo` elements that are not inside a `.bar` element.

Clicking on toggle will apply the rule to make all `.foo` elements in `.bar` elements red.

### Expected result

- Style recalc will affect n + 10 elements.
- Selector matching will affect 2n + 10 elements.

## Good Test case

This test renders 10 elements that will be color red.

The test also renders n elements that will not be color red.

Clicking on the toggle button will apply css classes to the 10 elements to make them color red.


### Expected result

- Style recalc will affect 10 elements
- Selector matching will affect 10 elements

