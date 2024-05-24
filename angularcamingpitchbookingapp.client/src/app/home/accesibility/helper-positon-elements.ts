export function getDocumentYPosition(): number {
    return window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
}

export function getElementYPosition(element: Element): number {
    const rect = element.getBoundingClientRect();
    const scrollTop = getDocumentYPosition();
    return rect.top + scrollTop;
}