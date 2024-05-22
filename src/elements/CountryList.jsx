import NavBar from './Navbar';

//Method of api call found https://www.freecodecamp.org/news/make-api-calls-in-javascript/
function collectData(){
  const url= 'https://cs464p564-frontend-api.vercel.app/api/countries'
  const countries=[]

  fetch(url)
    .then(response =>{
      if(!response.ok){
        throw new Error('Network response was not ok')
      }
      return response.json();
    })
    .then(data=>{
      for (i=0; i<13; i+=1){
        const country = {
          id: data[i].id,
          name: data[i].name
        }
        countries.push(country)
        console.log(countries)
      }
    })
    .catch(error=>{
      console.error('Error:', error)
    })
}

export default function CountryList() {
  <NavBar />;
}
