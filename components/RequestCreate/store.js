import { graphql } from 'react-apollo';
// import requestCreate from './requestCreate.gql';
import loadApplicationsGql from './requestCreate.gql';

const withData = graphql(loadApplicationsGql, {
  options: () => ({
    variables: {}
  }),
  props: ({ data }) => ({
    data
  })
});
export default comp => withData(comp);
