# :not with attribute selector

## Bad Test case

This test renders 10 elements that should have colour red and n elements that should not have the colour red.

Clicking on the toggle button will apply the css rule to the parent that applies colour red to 10 elements.

The rule used targets an attribute shared by the all elements.

### Expected result

- Style recalc will affect n elements.
- Selector matching will affect n elements.


## Good Test case

This test renders 10 elements that should have colour red and n elements that should not have the colour red.

Clicking on the toggle button will apply the css rules directly on 10 elements that should have colour red.


### Expected result

- Style recalc will affect 10 elements
- Selector matching will affect 10 elements
