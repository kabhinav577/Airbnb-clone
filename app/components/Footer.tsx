import React from 'react';
import Container from './Container';

const footerData = [
  {
    name: 'Support',
    links: [
      'Help Centre',
      'AirCover',
      'Anti-discrimination',
      'Disability support',
      'Cancellation options',
      'Report neighbourhood concern',
    ],
  },
  {
    name: 'Hosting',
    links: [
      'Airbnb your home',
      'AirCover for Hosts',
      'Hosting resources',
      'Community forum',
      'Hosting responsibly',
    ],
  },
  {
    name: 'Airbnb',
    links: [
      'Newsroom',
      'New features',
      'Careers',
      'Investors',
      'Airbnb.org emergency stays',
    ],
  },
];

const Footer = () => {
  return (
    <div className="w-full bg-gray-50 py-4">
      <Container>
        <div className="w-full flex flex-col md:flex-row justify-start items-start mb-2 md:justify-between gap-4">
          {footerData.map((data) => (
            <div key={data.name} className="w-full">
              <div className="flex flex-col items-start justify-start">
                <h3 className="font-semibold pb-2">{data.name}</h3>
                {data.links.map((link) => (
                  <p
                    key={link}
                    className="text-sm font-light text-gray-700 pb-2 cursor-pointer hover:underline"
                  >
                    {link}
                  </p>
                ))}
              </div>
              {data.name !== 'Airbnb' && <hr className="md:hidden w-full" />}
            </div>
          ))}
        </div>
        <hr className="w-full" />
        {/* Copyrights and CompanyName info */}
        <div className="flex flex-col items-center justify-center gap-2 xl:justify-start xl:items-start xl:flex-row mt-4 text-sm font-light text-gray-700">
          <p className="">© 2024 Airbnb, Inc.</p>
          <div className="flex justify-center items-center gap-2">
            <p className="hover:underline cursor-pointer">Privacy</p>
            &middot;
            <p className="hover:underline cursor-pointer">Terms</p>
            &middot;
            <p className="hover:underline cursor-pointer">Sitemap</p>
            &middot;
            <p className="hover:underline cursor-pointer">Company details</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
