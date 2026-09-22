import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MedicineCard from "./components/MedicineCard";
import { searchMedicines } from "./services/drupApi";

function App() {
  const [medicines, setMedicines] = useState([]);

  async function handleSearch(query) {
    try {
      const results = await searchMedicines(query);
      setMedicines(results);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <h1>Medicine Search</h1>
      <p>Search for medicine by brand name</p>

      <SearchBar onSearch={handleSearch} />

      <div>
        {medicines.map((medicine, index) => (
          <MedicineCard
            key={index}
            medicine={medicine}
            onClick={() => console.log(medicine)}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
