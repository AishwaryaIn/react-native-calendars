import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.main';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      marginTop: 3,
      marginBottom: 3,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}

