// Add missing `beginElement` to SVGElement
interface SVGElement extends Element {
  beginElement: () => SVGElement
}
