import React, { Component } from 'react'


export default class News_items extends Component {
    render() {
        let {title, description, Imageurl, newsUrl} = this.props
        return (
            <div>
                <div className="card">
                    <img src={Imageurl} className="card-img-top" alt=".." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>

            </div>
        )
    }
}
