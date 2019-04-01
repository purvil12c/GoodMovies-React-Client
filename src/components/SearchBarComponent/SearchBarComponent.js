import React from 'react';
import "./SearchBarComponent.css"

class SearchBarComponent extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
        return (
          <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
              <div className="searchbar">
                <input className="search_input" type="text" name="" placeholder="Search..."/>
                <a href="#" className="search_icon"><i class="fa fa-search"></i></a>
              </div>
            </div>
          </div>
        );
    }

}

export default SearchBarComponent;
