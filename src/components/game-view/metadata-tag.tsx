type MetadataTagProps = {
	attribute: string;
	value?: any;
}

export function MetadataTag(props: MetadataTagProps) {
	return (
		<div className="metadata-tag">
			<div className="text bold key">{props.attribute}:</div>
			<div className="text value">{props.value}</div>
		</div>
	);
}