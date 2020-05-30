import React from 'react';
export default class BlogList extends React.Component<any>{
  constructor(props: { name: string }) {
    super(props)
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        Hello {JSON.stringify(this.props)}
      </div>
    );
  }
}

// ReactDOM.render(
//   <BlogList name="Taylor" />,
//   document.getElementById('hello-example')
// );