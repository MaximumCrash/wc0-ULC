import React from 'react';
import decode from 'unescape';

const WYSIWYG = (props) => {
    let {html} = props;
    
    return (
        <section className="wysiwyg" dangerouslySetInnerHTML={{__html: decode(html)}}></section>
    )
}

export default WYSIWYG; 