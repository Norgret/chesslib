import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

type CollapsibleDisplayProps = {
	label?: string;
	isCollapsed?: boolean;
	children?: any;	// passed into element body
}

export function CollapsibleDisplay(props: CollapsibleDisplayProps) {
	const [ state, setState ] = useState({isCollapsed: props.isCollapsed});

	function toggleCollapse() {
		if (state.isCollapsed) {
			setState({isCollapsed: false});
		}
		else {
			setState({isCollapsed: true});
		}
	}

	// executes upon chevron click
	// toggle state.isCollapsed
	function collapseButtonClickHandler() {
		toggleCollapse();
	}

	// Returns correct chevron
	// If collapsed, returns right chevron
	// If expanded, returns down chevron
	function getChevron() {
		const { isCollapsed } = state;
		if (isCollapsed) {
			return (
				<FontAwesomeIcon icon={faChevronRight} />
			);
		}
		else return (
			<FontAwesomeIcon icon={faChevronDown} />
		);
	}

	// Returns classname for display content
	// 'hidden' | 'visible'
	function getContentVisibility() {
		return state.isCollapsed ? 'hidden' : 'visible';
	}

	return (

		<div className="collapsible-display">

			<div className="tab">
				<button
					className="btn collapse-btn chevron"
					onClick={ () => {collapseButtonClickHandler()} }
				>{getChevron()}
				</button>
				<h3 className="label text subtitle">{props.label}</h3>
			</div>

			<div className={'content ' + getContentVisibility()}>
				{props.children}
			</div>

		</div>

	);
}