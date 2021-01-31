import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    if (this.props.location.state) {
      const {
        location: {
          state: { id, title, summary, poster, genres, year, rating },
        },
      } = this.props;

      return <h1>{title}</h1>;
    } else {
      return null;
    }
  }
}

export default Detail;
