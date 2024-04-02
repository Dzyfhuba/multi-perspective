import { getPreferredTheme } from '@/helpers/mode'

const theme = {
  colors: {
    primary: '#459467',
    base100: () => getPreferredTheme() === 'light' ? '#F8F8F8' : '#OAOAOA',
  }
}

export default theme