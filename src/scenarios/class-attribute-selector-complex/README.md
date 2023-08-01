# Class attribute selector

This scenario uses the a selector based on the value of the `class` attribute on a HTMLElement.

## Bad Test case

This test renders n elements inside an element with the class `language`. The selector will assert that the value of the class contains the `language` string.

Clicking on the toggle button will update the style of children of the element with class `language`.

### Expected result

Style recalc will affect n elements.

## Good Test case

This test renders n elements inside an element with the class `language`. The styles for each nth element are applied directly with a class.

Clicking on the toggle button will update the style of children of the element with class `language`.


### Expected result

Style recalc will affect 1 element

