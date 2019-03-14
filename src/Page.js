import * as React from "react";
import Jumbotron from "./Jumbotron";

import UnitatiMedicale from "./UnitatiMedicale";
import Media from "reactstrap/es/Media";

class Page extends React.Component {
    render() {
        return (
            <div>
                {(() => {
                    switch (this.props.currentPage) {
                        case 'home':
                            return <div>
                                Home
                            </div>;

                        case 'medici':
                            // return <MyTable param={medici}/>;
                            return <div> medici </div>;

                        case 'unitati medicale':
                            // return <MyTable param={locatii}/>;
                            // return <ExpandRow/>;

                            return <UnitatiMedicale/>
                        default:
                            return null;
                    }
                })()}
            </div>
        )
    }

}

export default Page;