//引入react jsx写法的必须
import React from 'react';
//引入需要用到的页面组件 
import BlogList from './pages/blog-list/BlogList';
//引入一些模块
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function router() {
  return (
    <Router>
      <Switch>
        <Route path="/bloglist" component={BlogList} />
      </Switch>
    </Router>)
}

export default router;