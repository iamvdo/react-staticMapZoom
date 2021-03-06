var React = require('react');
var ReactDOM = require('react-dom');
var StaticMapZoom = require('../../dist/StaticMapZoom');
var createMapZoom = React.createFactory(StaticMapZoom);

window.onload = function () {
    ReactDOM.render(createMapZoom({
        zooms: [1, 8, 16],
        center: {
            lat: 48.85,
            lng: 2.35
        },
        width: 300,
        height: 150,
        reticle: true
    }), document.getElementById('container'));
};
