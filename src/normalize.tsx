import { makeStaticStyles } from '@griffel/react'

export const useNormalize = makeStaticStyles({
    // set border box everywhere
    '*': {
        boxSizing: 'border-box',
        '::before': {
            boxSizing: 'border-box',
        },
        '::after': {
            boxSizing: 'border-box',
        },
    },
    html: {
        fontFamily:
            'system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        lineHeight: 1.15,
        '-webkit-text-size-adjust': '100%',
        tabSize: 4,
    },
    body: {
        margin: 0,
    },
    b: {
        fontWeight: 'bold',
    },
    strong: {
        fontWeight: 'bold',
    },

    code: {
        fontFamily:
            'ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
        fontSize: '1em',
    },
    kbd: {
        fontFamily:
            'ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
        fontSize: '1em',
    },
    samp: {
        fontFamily:
            'ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
        fontSize: '1em',
    },
    pre: {
        fontFamily:
            'ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
        fontSize: '1em',
    },
    small: {
        fontSize: '80%',
    },
    sub: {
        fontSize: '75%',
        lineHeight: 0,
        position: 'relative',
        verticalAlign: 'baseline',
        bottom: '-0.25em',
    },
    sup: {
        fontSize: '75%',
        lineHeight: 0,
        position: 'relative',
        verticalAlign: 'baseline',
        top: '-0.5em',
    },
    table: {
        borderColor: 'currentcolor',
    },
    button: {
        fontFamily: 'inherit',
        fontSize: '100%',
        lineHeight: 1.15,
        margin: 0,
        '-webkit-appearance': 'button',
    },
    input: {
        fontFamily: 'inherit',
        fontSize: '100%',
        lineHeight: 1.15,
        margin: 0,
    },
    optgroup: {
        fontFamily: 'inherit',
        fontSize: '100%',
        lineHeight: 1.15,
        margin: 0,
    },
    select: {
        fontFamily: 'inherit',
        fontSize: '100%',
        lineHeight: 1.15,
        margin: 0,
    },
    textarea: {
        fontFamily: 'inherit',
        fontSize: '100%',
        lineHeight: 1.15,
        margin: 0,
    },
    '[type="button"]': {
        '-webkit-appearance': 'button',
    },
    '[type="reset"]': {
        '-webkit-appearance': 'button',
    },
    '[type="submit"]': {
        '-webkit-appearance': 'button',
    },
    legend: {
        padding: 0,
    },
    progress: {
        verticalAlign: 'baseline',
    },
    '::-webkit-inner-spin-button': {
        height: 'auto',
    },
    '::-webkit-outer-spin-button': {
        height: 'auto',
    },
    '[type="search"]': {
        '-webkit-appearance': 'textfield',
        outlineOffset: '-2px',
    },
    '::webkit-search-decoration': {
        '-webkit-appearance': 'none',
    },
    '::-webkit-file-upload-button': {
        '-webkit-appearance': 'button',
        font: 'inherit',
    },
    summary: {
        display: 'list-item',
    },
})
