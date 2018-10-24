'use strict';

const VideoWithHighLight = WithHighlight(Video);
const ArticleWithHighLight = WithHighlight(Article);

const List = props => {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <VideoWithHighLight {...item} />
        );

      case 'article':
        return (
          <ArticleWithHighLight {...item} />
        );
    }
  });
};
