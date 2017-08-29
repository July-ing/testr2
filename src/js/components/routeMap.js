import {Router, Route, Link, browserHistory,IndexRoute} from 'react-router';
import React from 'react';

import PCApp from './pcApp';
import PCHome from './pcHome';
import PCStore from './pcStore';
import PCStoreId from './pcStoreId';
import PCNotFound from './pcNotFound';
import PCVideo from './pcVideo';
import PCVideoId from './pcVideoId';
import PCCharacterId from './pcCharacterId';
import PCCharacter from './pcCharacter';


export default class RouteMap extends React.Component {
    updateHandle() {
        console.log('每次router变化之后都会触发')
    }
    render() {
        return (
             <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={PCApp}>
                    <IndexRoute component={PCHome}/>
                    <Route path='store' component={PCStore}/>
                    <Route path='store/:id' component={PCStoreId}/>
                    <Route path='video' component={PCVideo}/>
                    <Route path='video/:id' component={PCVideoId}/>
                    <Route path='character/:id' component={PCCharacterId}/>
                    <Route path='character' component={PCCharacter}/>
                    <Route path="*" component={PCNotFound}/>
                </Route>
            </Router>
        )
    }
}