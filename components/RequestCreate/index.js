import { RequestCreate as StyledRequestCreate } from './styles';
import connect from './store';

const RequestCreate = () => (
  <StyledRequestCreate>
    <span>RequestCreate</span>
  </StyledRequestCreate>
);

export default connect(RequestCreate);
