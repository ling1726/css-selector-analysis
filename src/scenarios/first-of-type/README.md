# first-of-type

## Bad Test case

This test renders n elements and one span element before all the divs. first div should have colour red.

Clicking on the toggle button will change the span element to a code element at the beginning of the collection. The first div should still have colour red.

### Expected result

- Style recalc will affect n elements.
- Selector matching will affect n elements.


## Good Test case

This test renders n elements and one span element before all the divs. first div should have colour red.

Clicking on the toggle button will change the span element to a code element at the beginning of the collection. The first div should still have colour red.

### Expected result

- Style recalc will affect 1 element
- Selector matching will affect 1 elements
