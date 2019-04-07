import React from 'react';

class UserInformation extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className={"form-group row"}>
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Firstname</label>
                    <div className={"col sm-10"}>
                        <input className="form-control" id="email"
                               placeholder="Firstname"
                               value={this.props.firstname}/>
                    </div>
                </div>
                <div className={"form-group row"}>
                    <label htmlFor="username" className="col-sm-2 col-form-label">
                        Lastname</label>
                    <div className={"col sm-10"}>
                        <input className="form-control" id="email"
                               placeholder="Lastname"
                               value={this.props.lastname}/>
                    </div>
                </div>
                <div className={"form-group row"}>
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Email</label>
                    <div className={"col sm-10"}>
                        <input className="form-control" id="email"
                               placeholder="xyz@goodmovies.com"/>
                    </div>
                </div>
                <div className={"form-group row"}>
                    <label htmlFor="email" className="col-sm-2 col-form-label">
                        Phone</label>
                    <div className={"col sm-10"}>
                        <input type={"number"} className="form-control" id="email"
                               placeholder="(470) 290-9905"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInformation;
