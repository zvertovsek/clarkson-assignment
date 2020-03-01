import React, { useEffect } from 'react';

interface IProps {
    content: string;
}

interface IState {
    className?: string;
    content?: string;
}

interface ITagAttrs {
    'data-testid': string;
    className?: string;
}

const TagComponent: React.FC<IProps> = (props) => {
    const [ state, setState ] = React.useState<IState>({});
    const tagAttrs: ITagAttrs = {
        "data-testid": "tag" 
    };
    
    useEffect(() => {
        let prefix: string = "";
        let message: string = props.content;

        const regex = /.*?:/;
        if (regex.test(props.content)) {
            const splittedContent = props.content.split(":");
            prefix = splittedContent[0].toLowerCase();
            message = splittedContent.splice(1).join(":");
        }
        
        setState({
            className: (prefix !== "") ? prefix: undefined,
            content: message
        });

        
    }, []);

    
    if (typeof state.className !== 'undefined') {
        tagAttrs.className = state.className;
    }

    return (
        <p {...tagAttrs}>{state.content}</p>
    );
};

export default TagComponent;
