# tag selector (Rule mutation)

## Bad Test case

This test renders n elements. div elements that have two div parents should have colour red. There is only one element that should have colour red, it has the text content 'target'.

Clicking on the toggle button will apply the css rule that makes the target element red.


### Expected result

- Style recalc will affect n elements.
- Selector matching will affect 2n elements.


## Good Test case

This test renders n elements. div elements that have two div parents should have colour red.


Clicking on the toggle button will apply the css rule that makes the target element red.

### Expected result

- Style recalc will affect 1 element
- Selector matching will affect 1 elements
