import GoogleMapReact from "google-map-react";

const Map = () => {

    const center = {
        lat: 59.95,
        lng: 30.33
      }
      const AnyReactComponent = ({ text }: any) => <div>{text}</div>;
      
  return (
    <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDwr-zk24tkiwqAG6zkZJWpKYgvu5jphSM" }}
          defaultCenter={center}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
  );
};

export default Map