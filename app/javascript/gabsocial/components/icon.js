import AddIcon from '../assets/add_icon'
import AngleRightIcon from '../assets/angle_right_icon'
import AppsIcon from '../assets/apps_icon'
import AudioIcon from '../assets/audio_icon'
import AudioMuteIcon from '../assets/audio_mute_icon'
import BackIcon from '../assets/back_icon'
import BlockquoteIcon from '../assets/blockquote_icon'
import BoldIcon from '../assets/bold_icon'
import CalendarIcon from '../assets/calendar_icon'
import ChatIcon from '../assets/chat_icon'
import CircleIcon from '../assets/circle_icon'
import CloseIcon from '../assets/close_icon'
import CodeIcon from '../assets/code_icon'
import CommentIcon from '../assets/comment_icon'
import CopyIcon from '../assets/copy_icon'
import DissenterIcon from '../assets/dissenter_icon'
import DonorIcon from '../assets/donor_icon'
import EllipsisIcon from '../assets/ellipsis_icon'
import EmailIcon from '../assets/email_icon'
import ErrorIcon from '../assets/error_icon'
import FullscreenIcon from '../assets/fullscreen_icon'
import GabLogoIcon from '../assets/gab_logo'
import GifIcon from '../assets/gif_icon'
import GlobeIcon from '../assets/globe_icon'
import GroupIcon from '../assets/group_icon'
import GroupAddIcon from '../assets/group_add_icon'
import HappyIcon from '../assets/happy_icon'
import HiddenIcon from '../assets/hidden_icon'
import HomeIcon from '../assets/home_icon'
import InvestorIcon from '../assets/investor_icon'
import ItalicIcon from '../assets/italic_icon'
import LikeIcon from '../assets/like_icon'
import LikedIcon from '../assets/liked_icon'
import LinkIcon from '../assets/link_icon'
import ListIcon from '../assets/list_icon'
import ListAddIcon from '../assets/list_add_icon'
import LoadingIcon from '../assets/loading_icon'
import LockIcon from '../assets/lock_icon'
import LockFilledIcon from '../assets/lock_filled_icon'
import MediaIcon from '../assets/media_icon'
import MinimizeFullscreenIcon from '../assets/minimize_fullscreen_icon'
import MissingIcon from '../assets/missing_icon'
import MoreIcon from '../assets/more_icon'
import NotificationsIcon from '../assets/notifications_icon'
import OLListIcon from '../assets/ol_list_icon'
import PauseIcon from '../assets/pause_icon'
import PinIcon from '../assets/pin_icon'
import PlayIcon from '../assets/play_icon'
import PollIcon from '../assets/poll_icon'
import ProIcon from '../assets/pro_icon'
import RepostIcon from '../assets/repost_icon'
import RichTextIcon from '../assets/rich_text_icon'
import SearchIcon from '../assets/search_icon'
import SearchAltIcon from '../assets/search_alt_icon'
import ShareIcon from '../assets/share_icon'
import ShopIcon from '../assets/shop_icon'
import StrikethroughIcon from '../assets/strikethrough_icon'
import SubtractIcon from '../assets/subtract_icon'
import TextSizeIcon from '../assets/text_size_icon'
import TrendsIcon from '../assets/trends_icon'
import ULListIcon from '../assets/ul_list_icon'
import UnderlineIcon from '../assets/underline_icon'
import UnlockFilledIcon from '../assets/unlock_filled_icon'
import VerifiedIcon from '../assets/verified_icon'
import WarningIcon from '../assets/warning_icon'

const ICONS = {
  'add': AddIcon,
  'angle-right': AngleRightIcon,
  'apps': AppsIcon,
  'audio': AudioIcon,
  'audio-mute': AudioMuteIcon,
  'back': BackIcon,
  'blockquote': BlockquoteIcon,
  'bold': BoldIcon,
  'calendar': CalendarIcon,
  'chat': ChatIcon,
  'close': CloseIcon,
  'code': CodeIcon,
  'comment': CommentIcon,
  'copy': CopyIcon,
  'dissenter': DissenterIcon,
  'donor': DonorIcon,
  'ellipsis': EllipsisIcon,
  'email': EmailIcon,
  'error': ErrorIcon,
  'fullscreen': FullscreenIcon,
  'gab-logo': GabLogoIcon,
  'gif': GifIcon,
  'globe': GlobeIcon,
  'group': GroupIcon,
  'group-add': GroupAddIcon,
  'hidden': HiddenIcon,
  'happy': HappyIcon,
  'home': HomeIcon,
  'investor': InvestorIcon,
  'italic': ItalicIcon,
  'like': LikeIcon,
  'liked': LikedIcon,
  'link': LinkIcon,
  'list': ListIcon,
  'list-add': ListAddIcon,
  'loading': LoadingIcon,
  'lock': LockIcon,
  'lock-filled': LockFilledIcon,
  'media': MediaIcon,
  'minimize-fullscreen': MinimizeFullscreenIcon,
  'missing': MissingIcon,
  'more': MoreIcon,
  'notifications': NotificationsIcon,
  'ol-list': OLListIcon,
  'pause': PauseIcon,
  'pin': PinIcon,
  'play': PlayIcon,
  'poll': PollIcon,
  'pro': ProIcon,
  'repost': RepostIcon,
  'rich-text': RichTextIcon,
  'search': SearchIcon,
  'search-alt': SearchAltIcon,
  'share': ShareIcon,
  'shop': ShopIcon,
  'strikethrough': StrikethroughIcon,
  'subtract': SubtractIcon,
  'text-size': TextSizeIcon,
  'trends': TrendsIcon,
  'ul-list': ULListIcon,
  'underline': UnderlineIcon,
  'unlock-filled': UnlockFilledIcon,
  'verified': VerifiedIcon,
  'warning': WarningIcon,
  '': CircleIcon,
}

export default class Icon extends PureComponent {

  static propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }

  render() {
    const { id, ...options } = this.props

    // : todo : add all required icons
    const Asset = ICONS[id] || CircleIcon

    return <Asset {...options} />

  }

}
