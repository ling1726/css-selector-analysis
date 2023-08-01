# tag selector (DOM mutation)

## Bad Test case

This test renders n elements. div elements that have two div parents should have colour red. There is only one element that should have colour red, it has the text content 'target'.

Clicking on the toggle button will n div elements that are wrapped with article elements.


### Expected result

- Style recalc will affect n elements.
- Selector matching will affect 2n elements.


## Good Test case

This test renders n elements. div elements that have two div parents should have colour red.

Clicking on the toggle button will n div elements that are wrapped with article elements. There is only one element that should have colour red, it has the text content 'target'.

### Expected result

- Style recalc will affect n element
- Selector matching will affect n elements
