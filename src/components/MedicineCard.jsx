function MedicineCard({ medicine, onClick }) {
  const data = medicine.openfda || {};

  const brandName = data.brand_name?.[0] || "Unknown";
  const genericName = data.generic_name?.[0] || "Not available";
  const manufacturer = data.manufacturer_name?.[0] || "Not available";
  const productType = data.product_type?.[0] || "Not available";
  const route = data.route?.[0] || "Not available";

  return (
    <div onClick={onClick}>
      <h2>{brandName}</h2>
      <p>
        <strong>Generic:</strong> {genericName}
      </p>
      <p>
        <strong>Manufacturer:</strong> {manufacturer}
      </p>
      <p>
        <strong>Product Type:</strong> {productType}
      </p>
      <p>
        <strong>Route:</strong> {route}
      </p>
    </div>
  );
}

export default MedicineCard;
