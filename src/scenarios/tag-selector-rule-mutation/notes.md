- will match against new elements that are added that are of the same element type
- if the rule is applied on an existing DOM tree - it will also invalidate all elements even if style doesn't change
- those selector matches are not fast rejected
- noticeable different in recalc and layout time
- Huge difference in recalc time and affected elements when rule is applied to existing elements vs elements applied to existing rule
 