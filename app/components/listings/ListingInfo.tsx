'use client';

import useCountries from '@/app/hooks/useCountries';
import { SafeUser } from '@/app/types';
import { User } from '@prisma/client';
import React from 'react';
import Avatar from '../Avatar';
import ListingCategory from './ListingCategory';

interface ListingInfoProps {
  user: SafeUser | null;
  description: string;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
  category:
    | {
        label: string;
        icon: any;
        description: string;
      }
    | undefined;
  locationValue: string;
}
const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  roomCount,
  bathroomCount,
  guestCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="text-xl font-semibold flex flex-row items-center gap-2">
        <div>Hosted by {user?.name}</div>
        <Avatar src={user?.image} />
      </div>
      <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
        <div>{guestCount} Guests</div>
        <div>{roomCount} Rooms</div>
        <div>{bathroomCount} Bathrooms</div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
    </div>
  );
};

export default ListingInfo;
