import * as React from "react";

class Page extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>{this.props.currentPage.charAt(0).toUpperCase() + this.props.currentPage.slice(1)}</h2>
                <p>This is the {this.props.currentPage} page</p>
                {/* example of using chain methods inside the curly brackets to transform and concat string */}
            </div>
        )
    }
}
export default Page;