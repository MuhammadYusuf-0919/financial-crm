const Typography = theme => {
  return {
    h1: {
      fontWeight: 500,
      letterSpacing: '-1.5px',
      color: theme.palette.text.primary
    },
    h2: {
      fontWeight: 500,
      letterSpacing: '-0.5px',
      color: theme.palette.text.primary
    },
    h3: {
      fontWeight: 500,
      letterSpacing: 0,
      color: theme.palette.text.primary
    },
    h4: {
      fontWeight: 500,
      letterSpacing: '0.25px',
      color: theme.palette.text.primary
    },
    h5: {
      fontWeight: 500,
      letterSpacing: 0,
      color: theme.palette.text.primary
    },
    h6: {
      letterSpacing: '0.15px',
      color: theme.palette.text.primary
    },
    subtitle1: {
      letterSpacing: '0.15px',
      color: theme.palette.text.primary
    },
    subtitle2: {
      letterSpacing: '0.1px',
      color: theme.palette.text.primary
    },
    body1: {
      letterSpacing: '0.15px',
      color: theme.palette.text.primary
    },
    body2: {
      lineHeight: 1.429,
      letterSpacing: '0.15px',
      color: theme.palette.text.secondary
    },
    button: {
      letterSpacing: '0.4px',
      color: theme.palette.text.primary
    },
    caption: {
      lineHeight: 1.25,
      letterSpacing: '0.4px',
      color: theme.palette.text.secondary
    },
    overline: {
      letterSpacing: '1px',
      color: theme.palette.text.secondary
    }
  }
}

export default Typography
