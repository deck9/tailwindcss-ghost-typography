const plugin = require('tailwindcss/plugin')
const merge = require('lodash.merge')
const castArray = require('lodash.castarray')
const uniq = require('lodash.uniq')
const styles = require('./styles.js')

function configToCss(config = {}) {
    return merge(
        {},
        ...castArray(config.css || {})
    )
}

module.exports = plugin.withOptions(
    ({ modifiers, className = 'prose-ghost' } = {}) => {
        return function ({ addComponents, theme, variants }) {
            const DEFAULT_MODIFIERS = [
                'DEFAULT',
                'lg',
                'dark',
            ]
            modifiers = modifiers === undefined ? DEFAULT_MODIFIERS : modifiers
            const config = theme('ghostTypography')

            const all = uniq([
                'DEFAULT',
                ...modifiers,
                ...Object.keys(config).filter((modifier) => !DEFAULT_MODIFIERS.includes(modifier)),
            ])

            const components = all.map((modifier) => ({
                [modifier === 'DEFAULT' ? `.${className}` : `.${className}-${modifier}`]: configToCss(
                    config[modifier]
                ),
            }));

            addComponents(components, variants('ghostTypography'))
        }
    },
    () => ({
        theme: { ghostTypography: styles },
        variants: { ghostTypography: ['responsive', 'dark'] },
    })
)
