import DOMPurify from "dompurify"

export const sanitize = ( targetText ) => {
    return DOMPurify.sanitize(
        targetText
            .replace(/<c>/g, '<span class="code">')
            .replace(/<\/c>/g, '</span>')
    )
}