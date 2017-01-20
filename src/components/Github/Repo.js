import React, { Component } from 'react';

class Repo extends Component {
    render() {
        const {repo} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-md-9">
                        <h4><a href={repo.html_url} target="_blank">{repo.name}</a></h4>
                        <p>{repo.description}</p>
                    </div>

                    <div className="col-md-3">
                        <span className="label label-default">{repo.watchers} Watchers</span>
                        <span className="label label-primary">{repo.forks} Forks</span>

                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Repo;
