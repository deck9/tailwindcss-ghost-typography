const round = (num) =>
    num
        .toFixed(7)
        .replace(/(\.[0-9]+?)0+$/, '$1')
        .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = (theme) => ({
    DEFAULT: {
        css: [
            {
                '[class~="kg-card"]': {
                    background: theme('colors.gray.100'),
                    color: theme('colors.gray.700'),
                },

                '[class~="kg-card"] a': {
                    color: theme('colors.gray.900'),
                }
            },
            {
                '[class~="kg-card"]': {
                    padding: `${theme('spacing.6')}`,
                    borderRadius: theme('borderRadius.lg'),
                },

                '[class~="kg-card"] a': {
                    textDecoration: 'none',
                },

                '[class~="kg-card"] img': {
                    margin: '0',
                },

                '[class~="kg-card"] [class~="kg-embed-card"]': {
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '0',
                    paddingBottom: '56.25%',
                },

                '[class~="kg-card"] [class~="kg-embed-card"] iframe': {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"]': {
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    flexDirection: 'column-reverse',
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"] [class~="kg-bookmark-content"]': {
                    width: '100%',
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"] [class~="kg-bookmark-content"] [class~="kg-bookmark-title"]': {
                    fontSize: em(20, 16),
                    lineHeight: theme('lineHeight.6'),
                    marginBottom: theme('spacing.3'),
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"] [class~="kg-bookmark-content"] [class~="kg-bookmark-description"]': {
                    lineHeight: theme('lineHeight.6'),
                    fontWeight: theme('fontWeight.normal'),
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"] [class~="kg-bookmark-content"] [class~="kg-bookmark-metadata"]': {
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: theme('spacing.3'),
                    fontSize: em(14, 16),
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"] [class~="kg-bookmark-content"] [class~="kg-bookmark-metadata"] > *:not(:last-child)': {
                    marginRight: theme('spacing.2'),
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"] [class~="kg-bookmark-thumbnail"]': {
                    width: '100%',
                    flexShrink: '0',
                    paddingBottom: theme('spacing.4'),
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"] [class~="kg-bookmark-thumbnail"] img': {
                    display: 'block',
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%',
                    borderRadius: theme('borderRadius.lg'),
                }
            }
        ]
    },
    lg: {
        css: [
            {
                '[class~="kg-card"]': {
                    padding: `${theme('spacing.8')}`,
                    borderRadius: theme('borderRadius.xl'),
                },

                '[class~="kg-card"] a': {
                    textDecoration: 'none',
                },

                '[class~="kg-card"] img': {
                    margin: '0',
                },

                '[class~="kg-card"] [class~="kg-embed-card"]': {
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '0',
                    paddingBottom: '56.25%',
                },

                '[class~="kg-card"] [class~="kg-embed-card"] iframe': {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"]': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyItems: 'flex-start',
                    flexWrap: 'nowrap',
                    flexDirection: 'row',
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"] [class~="kg-bookmark-content"]': {
                    width: '100%',
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"] [class~="kg-bookmark-content"] [class~="kg-bookmark-title"]': {
                    fontSize: em(20, 16),
                    lineHeight: theme('lineHeight.6'),
                    marginBottom: theme('spacing.3'),
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"] [class~="kg-bookmark-content"] [class~="kg-bookmark-description"]': {
                    lineHeight: theme('lineHeight.6'),
                    fontWeight: theme('fontWeight.normal'),
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"] [class~="kg-bookmark-content"] [class~="kg-bookmark-metadata"]': {
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: theme('spacing.3'),
                    fontSize: em(14, 16),
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"] [class~="kg-bookmark-content"] [class~="kg-bookmark-metadata"] > *:not(:last-child)': {
                    marginRight: theme('spacing.2'),
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"] [class~="kg-bookmark-thumbnail"]': {
                    width: theme('spacing.64'),
                    height: theme('spacing.36'),
                    flexShrink: '0',
                    paddingLeft: theme('spacing.4'),
                },

                '[class~="kg-card"] [class~="kg-bookmark-container"] [class~="kg-bookmark-thumbnail"] img': {
                    display: 'block',
                    objectFit: 'cover',
                    height: '100%',
                    width: '100%',
                    borderRadius: theme('borderRadius.lg'),
                }
            }
        ]
    },
    dark: {
        css: [
            {
                '[class~="kg-card"]': {
                    background: theme('colors.gray.900'),
                    color: theme('colors.gray.100'),
                },

                '[class~="kg-card"] a': {
                    color: theme('colors.gray.100'),
                    textDecoration: 'none',
                },
            }
        ]
    }
})
