import { useState, useEffect } from 'react';
import PartnerList from '../components/Partners/PartnerList';
import PartnerProfile from '../components/Partners/PartnerProfile';
import { fetchPartners } from '../lib/api/partners';
import { useUser } from '../lib/hooks/useUser';

export default function Partners() {
  const { user } = useUser();
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    if (user) {
      fetchPartners(user.uid).then(setPartners);
    }
  }, [user]);

  return (
    <div>
      <h1>Accountability Partners</h1>
      <PartnerList partners={partners} />
      <PartnerProfile />
    </div>
  );
}
