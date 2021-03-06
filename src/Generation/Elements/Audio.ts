import { IElement } from '../Element';
import { DomElementParent } from '../DomElementParent';
export default class Audio extends DomElementParent implements IElement {
    public autoplay?: boolean;
    public controls?: boolean;
    public loop?: boolean;
    public muted?: boolean;
    public preload?: string;
    public src?: string;

    generate() : HTMLElement{
        var element = document.createElement("audio");

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

        if (this.autoplay) {
            element.autoplay = this.autoplay;
        }

        if (this.controls) {
            element.controls = this.controls;
        }

        if (this.loop) {
            element.loop = this.loop;
        }

        if (this.muted) {
            element.muted = this.muted;
        }

        if (this.preload) {
            element.preload = this.preload;
        }

        if (this.src) {
            element.src = this.src;
        }

        for(let child of this.children)
        {
            element.appendChild(child.generate());
        }

        return element;
    }
}