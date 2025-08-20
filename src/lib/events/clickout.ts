export default function clickOut(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
        if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
            node.dispatchEvent(new CustomEvent('clickout'))
        }
    }

    document.addEventListener('click', handleClick, true)

    return {
        destroy() {
            document.removeEventListener('click', handleClick, true)
        }
    }
}