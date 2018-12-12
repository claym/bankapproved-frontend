import { Helmet } from 'react-helmet';
import App from '../components/App';
import withData from '../libraries/withData';
import { dump } from '../libraries/helpers';
import RequestCreate from '../components/RequestCreate';

export default withData(props => (
  <App>
    <Helmet>
      <title>requestCreate</title>
    </Helmet>
    <div>
      <h1>requestCreate</h1>
      <p>HELLO WORLD! HELLO FROM RAN!</p>
      <RequestCreate />
      <hr />
      <pre>{dump(props)}</pre>
    </div>
  </App>
));
