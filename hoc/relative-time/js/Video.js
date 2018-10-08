'use strict';

const PrettifyedDateTime = DateTimePretty(DateTime);

const Video = props => {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <PrettifyedDateTime date={props.date} />
        </div>
    )
};