import React from "react";
import './IntroPageComponent.css'
import posed from 'react-pose';
import {Link} from 'react-router-dom'

const AnimatedDivText1 = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1}
});

const AnimatedDivText2 = posed.div({
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0}
});

const AnimatedDivVisitWebsite= posed.div({
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0}
});

const AnimatedDivFooter= posed.div({
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0}
});


class IntroPageComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isVisibleText1: false,
      isVisibleText2: false,
      isVisibleButton: false,
      isVisibleFooter: false
    }
  }

  componentDidMount() {
      setTimeout(() => {
        this.setState({ isVisibleText1: !this.state.isVisibleText1 });
      }, 1000);

      setTimeout(() => {
        this.setState({ isVisibleText2: !this.state.isVisibleText2 });
      }, 2000);

      setTimeout(() => {
        this.setState({ isVisibleButton: !this.state.isVisibleButton });
      }, 3000);

      setTimeout(() => {
        this.setState({ isVisibleFooter: !this.state.isVisibleFooter });
      }, 3000);
  }

  render(){
    return(
      <div className="center container">

        <AnimatedDivText1 pose={this.state.isVisibleText1 ? 'visible' : 'hidden'}>
          <h1 className="white-title">Welcome to GoodMovies</h1>
        </AnimatedDivText1>

        <AnimatedDivText2 pose={this.state.isVisibleText2 ? 'visible' : 'hidden'}>
          <h4 className="white-title">Discover your next favorite.</h4>
        </AnimatedDivText2>
        <br/>

        <AnimatedDivVisitWebsite pose={this.state.isVisibleText2 ? 'visible' : 'hidden'}>
          <Link to="/home" className="btn btn-outline-success">Get Started</Link>
        </AnimatedDivVisitWebsite>

        <AnimatedDivFooter pose={this.state.isVisibleFooter ? 'visible' : 'hidden'} className="footer">
          <div className="row">
            <div className="col-xs-12 col-md-4 white-title">
              <img className="footer-image" src="https://media.licdn.com/dms/image/C4E03AQEUs_lMYd9YgA/profile-displayphoto-shrink_200_200/0?e=1560988800&v=beta&t=VuK-IAB0bpQQLB9gTWUUkl8nR8QhpEWBOoTqK9i1rIA"/>
              <br/>
              <h4>Purvil Bambharolia</h4>
            </div>
            <div className="col-xs-12 col-md-4 white-title">
              <img className="footer-image" src="https://media.licdn.com/dms/image/C4E03AQHL5FnK_7zCGQ/profile-displayphoto-shrink_200_200/0?e=1560988800&v=beta&t=KHNIMv-zY1ZNd95kiBb-jxUWRcvz8b8V9IHwBqhINWM"/>
              <br/>
              <h4>Dipen Patel</h4>
            </div>
            <div className="col-xs-12 col-md-4 white-title">
              <img className="footer-image" src="https://media.licdn.com/dms/image/C4E03AQEi3D9RfMR83A/profile-displayphoto-shrink_800_800/0?e=1560988800&v=beta&t=ecP3shKYBwV6SI3C_PwJw5QmPfeZ9VOOd9BRyhz2xrw"/>
              <br/>
              <h4>Shivam Bhalla</h4>
            </div>
          </div>
        </AnimatedDivFooter>

      </div>
    )
  }
}

export default IntroPageComponent;
