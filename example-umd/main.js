'use strict';

var Example = React.createClass({
  getInitialState: function () {
    return { msg: '' };
  },

  onChange: function (isVisible) {
    this.setState({
      msg: 'Element is now ' + (isVisible ? 'visible' : 'hidden')
    });
  },

  render: function () {
    var self = this;

    return (
      React.createElement("div", null,
        React.createElement("p", {className: "msg"}, this.state.msg),
        React.createElement("div", {className: "before"}),
        React.createElement(VisibilitySensor, {
          containment: this.props.containment,
          onChange: this.onChange,
          minTopValue: this.props.minTopValue,
          partialVisibility: this.props.partialVisibility
        },
          React.createElement("div", {className: "sensor"})
        ),
        React.createElement("div", {className: "after"})
      )
    );
  }
});

ReactDOM.render(React.createElement(Example), document.getElementById('example'));

var container = document.getElementById('example-container');
var elem = container.querySelector('.inner');
container.scrollTop = 320;
container.scrollLeft = 320;
ReactDOM.render(React.createElement(Example, {
  containment: container,
  minTopValue: 10,
  partialVisibility: true
}), elem);
