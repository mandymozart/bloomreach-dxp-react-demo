import React , {Component} from 'react';
import IComponentWindowModel from '../../models/dxp/ComponentWindowModel.model';
import IAggregatedPageModel from "../../models/dxp/AggregatedPageModel.model";

interface IBannerProps {
    component: IComponentWindowModel;
    aggregatedPageModel: IAggregatedPageModel;
}

export default () => class BannerComponent extends Component<IBannerProps, {}> {

    render(): React.ReactElement {
        const bannerDocRef = this.props.component.models.document.$ref.replace(/^\/content\//, '');
        const bannerDoc = this.props.aggregatedPageModel.content[bannerDocRef];
        const imageRef = bannerDoc.image.$ref.replace(/^\/content\//, '');
        const imageDoc = this.props.aggregatedPageModel.content[imageRef];
        const imageSrc = 'http://localhost:8080' + imageDoc._links.site.href;

        return (
            <div className="Banner">
                <h2 className="Banner__title">{bannerDoc.title}</h2>
                <div className="Banner__content">
                    <img className="Banner__content__image" src={imageSrc} alt={bannerDoc.title} />
                </div>
            </div>
        );
    }
}
