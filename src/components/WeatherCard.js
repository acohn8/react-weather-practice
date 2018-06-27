import React from 'react';
import { Card } from 'semantic-ui-react';

const WeatherCard = (props) => {
  const weather = props.weather[0];

  return (
    <Card
      header={weather.nameToDisplay}
      meta={`Currently ${weather.conditions} and ${Math.round(weather.tempreture)} degrees`}
      description={`Today, the high is ${Math.round(weather.high)} degrees and the low is ${Math.round(weather.low)} degrees.`}
    />
  );
};

export default WeatherCard;
