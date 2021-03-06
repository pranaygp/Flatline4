import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Button extends DomElementParent implements IElement {
    public autofocus?: boolean;
    public disabled?: boolean;
    public form?: string;
    public formaction?: string;
    public formenctype?: string;
    public formmethod?: string;
    public formnovalidate?: string;
    public formtarget?: string;
    public name?: string;
    public type?: string = 'button';
    public value?: string;
    public click?: () => void;
    
    generate() : HTMLElement{
        var element = document.createElement("button");

        if (this.click){
            element.onclick = () => this.click();
        }
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

        if (this.autofocus) {
            element.autofocus = this.autofocus;
        }

        if (this.disabled) {
            element.disabled = this.disabled;
        }

        if (this.formaction) {
            element.formAction = this.formaction;
        }

        if (this.formenctype) {
            element.formEnctype = this.formenctype;
        }

        if (this.formmethod) {
            element.formMethod = this.formmethod;
        }

        if (this.formnovalidate) {
            element.formNoValidate = this.formnovalidate;
        }

        if (this.formtarget) {
            element.formTarget = this.formtarget;
        }

        if (this.name) {
            element.name = this.name;
        }

        if (this.type) {
            element.type = this.type;
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