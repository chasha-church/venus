import { FunctionComponent } from 'react';
import { Heading } from '../../../common/Heading/Heading';
import { News } from './News/News';

type NewsBlockProps = {};

export const NewsBlock: FunctionComponent<NewsBlockProps> = ({ }) => {
    return (
        <div>
            <Heading value="Новости" id="news" />
            <News />
        </div>
    );
};
