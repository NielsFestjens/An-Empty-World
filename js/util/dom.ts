import { PartialRecord } from ".";

export function setHtml(elementId: string, html: string) {
    getElement(elementId).innerHTML = html;
}

export function setValue(elementId: string, value: string) {
    getElement<HTMLInputElement>(elementId).value = value;
}

export function setIsDisplayed(elementId: string, isVisible: boolean) {
    getElement(elementId).style.display = isVisible ? "" : "none";
}

export function setIsVisible(elementId: string, isVisible: boolean) {
    getElement(elementId).style.visibility = isVisible ? "" : "hidden";
}

export function getValue(elementId: string) {
    return getElement<HTMLInputElement>(elementId).value;
}

export function getElement<T extends HTMLElement>(elementId: string) {
    const element = document.getElementById(elementId) as T;
    if (!element)
        throw new Error(`Could not find element with id ${elementId}!`);
        
    return element;
}

export function createElement<T extends HTMLElement>(tagName: string, properties?: PartialRecord<keyof T, any>) {
    const element = document.createElement(tagName) as T;
    Object.assign(element, properties);
    return element as T;
}

export function createText(data: string) {
    return document.createTextNode(data);
}

export function removeElement(elementId: string) {
    getElement(elementId).remove();
}

export function addClass(elementId: string, className: string) {
    getElement(elementId).classList.add(className);
}

export function removeClass(elementId: string, className: string) {
    getElement(elementId).classList.remove(className);
}

export function resetProgressbar(id: string, time: number) {
    const element = getElement(id);
    element.style.width = "0%";
    element.classList.add('notransition');
    setTimeout(() => {
        element.classList.remove('notransition');
        element.style.width = "100%";
        element.style.transition = `width ${time}ms linear`;
    }, 10);
}