import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { defineMessages, injectIntl } from 'react-intl'
import { expandCommunityTimeline } from '../actions/timelines'
import StatusList from '../components/status_list'

class CommunityTimeline extends React.PureComponent {

  static contextTypes = {
    router: PropTypes.object,
  }

  componentDidMount () {
    const { dispatch, onlyMedia } = this.props

    dispatch(expandCommunityTimeline({ onlyMedia }))
  }

  componentDidUpdate (prevProps) {
    if (prevProps.onlyMedia !== this.props.onlyMedia) {
      const { dispatch, onlyMedia } = this.props

      dispatch(expandCommunityTimeline({ onlyMedia }))
    }
  }

  handleLoadMore = maxId => {
    const { dispatch, onlyMedia } = this.props

    dispatch(expandCommunityTimeline({ maxId, onlyMedia }))
  }

  render () {
    const { intl, onlyMedia } = this.props

    const emptyMessage = intl.formatMessage(messages.empty)

    return (
      <StatusList
        scrollKey='community_timeline'
        timelineId={`community${onlyMedia ? ':media' : ''}`}
        onLoadMore={this.handleLoadMore}
        emptyMessage={emptyMessage}
      />
    )
  }

}

const messages = defineMessages({
  empty: { id: 'empty_column.community', defaultMessage: 'The community timeline is empty. Write something publicly to get the ball rolling!' },
})

const mapStateToProps = (state) => ({
  onlyMedia: state.getIn(['settings', 'community', 'other', 'onlyMedia'])
})

CommunityTimeline.propTypes = {
  dispatch: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  onlyMedia: PropTypes.bool,
}

export default injectIntl(connect(mapStateToProps)(CommunityTimeline))