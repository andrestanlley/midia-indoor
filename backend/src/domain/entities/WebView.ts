interface IWebViewProps {
	name: string;
	url: string;
}

class WebView {
	props: IWebViewProps;

	constructor(props: IWebViewProps) {
		this.props = props;
	}
}

export { WebView, IWebViewProps };
