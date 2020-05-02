import React from 'react';
import Card from '../Card';
import './TagsBar.scss';
import Button from '../Button';

const TagsBar = (props: {tags: string[]}) => {
    const tags = props.tags.map((x,i) => <Button key={i} text={x}></Button>);
    return (
        <Card className="tags-container">
            <strong>Tags</strong>
            {tags}
        </Card>
    );
}

export default TagsBar;