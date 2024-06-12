import { useState, useEffect } from 'react';
import { fetchPartnerProfile } from '../../lib/api/partners';

export default function PartnerProfile({ partnerId }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (partnerId) {
      fetchPartnerProfile(partnerId).then(setProfile);
    }
  }, [partnerId]);

  if (!profile) {
    return <div>Select a partner to see their profile</div>;
  }

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
    </div>
  );
}
