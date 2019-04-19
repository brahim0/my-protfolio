import React, { Component } from 'react'

export default class Langue extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    {this.props.langue}
                </div>
                <div className="col-12">
                    <div className="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow={this.props.progress}
                            aria-valuemin="0" aria-valuemax="100" style={{width: this.props.percent}}>
                            <span class="sr-only">70% Complete</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
