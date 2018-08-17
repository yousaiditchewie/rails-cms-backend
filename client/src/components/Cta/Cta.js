import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cta extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    header: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired,
    ctaText: PropTypes.string,
    ctaHref: PropTypes.string,
    className: PropTypes.string
  };

  state = {
    ctaBackgroundColor: '#fff',
    target: '',
    rel: ''
  };

  componentDidMount() {
    this.setBackgroundColor();
    this.setTargetAndRel();
  }

  render() {
    const { header, copy, ctaText, ctaHref, className } = this.props;
    return (
      <div
        className={'Cta ' + (className ? 'Cta-' + className : '')}
        style={{ backgroundColor: this.state.ctaBackgroundColor }}
      >
        <h2
          className="Cta--heading"
          dangerouslySetInnerHTML={{ __html: header }}
        />
        {ctaHref === undefined ? (
          <p
            className="Cta--copy html"
            dangerouslySetInnerHTML={{ __html: copy }}
          />
        ) : (
          <p className="Cta--copy">
            {copy}
            <a
              href={ctaHref}
              target={this.state.target}
              rel={this.state.rel}
              className="Footer-cta--email"
            >
              {ctaText}
            </a>
          </p>
        )}
      </div>
    );
  }

  setBackgroundColor = () => {
    if (this.props.backgroundColor) {
      this.setState({ ctaBackgroundColor: this.props.backgroundColor });
    }
  };

  setTargetAndRel = () => {
    if (this.props.ctaHref === undefined) {
      return;
    }

    if (!this.props.ctaHref.includes('thebiscuit.bar')) {
      this.setState({ target: '_blank', rel: 'noopener noreferrer' });
    }
  };
}
