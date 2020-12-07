import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  color: ['#7159c1', '9b59c1'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 1;
`;
