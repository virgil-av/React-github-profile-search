import React, { Component } from 'react';
import RepoList from './RepoList';

class Profile extends Component {
    render() {
        return (
        <div className="panel panel-default">
            <div className="panel-heading">{this.props.userData.name}</div>
            <div className="panel-body">
                <div className="row">
                    <div className="col-md-4">
                        <img src={this.props.userData.avatar_url} className="thumbnail" style={{width: '100%'}} />
                        <a href={this.props.userData.html_url} target="_blank" className="btn btn-default btn-block">View Profile</a>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                                <span className="label label-default">{this.props.userData.public_repos} Public Repos</span>
                                <span className="label label-primary">{this.props.userData.public_gists} Public Gist</span>
                                <span className="label label-success">{this.props.userData.followers} Followers</span>
                                <span className="label label-info">{this.props.userData.following} Following</span>
                            </div>
                        </div>
                        <hr />
                            <ul className="list-group">
                                <li className="list-group-item"><strong>Username: {this.props.userData.login}</strong></li>
                                <li className="list-group-item"><strong>Location: {this.props.userData.location}</strong></li>
                                <li className="list-group-item"><strong>Email: {this.props.userData.email}</strong></li>
                            </ul>

                    </div>
                </div>
                <hr/>
                <RepoList userRepos = {this.props.userRepos} />
            </div>
        </div>
        );
    }
}

export default Profile;
