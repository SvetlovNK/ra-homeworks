class Map extends React.Component {
  constructor(props) {
    super(props);

    this.map = undefined;
    this.markers = [];
  }

  removeMarkers = () => {
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = [];
  };

  addMarkers = (points) => {
    this.markers = points.map(({lat, lon}) =>
      new google.maps.Marker({
        position: {lat: Number(lat), lng: Number(lon)},
      })
    );
  };

  setMarkersToMap = () => {
    this.markers.forEach(marker => marker.setMap(this.map));
  };

  fitZoomToMarkers = () => {
    const bounds = new google.maps.LatLngBounds();

    this.markers.forEach(marker => bounds.extend(marker.getPosition()));
    this.map.fitBounds(bounds);
  };

  setMarkers = (points) => {
    this.removeMarkers();
    this.addMarkers(points);
    this.setMarkersToMap();
    this.fitZoomToMarkers();
  };

  initMap = () => {
    this.map = new google.maps.Map(document.getElementById('gmap'), {
      zoom: 4,
      center: {lat: -25.344, lng: 131.036}
    });

    this.addMarkers(this.markers);
  };

  componentWillReceiveProps(nextProps) {
    const {points} = this.props;

    if (points !== nextProps.points) {
      this.setMarkers(nextProps.points);
    }
  }

  componentDidMount() {
    this.initMap();
  }

  render() {
    return (
      <div id="gmap" className="google-map"/>
    );
  }
}
