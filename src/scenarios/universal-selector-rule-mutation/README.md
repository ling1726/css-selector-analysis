# Universal selector with rule mutation

## Bad Test case

This test renders 1000 elements that should have colour red.

Clicking on the toggle button will result in no visible change but apply a css rule with a universal selector

```css
/* This is already applied to every single element */
.red {
  color: red;
}

/* This is added later */ 
* {
  color: red;
}
```

### Expected result

- Style recalc will affect n elements.
- Selector matching will affect 3n elements.
