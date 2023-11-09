import React from 'react';
import DetailItem from '../DetailItem/DetailItem';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import { VIDEO_DETAIL_DESCRIPTION, VIDEO_DETAIL_PUBLISHED_AT, VIDEO_DETAIL_CHANNEL, VIDEO_DETAIL_VIEWS, VIDEO_DETAIL_LIKES, VIDEO_DETAIL_COMMENTS, } from '../../constants/Strings';
import { formatDateString } from '../../utils/dateUtils';
import { formatNumber } from '../../utils/numberUtils';

function VideoDetails({ video, videoDetails, loading }) {
    if (loading || !videoDetails) {
        return <LoadingIndicator />;
    }
    return (
        <div>
            <DetailItem title={VIDEO_DETAIL_DESCRIPTION} content={video.snippet.description} />
            <DetailItem title={VIDEO_DETAIL_PUBLISHED_AT} content={formatDateString(video.snippet.publishedAt)} />
            <DetailItem title={VIDEO_DETAIL_CHANNEL} content={video.snippet.channelTitle} />
            <DetailItem title={VIDEO_DETAIL_VIEWS} content={formatNumber(videoDetails.statistics.viewCount)} />
            <DetailItem title={VIDEO_DETAIL_LIKES} content={formatNumber(videoDetails.statistics.likeCount)} />
            <DetailItem title={VIDEO_DETAIL_COMMENTS} content={formatNumber(videoDetails.statistics.commentCount)} />
        </div>
    );
}

export default VideoDetails;



