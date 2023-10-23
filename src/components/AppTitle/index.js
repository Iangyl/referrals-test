import { fontTitle } from '../../styles/constants';
import styled from 'styled-components'

const AppTitle = styled.h1`
  font-family: ${fontTitle.fontFamily};
  font-weight: ${fontTitle.fontWeight};
  font-size: ${fontTitle.fontSize};
  margin-bottom: 15px;
`
export default AppTitle;
