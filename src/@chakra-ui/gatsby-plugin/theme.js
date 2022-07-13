// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react';
import {
  CustomButtonStyle,
  CustomHeadingStyle,
  CustomLinkStyle,
  CustomTextStyle,
  ResponsiveGridComponent,
  ResponsiveFlexComponent,
} from '../custom-components';

const theme = {
  colors: {
    primary: {
      highlight: '#48BB78', // green.400
      background: '#C6F6D5', // green.100
    },
    gray: {
      background: '#EEEEEE',
      subHeading: '#777777',
    },
  },
  components: {
    Button: CustomButtonStyle,
    Text: CustomTextStyle,
    Heading: CustomHeadingStyle,
    Link: CustomLinkStyle,
    ResponsiveGrid: ResponsiveGridComponent,
    ResponsiveFlex: ResponsiveFlexComponent,
  },
  fonts: {
    heading: `'utopia-std-display', serif`,
    body: `'rubik', sans-serif`,
  },
  fontSizes: {
    '3xl': '1.75rem',
  },
};

export default extendTheme(theme);
