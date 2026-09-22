const BASE_URL = 
"https://api.fda.gov/drug/label.json";

export async function 
searchMedicnes(query ,signal) {
        const url=`${BASE_URL}?
    search=openfda.brand_name:${encodeURIComponent(query)}` + '&limit=20';
    const response =await fetch(url,{signal});
    if(response.status === 404){
        return [];
    }
    if(!response.ok){
        throw new Error("Failed to fetch");
    }
    const data =await response.json();
    return data.result || [];
}