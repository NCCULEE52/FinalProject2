var skycons = new Skycons({"color": "white"});

  skycons.add("route1", Skycons.PARTLY_CLOUDY_DAY);
  skycons.add("route2", Skycons.CLEAR_DAY);
  skycons.add("route3", Skycons.CLOUDY);
  skycons.add("route4", Skycons.RAIN);
  skycons.add("rain", Skycons.RAIN);

  skycons.play();
  
  skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);