import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getlist, clearlist, setscrolltop } from '../../reducer/artical.redux';

// import Gotop from 'react-go-top';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Bottom from '../../components/Bottom/Bottom';

interface Props {
  artical: any,
  getlist: Function,
  clearlist: Function,
  setscrolltop: Function
}

// @ts-ignore
@connect(
  state => state,
  { getlist, clearlist, setscrolltop }
)
export default class BlogList extends PureComponent<any>{
  constructor(props: Props) {
    super(props)
  }
  render() {
    const { artical, getlist, clearlist } = this.props;
    return (
      <div className="Home">
        <Header active={1} />
        {/* <Gotop /> */}
        <List artical={artical} getlist={getlist} clearlist={clearlist} />
        <Bottom />
      </div>
    );
  }
}