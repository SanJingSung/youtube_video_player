import React from 'react';
import BackButton from './BackButton';
import VideoTitle from './VideoTitle';
import VideoImage from './VideoImage';
import VideoDetails from './VideoDetails';

function DetailScreen() {
    return (
        <div className="container-fluid mt-3 mb-3">
            <div className="row">

                <div className="col-md-6">
                    <div className="mb-4">
                        <BackButton />
                    </div>
                    <div>
                        <VideoTitle />
                    </div>
                    <div>
                        <VideoImage />
                    </div>
                </div>
                <div className="col-md-6 mt-5 pt-5">
                    <VideoDetails />
                </div>
            </div>
        </div>
    );
}

export default DetailScreen;

