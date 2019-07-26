import React, {ChangeEvent, Component} from 'react';

interface IInputState {
    value: string;
}

interface IParameters {
    name: string;
    placeholder?: string;
    required: boolean;
    defaultValue: string;
    label: string;
    onChange: (value: string) => void;
}

export default class PasswordInput extends Component<IParameters, IInputState> {
    private readonly onChangeListener: (event: ChangeEvent<HTMLInputElement>) => void = this.onChange.bind(this);

    constructor(props: IParameters) {
        super(props);
        this.state = {
            value: props.defaultValue,
        };
    }

    public onChange(event: ChangeEvent<HTMLInputElement>): void {
        const value = event.target.value;
        this.setState({
            value,
        });
        this.props.onChange(value);
    }

    public render(): React.ReactElement {
        const name = this.props.name;
        return (
            <label>{this.props.label}
                <input
                    value={this.state.value}
                    name={name}
                    type={'text'}
                    placeholder={this.props.placeholder}
                    required={true}
                    onChange={this.onChangeListener}
                />
            </label>
        );

    }
}
