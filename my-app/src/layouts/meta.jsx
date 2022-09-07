import React, { Component } from "react";
import { Helmet } from 'react-helmet';

class Meta extends Component {
  render() {
    return (
      <div>
            <Helmet>
              <title>{this.props.meta_title}</title>
              <meta name="description" content="" />
              <meta name="author" content="" />
              <meta name="robots" content="" />
              <meta property="og:url" content="" />
              <meta property="og:type" content="website" />
              <meta property="og:title" content=">" />
              <meta property="og:description" content="" />
              <meta property="og:image" content="" />
            </Helmet>
      </div>
    );
  }
}

export default Meta;
