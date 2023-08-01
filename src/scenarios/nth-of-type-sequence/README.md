# nth-child (n + m) 

## Bad Test case

This test renders n elements. Every element from the third element should have colour red.

Clicking on the toggle button will insert a new element at the beginning of the collection. The collection should still have the requirement that all elements from the third element has a red colour.


### Expected result

- Style recalc will affect n elements.
- Selector matching will affect n elements.


## Good Test case

This test renders n elements. Every third element should have a red colour

Clicking on the toggle button will insert a new element at the beginning of the collection. The collection should still have the requirement that all elements from the third element has a red colour.

### Expected result

- Style recalc will affect 2 element
- Selector matching will affect 2 elements
