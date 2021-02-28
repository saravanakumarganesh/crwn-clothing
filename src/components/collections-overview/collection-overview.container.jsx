import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../with-spinner/with-spinner.componenet';
import { selectIsCollectionsFetching } from '../../redux/shop/shop.selectors';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const CollectionsOverviewContainer = connect(mapStateToProps)(
  WithSpinner(CollectionsOverview)
);

export default CollectionsOverviewContainer;
