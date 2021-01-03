const plugin = require('tailwindcss/plugin')
const merge = require('lodash.merge')
const castArray = require('lodash.castarray')
const uniq = require('lodash.uniq')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

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
        'dark',
      ]
      modifiers = modifiers === undefined ? DEFAULT_MODIFIERS : modifiers
      const config = theme('ghostTypography')

      const all = uniq([
        'DEFAULT',
        ...modifiers,
        ...Object.keys(config).filter((modifier) => !DEFAULT_MODIFIERS.includes(modifier)),
      ])

      addComponents(
        all.map((modifier) => ({
          [modifier === 'DEFAULT' ? `.${className}` : `.${className}-${modifier}`]: configToCss(
            config[modifier]
          ),
        })),
        variants('ghostTypography')
      )
    }
  },
  () => ({
    theme: {
      ghostTypography: theme => ({
        'DEFAULT': {
          'css': [{
            '.kg-card': {
              background: theme('colors.gray.100'),
              color: theme('colors.gray.700'),

              a: {
                color: theme('colors.gray.900'),
              }
            }
          }, {
            '.kg-card': {
              padding: `${theme('spacing.8')}`,
              borderRadius: theme('borderRadius.xl'),

              a: {
                textDecoration: 'none',
              },

              img: {
                margin: '0',
              },

              '&.kg-embed-card': {
                position: 'relative',
                overflow: 'hidden',
                padding: '0',
                paddingBottom: '56.25%',

                'iframe': {
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: '0',
                  left: '0',
                  right: '0',
                  bottom: '0',
                }
              },

              '.kg-bookmark-container': {
                display: 'flex',
                alignItems: 'center',
                justifyItems: 'flex-start',

                '.kg-bookmark-content': {
                  width: '100%',

                  '.kg-bookmark-title': {
                    fontSize: em(20, 16),
                    lineHeight: theme('lineHeight.6'),
                    marginBottom: theme('spacing.3'),
                  },

                  '.kg-bookmark-description': {
                    lineHeight: theme('lineHeight.6'),
                    fontWeight: theme('fontWeight.normal'),
                  },

                  '.kg-bookmark-metadata': {
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: theme('spacing.3'),
                    fontSize: em(14, 16),
                  },

                  '.kg-bookmark-metadata > *:not(:last-child)': {
                    marginRight: theme('spacing.2'),
                  }
                },

                '.kg-bookmark-thumbnail': {
                  width: theme('spacing.64'),
                  height: theme('spacing.36'),
                  flexShrink: '0',
                  paddingLeft: theme('spacing.4'),

                  img: {
                    display: 'block',
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%',
                    borderRadius: theme('borderRadius.lg'),
                  }
                }
              }
            }

          }]
        },
        'dark': {
          'css': [{
            '.kg-card': {
              background: theme('colors.gray.900'),
              color: theme('colors.gray.100'),

              a: {
                color: theme('colors.gray.100'),
              },
            }
          }]
        }
      })
    },
    variants: { ghostTypography: ['responsive', 'dark'] },
  })
)
