import React from 'react';
import './App.css';

export default (Homepage: React.ComponentType) => class App extends React.Component<{}, {}> {
    public render(): React.ReactElement {
        return (
            <div className='App'>
                <header className='App-header'>
                    <Homepage/>
                </header>
            </div>
        );
    }
};
