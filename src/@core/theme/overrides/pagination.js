// ** Util Import
import { hexToRGBA } from '@/@core/utils/hex-to-rgba'

const Pagination = theme => {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        outlined: {
          borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
        },
        outlinedPrimary: {
          '&.Mui-selected': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.12),
            '&:hover': {
              backgroundColor: `${hexToRGBA(theme.palette.primary.main, 0.24)} !important`
            }
          }
        },
        outlinedSecondary: {
          '&.Mui-selected': {
            backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.12),
            '&:hover': {
              backgroundColor: `${hexToRGBA(theme.palette.secondary.main, 0.24)} !important`
            }
          }
        },
        rounded: {
          borderRadius: 8
        }
      }
    }
  }
}

export default Pagination
