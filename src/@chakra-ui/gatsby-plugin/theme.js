// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react';
import {
  CustomButtonStyle,
  CustomHeadingStyle,
  CustomLinkStyle,
  CustomTextStyle,
  ResponsiveGridComponent,
  SectionComponent,
} from '../custom-components';

const theme = {
  colors: {
    primary: {
      highlight: '#48BB78', // green.400
      background: '#C6F6D5', // green.100
    },
  },
  components: {
    Button: CustomButtonStyle,
    Text: CustomTextStyle,
    Heading: CustomHeadingStyle,
    Section: SectionComponent,
    Link: CustomLinkStyle,
    ResponsiveGrid: ResponsiveGridComponent,
  },
  fonts: {
    body: `'minion-pro', serif`,
    heading: `'sofia-pro', sans-serif`,
  },
};

export default extendTheme(theme);
