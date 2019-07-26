import React, { Component } from 'react';
import IAggregatedPageModel from '../../../models/dxp/AggregatedPageModel.model';
import BannerComponent from '../../banner/Banner';

interface IHomepageState {
    title: string;
    name: string;
    loadingClassName: string;
    introduction: string;
    aggregatedPageModel?: IAggregatedPageModel;
    containerItemComponents: [];
}

export default () => class Homepage extends Component<{}, IHomepageState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            name: 'Homepage',
            loadingClassName: 'App--loading',
            title: 'DXP React Demo',
            introduction: 'Explore the limits of Bloomreach Digital Experience Manager',
            aggregatedPageModel: undefined,
            containerItemComponents: []
        };
    }

    private computedAppClassName(): string {
        return 'App ' + this.state.loadingClassName
    }

    public render(): React.ReactElement {
        return (
            <div className={this.computedAppClassName()}>
                <header className='App__header'>
                    <div className='App__header__loader'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <h1 className='App__header__title'>{this.state.title}</h1>
                    <p>({this.state.name})</p>
                </header>
                <p className='App__intro'>
                    {this.state.introduction}
                </p>
                <div className='App__content'>
                    {
                        this.state.containerItemComponents.map((containerItemComponent) => {
                            return <BannerComponent aggregatedPageModel={this.state.aggregatedPageModel} component={containerItemComponent} />;
                        })
                    }
                </div>
            </div>
        );
    }

    componentDidMount(): void {
        fetch('http://localhost:8080/site/resourceapi/')
            .then(results => results.json())
            .then(data => {
                this.setState({
                    name: data.page.name,
                    loadingClassName: 'App--loaded',
                    aggregatedPageModel: data,
                    containerItemComponents: data.page.components[0].components[0].components
                });
            })
    }

};
