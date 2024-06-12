export default function PartnerList({ partners }) {
  return (
    <div>
      <h2>Partner List</h2>
      <ul>
        {partners.map(partner => (
          <li key={partner.id}>{partner.name}</li>
        ))}
      </ul>
    </div>
  );
}
