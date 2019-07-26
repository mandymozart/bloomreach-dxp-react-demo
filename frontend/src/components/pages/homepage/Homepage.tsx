import React, {Component} from 'react';

interface IHomepageState {
    welcomeMessage: string;
}

export default () => class Homepage extends Component<{}, IHomepageState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            welcomeMessage: 'Welcome to react',
        };
    }

    public render(): React.ReactElement {
        return (
            <div>
                {this.state.welcomeMessage}
            </div>
        );
    }

};
