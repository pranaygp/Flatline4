import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Li extends DomElementParent implements IElement {
    public value?: number;
    
    generate() : HTMLElement{
        var element = document.createElement("li");

        if (this.id) {
            element.id = this.id;
        }

        var styleString = this.style.generateCSS();
        if (styleString) {
            element.setAttribute('style', styleString);
        }
        if (this.className) {
            element.className = this.className;
        }

        if (this.value) {
            element.value = this.value;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}