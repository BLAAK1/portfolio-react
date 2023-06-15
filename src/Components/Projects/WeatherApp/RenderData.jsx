const RenderData = ({ data }) => {
  const icon = data.current.condition.icon;
  const temp = data.current.temp_c;
  const hum = data.current.humidity;
  const wind = data.current.wind_kph;
  return (
    <div>
      <div className="currentWeather">
        <div className="weatherIcon">
          <img src={icon} />
        </div>
        <div className="temp">
          <h2>{"🔅" + temp + "°C"}</h2>
        </div>
      </div>
      <div className="appFooter">
        <div className="humidity">
          <h2>{"💦" + hum + "%"}</h2>
        </div>
        <div className="wind">
          <h2>{"💨" + wind + " KM/h"}</h2>
        </div>
      </div>
    </div>
  );
};
export default RenderData;
