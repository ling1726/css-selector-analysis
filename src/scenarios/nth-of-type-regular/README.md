# nth-of-type (regular sequence)

## Bad Test case

This test renders n elements. every second element should have colour red.

Clicking on the toggle button will insert a new element at the beginning of the collection. The collection should still have the requirement that the every second element has a red colour.


### Expected result

- Style recalc will affect n elements.
- Selector matching will affect n elements.


## Good Test case

This test renders n elements. Every secnd element should have a red colour

Clicking on the toggle button will insert a new element at the beginning of the collection. The collection should still have the requirement that every second element has a red colour.

### Expected result

- Style recalc will affect 1 element
- Selector matching will affect 1 elements
