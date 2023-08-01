# nth-child (absolute value) 

## Bad Test case

This test renders n elements. The third element should have colour red.

Clicking on the toggle button will insert a new element at the beginning of the collection. The collection should still have the requirement that the third element has a red colour.


### Expected result

- Style recalc will affect n elements.
- Selector matching will affect n elements.


## Good Test case

This test renders n elements. The third element should have a red colour

Clicking on the toggle button will insert a new element at the beginning of the collection. The collection should still have the requirement that the third element has a red colour.

Styles are applied directly to the third element using CSS class.

### Expected result

- Style recalc will affect 3 element
- Selector matching will affect 3 elements
