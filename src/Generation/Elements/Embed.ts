import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Embed extends DomElementParent implements IElement {
    public height?: string;
    public src?: string;
    public type?: string;
    public width?: string;
    
    generate() : HTMLElement{
        var element = document.createElement("embed");

        if (this.id) {
            element.id = this.id;
        }

        if (this.height) {
            element.height = this.height;
        }

        if (this.src) {
            element.src = this.src;
        }

        if (this.type) {
            element.setAttribute('type', this.type);
        }

        if (this.width) {
            element.width = this.width;
        }

        for(let child of this.Children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}