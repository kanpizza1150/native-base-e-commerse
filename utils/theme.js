import { extendTheme } from 'native-base'

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        solid: ({ colorScheme }) => {
          return {
            backgroundColor: `${colorScheme}.900`,
            color: `${colorScheme}.100`,
            rounded: `3xl`,
          }
        },
      },
    },
  },
  colors: {
    primary: {
      100: '#ffffff',
      200: '#ededed',
      300: '#c9c9c9',
      400: '#a6a6a6',
      500: '#4d4d4d',
      600: '#3c3c3c',
      700: '#1e1e1e',
      800: '#111111',
      900: '#000000',
    },
  },

  config: {
    initialColorMode: 'light',
  },
  //   fontConfig: {
  //     Roboto: {
  //       100: {
  //         normal: 'Roboto-Light',
  //         italic: 'Roboto-LightItalic',
  //       },
  //       200: {
  //         normal: 'Roboto-Light',
  //         italic: 'Roboto-LightItalic',
  //       },
  //       300: {
  //         normal: 'Roboto-Light',
  //         italic: 'Roboto-LightItalic',
  //       },
  //       400: {
  //         normal: 'Roboto-Regular',
  //         italic: 'Roboto-Italic',
  //       },
  //       500: {
  //         normal: 'Roboto-Medium',
  //       },
  //       600: {
  //         normal: 'Roboto-Medium',
  //         italic: 'Roboto-MediumItalic',
  //       },
  //       700: {
  //         normal: 'Roboto-Bold',
  //         italic: 'Roboto-BoldItalic',
  //       },
  //       900: {
  //         normal: 'Roboto-Bold',
  //         italic: 'Roboto-BoldItalic',
  //       },
  //     },
  //   },

  //   fonts: {
  //     heading: 'Roboto',
  //     body: 'Roboto',
  //     mono: 'Roboto',
  //   },
})
