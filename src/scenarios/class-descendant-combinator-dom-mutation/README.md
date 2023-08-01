# Class attribute selector

## Bad Test case

This test renders 10 elements inside an element with the class `foo` inside an element with class `bar`. The selector targets all `.foo` elements inside `.bar` elements.

Clicking on the toggle button will insert n elements with class `.foo` that are not inside a `.bar` element.


### Expected result

- Style recalc will affect n elements.
- Selector matching will affect 2n elements.


## Good Test case

This test renders 10 elements with styles applied directly to each element with a class.

Clicking on the toggle button will insert n elements that do not have any css rule applied to them.


### Expected result

- Style recalc will affect n elements
- Selector matching will affect n elements

