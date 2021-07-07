import React, {useEffect, useState} from "react";
import "./App.css";
import Info from "./components/Info";
import Weather from "./components/Weather";
import Form from "./components/Form";


const API_KEY = "30401e8c74d0303c857e675a1882143f"


/*class App extends React.Component {

/!* state = {
      error: null,
      data: []
    };

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Kazan&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                data: result.data
              });
            },
            (error) => {
              this.setState({
                error
              });
            }
        )
  }*!/

 /!* weatherAPI = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }*!/


  render() {
    return (
      <div className="app-container">
        <Info/>
        <Form weather={this.weatherAPI}/>
        <Weather/>
      </div>
    );
  }
}

export default App;*/


const App =()=> {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [city, setCity] = useState('Kazan');

  console.log(city)

  const getCity = (city) => {
    setCity(city)
  }

  /*useEffect(() => {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(
            (result) => {
              debugger
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
        )
  }, [setCity])*/

  /*if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {*/
    return (
        <div className="app-container">
          <Info/>
          <Form city={getCity}/>
          <Weather/>
        </div>
    );

}

export default App;

/* useEffect(()=>{
 const weatherAPI = async (e) => {
        e.preventDefault();
        let city = e.target.elements.city.value;
        const api_url = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=Kazan&appid=${API_KEY}&units=metric`
        );
        const data = await api_url.json();
        console.log(data);
 }
},[])

return (
 <div className="app-container">
      <Info />
     <Form weather={weatherAPI} />
    <Weather />
    </div>
)
}*/