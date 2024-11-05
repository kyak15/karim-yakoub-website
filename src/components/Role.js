

import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Collapse } from 'react-bootstrap'

class Role extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			open: props.isOpen,
		}
	}

	render = () => {
        const { open } = this.state

		return (
			<div>
                <Button
                    aria-controls={this.props.id}
                    aria-expanded={open}
                    className='px-0 text-left'
                    onClick={() => this.setState({ open: !open })}
                    size='sm'
                    variant='link'
                >
                    <FontAwesomeIcon
                        className='pr-2'
                        icon={open ? faChevronDown : faChevronRight}
                        size="sm"
                        width={10}
                    />
                    {this.props.role.title}
                </Button>
                <Collapse in={this.state.open}>
                    <div id={this.props.id}>
                        {this.props.role.description.map(d => <p key={d}>{d}</p>)}
                    </div>
                </Collapse>
            </div>
		)
	}
}

export default Role
