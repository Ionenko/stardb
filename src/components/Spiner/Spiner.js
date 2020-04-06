import React from 'react';
import './Spiner.scss';

const Spiner = () => {
    return (
        <div className="lds-css ng-scope">
            <div className="lds-double-ring">
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Spiner;