import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Collapse } from 'react-bootstrap'

class Project extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			open: false,
		}
    }

    render = () => {
        const { open } = this.state

        return (
            <div key={this.props.id} className='pb-3'>
                <Button
                    variant='link'
                    size='sm'
                    className='px-0 text-left'
                    onClick={() => this.setState({ open: !open })}
                    aria-controls={this.props.id}
                    aria-expanded={open}
                >
                    <FontAwesomeIcon
                        className='pr-2'
                        icon={open ? faChevronDown : faChevronRight}
                        size="sm"
                        width={10}
                    />
                    <span className='font-weight-bold'>
                        {this.props.project.title}
                    </span> - {this.props.project.description}
                </Button>
                <Collapse in={this.state.open}>
                    <div id={this.props.id}>
                        <ul>
                            {this.props.project.details.bullets.map(d =>
                                <li key={d}>{d}</li>
                            )}
                            {this.props.project.details.link &&
                                <li>
                                    <a href={this.props.project.details.link.url} target='blank'>
                                        {this.props.project.details.link.text}
                                    </a>
                                </li>
                            }
                        </ul>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default Project