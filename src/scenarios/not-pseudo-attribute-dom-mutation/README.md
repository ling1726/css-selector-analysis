# :not with attribute selector

## Bad Test case

This test renders 10 elements that should have colour red.

Clicking on the toggle button will render n elements that should not have colour red.

The rule used targets an attribute shared by the newly inserted elements.

### Expected result

- Style recalc will affect n elements.
- Selector matching will affect 2n elements.


## Good Test case

This test renders 10 elements that should have colour red.

Clicking on the toggle button will render n elements that should not have colour red.

The red elements have style rule applied directly as classes.

### Expected result

- Style recalc will affect n element
- Selector matching will affect n elements
