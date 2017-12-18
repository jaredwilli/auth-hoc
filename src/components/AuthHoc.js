import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class AuthHoc extends Component {
        componentWillMount() {
            if (!this.props.authenticated) {
                this.props.history.push('/');
            }
        }

        componentWillUpdate(nextProps, prevProps) {
            if (!nextProps.authenticated) {
                this.props.history.push('/');
            }
        }

        render() {
            console.log(this.props);
            return <ComposedComponent {...this.props} />;
        };
    };

    function mapStateToProps(state) {
        return {
            authenticated: state.authenticated
        };
    }

    return connect(mapStateToProps)(AuthHoc)
}
