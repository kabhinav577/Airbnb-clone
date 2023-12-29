import EmptyState from '../components/EmptyState';

import getCurrentUser from '../actions/getCurrentUser';
import getFavoriteListing from '../actions/getFavoriteListing';
import FavoritesClient from './FavoritesClient';

const ListingPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListing();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings."
      />
    );
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
};

export default ListingPage;
