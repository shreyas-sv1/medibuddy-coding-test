import { useState } from 'react'
import SearchBar from './components/SearchBar';
import { searchMedicnes } from './services/drupApi';

function App() {
  const[medicines, setMedicines]=useState([]);
  async function handleSearch(query) {
    try{
      const results =await 
      searchMedicnes(query);
      console.log("FDA Results",results);
      setMedicines(results);
    }
    catch (error) {
      console.error(error);
    }
  }
  return (
    <main>
      <h1>Medice Search</h1>
      <p>Search for medicine by brand name</p>
      <SearchBar onSearch={handleSearch} />
      <div>
        {medicines.map((medicine, index)=>(
          <div key={index}>
            <pre>{JSON.stringify(medicine.openfda,null,2)}</pre>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App
