//My Second Component
var Lot = React.createClass({
  getInitialState() {
    return { /*initial state*/ };
  },
  slideToggle: function() {
    console.log('SLIDE THAT TOGGLE');
  },
  style:{
    button:{
      color:'red',
      borderRadius:5,
      backgroundColor:'#1560fb',
      fontSize:22,
      border:'none'
    }
  },
  render: function() {
    console.log(this.props.inventory);
    return (
      <div>Hello from the{this.props.title}
      <button style={this.style.button} onClick={this.slideToggle.bind(this)}>Get Lot Inventory</button>
        <ul>
        {this.props.inventory.map(function(item){
          return(<li>{item}</li>)
        })}
        </ul>
      </div>
    )
  }
});

//My First Compenent
var App = React.createClass({
  getInitialState: function () {
    return {
      query: ''
    }
  },
  style: {
    searchContainer: {
      border:'1px solid #efefef'
      padding:'1rem',
      margin:'1rem'
    }
  },
  onNewSearchValue: function(e) {
    console.log('new car entered', e.target.value);
    this.setState({
      query: e.target.value
    })
  },
  onSearchButtonClick: function(){
    console.log('You searched for ', this.state.query);
  },
  render: function() {
    return (
      <div>
      <h1>Hello. Welcome to {this.props.name}</h1>
      <div style={this.style.searchContainer}>
      <input role="search" type="text" />
      <button onClick={this.onSearchButtonClick}>Search</button>
      </div>
      <Lot title="Outdoor Lot" inventory={this.props.inventory.slice(0,2).filter => (function(item){ return item.indexOf(this.state.query) > -1 })} />
      <Lot title="Showroom" inventory={this.props.inventory.slice(2,4).filter => (function(item){ return item.indexOf(this.state.query) > -1 })} />
      </div>
    )
  }
});
